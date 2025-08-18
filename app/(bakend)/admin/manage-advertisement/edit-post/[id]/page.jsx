"use client";
import React, { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Form, FormControl, FormField, FormItem, FormLabel, FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from 'axios';
import { toast } from '@/hooks/use-toast';
import { Toaster } from "@/components/ui/toaster";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useParams, useRouter } from "next/navigation";
import { DefaultContext } from "react-icons";
import DefaultLayout from "@/components/admin/Layouts/DefaultLaout";
// Dynamically import JoditEditor with SSR disabled
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const FormSchema = z.object({
    link: z.string().nonempty({ message: "Link is required." }),
    image: z.instanceof(File).optional(),
});

export function InputForm({ postId }) {
    const router = useRouter();
    const [content, setContent] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [previousImage, setPreviousImage] = useState(null);
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            link: "",
        },
    });

    // Fetch the post data if editing
    useEffect(() => {
        if (postId) {
            axios.get(`/api/advertisement/${postId}`)
                .then(response => {
                    const { link, image } = response.data.advertisement;
                    form.setValue('link', link);
                    setPreviousImage(image?.url);
                })
                .catch(error => {
                    console.error("Error fetching post data:", error);
                });
        }
    }, [postId]);

    const onSubmit = async (data) => {
        setLoading(true);
        const formData = new FormData();
        formData.append('image', selectedImage);
        formData.append('link', data.link);

        try {
            let response;
            response = await axios.put(`/api/advertisement/${postId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (response.status === 200) {
                toast({
                    variant: '',
                    title: `Post Updated successfully`,
                });
                form.reset();
                setSelectedImage(null);
                router.push("/admin/manage-advertisement/manage");
            } else {
                toast({
                    variant: "destructive",
                    title: "Uh oh! Something went wrong.",
                    description: "There was a problem with your request.",
                });
            }
        } catch (error) {
            console.error('Error:', error);
            alert("An unexpected error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 rounded px-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Username Field */}
                    <FormField
                        control={form.control}
                        name="link"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-semibold text-gray-700">link</FormLabel>
                                <FormControl>
                                    <Input placeholder="link" {...field} aria-label="link" className="border border-gray-500" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                </div>

                {/* Image Upload Field */}
                <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-semibold text-gray-700">Upload Image</FormLabel>
                            <FormControl>
                                <Input type="file" accept="image/*" onChange={(e) => {
                                    const file = e.target.files[0];
                                    if (file) {
                                        setSelectedImage(file);
                                        field.onChange(file); // Update react-hook-form with selected file
                                    }
                                }} aria-label="Image" className="border border-gray-500" />
                            </FormControl>
                            <FormMessage />
                            {previousImage && (
                                <div className="mt-4">
                                    <p className="text-sm text-gray-500">Previous Image:</p>
                                    <img src={previousImage} alt="Previous Image" className="max-w-sm rounded border h-auto w-40" />
                                </div>
                            )}
                        </FormItem>
                    )}
                />

                <Button className="text-[var(--rv-white)] bg-[var(--rv-primary)]" type="submit">{!loading ? 'Submit' : 'Loading...'}</Button>
            </form>
        </Form>
    );
}

const EditPost = () => {
    const param = useParams();
    const postId = param.id
    return (
        <DefaultLayout>
            <div className="flex justify-between">
                <h1 className='font-bold text-gray-700 text-2xl mb-7'>
                    Edit Advertisement
                </h1>
                <Link href="/admin/manage-advertisement/manage">
                    <Button className="text-[var(--rv-white)] bg-[var(--rv-primary)]">All Advertisement</Button>
                </Link>
            </div>
            <InputForm postId={postId} />
            <Toaster />
        </DefaultLayout>
    );
};

export default EditPost;