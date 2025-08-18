"use client";
import React, { useEffect, useState } from "react";
import WelcomePage from "./welcome";
import axios from "axios";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import TopSuggestedFund from "@/components/topSuggestedFuns";
import Link from "next/link";
import {
    Form, FormControl, FormField, FormItem, FormMessage
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import HCaptcha from "@hcaptcha/react-hcaptcha";


const FormSchema = z.object({
    username: z.string().min(2, { message: "Username must be at least 2 characters." }),
    mobile: z.string().nonempty({ message: "Mobile number is required." }),
    email: z.string().email({ message: "Invalid email address." }),
    message: z.string().optional(),
});

const FinancialHealthPage = () => {
    const [isStart, setIsStart] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [answers, setAnswers] = useState([]);
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);
    const [questions, setQuestions] = useState([]);

    const [performanceData, setPerformanceData] = useState({});
    const [loading, setLoading] = useState(false);
    console.log(performanceData)

    useEffect(() => {
        if (isQuizCompleted) {
            const suggestedFunds = getSuggestedFunds();
            if (suggestedFunds.length > 0) {
                fetchPerformanceData(suggestedFunds);
            }
        }
    }, [isQuizCompleted]);

    const fetchPerformanceData = async (categories) => {
        setIsModalOpen(true);
        setLoading(true);
        try {
            // Join all categories into one string with commas
            const queryString = categories.map(cat => encodeURIComponent(cat)).join(",");
            console.log("Query String:", queryString);

            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_DATA_API}/api/open-apis/fund-performance/fp-data?categorySchemes=${queryString}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
            );

            console.log("API Response:", response.data);

            if (response.status === 200) {
                const { data } = response.data;
                setPerformanceData(data.slice(0, 5));
            }
        } catch (error) {
            console.error("Error fetching performance data:", error);
        } finally {
            setLoading(false);
        }
    };

    const fetchQuestions = async () => {
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_DATA_API}/api/open-apis/health-questions?apikey=${process.env.NEXT_PUBLIC_API_KEY}`
            );
            if (response.status === 200) {
                setQuestions(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleAnswerSelect = (mark) => {
        setSelectedAnswer(mark);

        const newAnswer = {
            question: questions[currentQuestionIndex].question,
            selectedAnswerMarks: mark,
        };

        setScore((prevScore) => prevScore + mark);

        setTimeout(() => {
            const nextQuestionIndex = currentQuestionIndex + 1;

            if (nextQuestionIndex >= questions.length) {
                setAnswers((prev) => [...prev, newAnswer]);
                setIsQuizCompleted(true);
            } else {
                setAnswers((prev) => [...prev, newAnswer]);
                setCurrentQuestionIndex(nextQuestionIndex);
                setSelectedAnswer(null);
            }
        }, 300); // ⏳ 0.3 seconds delay
    };

    const sendAllAnswersToAPI = async (answers) => {
        let healthprofile
        const totalScore = answers.reduce((acc, curr) => acc + curr.selectedAnswerMarks, 0);
        if (totalScore >= 1 && totalScore <= 3) {
            healthprofile = "Critical"
        }
        else if (totalScore >= 4 && totalScore <= 5) {
            healthprofile = "Weak"
        }
        else if (totalScore >= 6 && totalScore <= 7) {
            healthprofile = "Border Line"
        }
        else if (totalScore >= 8 && totalScore <= 9) {
            healthprofile = "Fit"
        }
        else {
            healthprofile = "Excellent"
        }
        const payload = {
            user: userdata,
            score: totalScore,
            answers: answers,
            healthprofile: healthprofile
        };
        const emailContent = answers.map(answer => {
            return `<p><strong>Question:</strong> ${answer.question}</p>
                    <p><strong>Answer:</strong> ${answer.selectedAnswerText}</p>`;
        }).join('');

        const emaildata = {
            user: userdata?.username,
            to: userdata?.email,
            subject: 'Thank You for Your Enquiry!',
            text: `Dear ${userdata?.username},
    We sincerely appreciate your interest and the time you took to fill out our enquiry form. We have received your details, and our team will be in touch with you soon.
    
    Your score is ${totalScore}
    
    Here are the answers you provided:
    
    ${emailContent},`
        };
        const senderdata = {
            user: sitedata?.title,
            to: sitedata?.email,
            subject: 'New Enquiry',
            text: `New Enquiry from Risk profile\n
User Name : ${data?.username}, \n
Email : ${data?.email} \n
Mobile number : ${data?.mobile} \n
Message : ${data?.message}\n
User score is ${totalScore}

Here are the answers you provided:
    
${emailContent},`,
        }
        const response = await axios.post("/api/financialhealth/", payload);
        await axios.post('/api/email/', emaildata);
        const sender = await axios.post('/api/email/', senderdata);
        if (response.status === 201) {
            toast({
                description: "Your message has been sent.",
            });
        } else {
            alert(response.statusText);
        }
    };

    const InquiryForm = () => {
        const [hcaptchaToken, setHcaptchaToken] = useState(null);

        const form = useForm({
            resolver: zodResolver(FormSchema),
            defaultValues: {
                username: "",
                mobile: "",
                email: "",
                message: "",
                captcha: "",
            },
        });

        // Handle form submission
        const onSubmit = async (data) => {
            setLoading(true)
            setUserData(data)
            setIsModalOpen(false)
            setLoading(false)
            setHcaptchaToken(null);
        };

        return (
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 rounded py-3 px-6 text-black">
                    <div className="flex justify-between items-center">
                        <h1 className="font-medium text-xl text-white">Please Fill Your Detail Carefully...</h1>
                        <Link href="/" className="text-right text-blue-500 font-medium">Back</Link>
                    </div>
                    {/* Username Field */}
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="User Name" {...field} aria-label="User Name" className="border-2 border-gray-500" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Mobile Field */}
                    <FormField
                        control={form.control}
                        name="mobile"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Mobile" {...field} aria-label="Mobile Number" className="border-2 border-gray-500" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Email Field */}
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input type="email" placeholder="Email" {...field} aria-label="Email" className="border-2 border-gray-500" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Message Field */}
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <textarea placeholder="Message" {...field} className="w-full border-2 border-gray-500 p-1 rounded bg-white" aria-label="Message" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* hCaptcha */}
                    <HCaptcha
                        theme="dark"
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}// Replace with your site key
                        onVerify={setHcaptchaToken} // Set the token on successful verification
                    />

                    {/* Submit Button */}
                    <button type="submit" className="btn-primary">{!loading ? "Submit" : "Loading..."}</button>
                </form>
            </Form>
        );
    };

    const getResultMessage = () => {
        if (score >= 1 && score <= 3) return { message: "Critical", color: "text-red-500" };
        if (score >= 4 && score <= 5) return { message: "Weak", color: "text-yellow-600" };
        if (score >= 6 && score <= 7) return { message: "Border Line", color: "text-yellow-400" };
        if (score >= 8 && score <= 9) return { message: "Fit", color: "text-green-400" };
        return { message: "Excellent", color: "text-green-500" };
    };

    const getSuggestedFunds = () => {
        switch (getResultMessage().message) {
            case "Critical":
                return ["Liquid Fund", "Ultra Short Duration Fund", "Balanced Hybrid Fund"];
            case "Weak":
                return ["Conservative Hybrid Fund", "Equity Savings Fund", "Multi Asset Allocation Fund"];
            case "Border Line":
                return ["Aggressive Hybrid Fund", "Large & Mid Cap Fund", "Index Funds/ETFs"];
            case "Fit":
                return ["Flexi Cap Fund", "Mid Cap Fund", "Focused Fund"];
            case "Excellent":
                return ["ELSS Fund", "International Fund", "Thematic Fund"];
            default:
                return [];
        }
    };

    useEffect(() => {
        fetchQuestions();
    }, [isStart]);

    return (
        <div>
            <InnerBanner pageName={"Financial Health"} />
            <div className="flex flex-col bg-cover bg-center relative">
                <div className="absolute inset-0 bg-black"></div>
                {isModalOpen && (
                    <>
                        {/* 🔵 Background Blur Layer */}
                        <div className="fixed inset-0 bg-black/30 backdrop-blur-xs z-10"></div>

                        {/* 🔵 Modal */}
                        <div className="fixed inset-0 flex items-center justify-center z-20">
                            <div className="p-3 rounded-lg shadow-lg w-[30rem] bg-zinc-950 ring-1 ring-gray-800 text-white mt-10">
                                <InquiryForm onClose={() => {
                                    setIsModalOpen(false);
                                    setIsFormVisible(true); // Show quiz after form is filled
                                }} />
                            </div>
                        </div>
                    </>
                )}

                <div className="flex flex-col items-center justify-center flex-grow text-center px-6 relative py-20 space-y-5">
                    <div className="bg-white/10 backdrop-blur-xl px-10 py-7 rounded-2xl shadow-xl border border-white/20 max-w-5xl">
                        {!isStart ? (
                            <WelcomePage onStatus={setIsStart} />
                        ) : isQuizCompleted ? (
                            <div className="">
                                <div className="grid grid-cols-2 gap-5">
                                    <div className="">
                                        <Image src={"/health-check.webp"} width={900} height={200} alt="Image" className="bg-cover rounded" />
                                    </div>
                                    <div className="flex flex-col items-center text-center space-y-6">
                                        {/* 🎯 RESULT CARD */}
                                        <div className="bg-gradient-to-r from-[var(--rv-secondary)] to-[var(--rv-third)] p-8 rounded-2xl shadow-2xl w-full max-w-md">
                                            <h2 className="text-xl font-semibold text-white">Your Health checkup is</h2>
                                            <div className="mt-3 text-5xl font-extrabold text-white">
                                                {getResultMessage().message}
                                            </div>
                                        </div>

                                        {/* 🎯 RESULT DESCRIPTION */}
                                        <div>
                                            <p className="text-neutral-100 text-xl max-w-md">
                                                {getResultMessage().message === "Critical" &&
                                                    "Your financial health is in danger. You’re exposed to risks. Start investing, even a small start today can protect your future. Don’t wait for a crisis to act."}

                                                {getResultMessage().message === "Weak" &&
                                                    "Your financial base is fragile. Right now, your money isn't growing. Begin with disciplined investing to build strength and security step by step."}

                                                {getResultMessage().message === "Border Line" &&
                                                    "You’ve made a start, but it’s not enough. With focused investing, you can reduce stress and grow more confidently. Take the next step today."}

                                                {getResultMessage().message === "Fit" &&
                                                    "You're doing well. Keep going with smarter strategies. Long-term investing can help you grow potential wealth and give you peace of mind in future."}

                                                {getResultMessage().message === "Excellent" &&
                                                    "You've built a strong foundation. Now’s the time to grow faster, diversify more, invest with purpose, and build long-term potential wealth."}
                                            </p>
                                        </div>
                                        <Link href={"#showfunds"} id="showfunds" className="btn-secondary">
                                            Show Funds
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col">
                                {/* ✅ Question */}
                                <h2 className="text-4xl font-semibold mb-4 max-w-3xl text-white">
                                    {currentQuestionIndex + 1}. {questions[currentQuestionIndex]?.question}
                                </h2>

                                {/* ✅ Answer Buttons */}
                                <div className="mt-5 space-y-4">
                                    <button
                                        className={`mb-5 py-3 w-full rounded-xl border font-bold text-xl transition ${selectedAnswer === 1 ? "bg-[var(--rv-secondary)] text-white" : "bg-[var(--rv-primary)] text-white"
                                            }`}
                                        onClick={() => handleAnswerSelect(1)}
                                        disabled={selectedAnswer !== null} // ✅ Disable once clicked
                                    >
                                        Yes
                                    </button>

                                    <button
                                        className={`py-3 w-full rounded-xl border font-bold text-xl transition ${selectedAnswer === 0 ? "bg-[var(--rv-secondary)] text-white" : "bg-[var(--rv-primary)] text-white"
                                            }`}
                                        onClick={() => handleAnswerSelect(0)}
                                        disabled={selectedAnswer !== null}
                                    >
                                        No
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    {isQuizCompleted &&
                        <div id="showfunds" className="bg-white/10 backdrop-blur-xl px-10 py-7 rounded-2xl shadow-xl border border-white/20 w-5xl">
                            <div className="text-left mt-6">
                                <div className="text-center mb-5">
                                    <h3 className="text-2xl font-bold text-white mb-4">Suggested Funds for You</h3>
                                    <p className="text-gray-100 max-w-2xl mx-auto text-sm">
                                        The suggested funds are provided based on general categories and historical performance data.
                                        These are not investment recommendations or personalized financial advice.
                                        Please consult your financial advisor and read all scheme-related documents carefully before investing.
                                        Mutual Fund investments are subject to market risks. Read all scheme related documents carefully.
                                    </p>
                                </div>

                                {loading && <p className="text-white">⏳ Loading fund suggestions...</p>}

                                {!loading &&
                                    performanceData.length > 0 &&
                                    <TopSuggestedFund
                                        performanceData={performanceData}
                                    />
                                }
                                <div className=" flex justify-center items-center mt-4">
                                    <Link href={"/performance/fund-performance"} className="btn-secondary">
                                        Explore more
                                    </Link>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div >
        </div >
    );
};

export default FinancialHealthPage;
