import React from "react";
import { HeartPulse, ShieldCheck, Users, FileText, Wallet, FileCheck } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Health Insurance Services",
    description:
        "Stay protected against medical emergencies with SHREEFIN’s health insurance solutions. From individual to family health coverage, we connect you to the best plans for your needs.",
};

const HealthInsuranceServicesPage = () => {
    return (
        <section className="max-w-screen-xl mx-auto lg:px-0 md:px-2 px-4 py-40 text-[var(--rv-white)]">
            {/* Heading */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-[var(--rv-white)]">Health Insurance Services</h1>
                <p className="text-lg mt-2">
                    Comprehensive health coverage for individuals, families, and senior citizens
                </p>
            </div>

            {/* Introduction */}
            <div className="text-base leading-relaxed space-y-4 mb-10">
                <p>
                    Medical costs are rising every year — and an unexpected illness or accident can impact your
                    finances overnight. Health insurance provides a financial shield, ensuring that quality
                    treatment is accessible without draining your savings.
                </p>
                <p>
                    At <strong>SHREEFIN</strong>, we help you find the right health
                    insurance plan — whether it’s for yourself, your family, or your employees. We partner
                    with leading insurers to bring you affordable, reliable, and comprehensive coverage for
                    every stage of life.
                </p>
            </div>

            {/* Why Health Insurance Matters */}
            <div className="mb-10">
                <h2 className="text-2xl font-semibold text-[var(--rv-primary)] mb-6">Why Our Health Insurance Services Matter</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            icon: <HeartPulse className="text-[var(--rv-primary)] w-6 h-6" />,
                            title: "Medical Expense Protection",
                            desc: "Covers hospitalization, surgeries, and emergency treatments.",
                        },
                        {
                            icon: <ShieldCheck className="text-[var(--rv-primary)] w-6 h-6" />,
                            title: "Financial Security",
                            desc: "Keeps your savings safe from unexpected medical bills.",
                        },
                        {
                            icon: <Users className="text-[var(--rv-primary)] w-6 h-6" />,
                            title: "Coverage for Everyone",
                            desc: "Plans for individuals, families, and senior citizens.",
                        },
                        {
                            icon: <Wallet className="text-[var(--rv-primary)] w-6 h-6" />,
                            title: "Affordable Premiums",
                            desc: "Flexible pricing with wide coverage options to suit your budget.",
                        },
                        {
                            icon: <FileText className="text-[var(--rv-primary)] w-6 h-6" />,
                            title: "Preventive Care",
                            desc: "Covers annual checkups, vaccinations, and wellness benefits.",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="flex items-start gap-4 bg-gradient-to-r from-[var(--rv-secondary)] to-[var(--rv-bg-primary)] text-[var(--rv-white)] p-4 rounded-md shadow-sm"
                        >
                            <div>{item.icon}</div>
                            <div>
                                <h3 className="font-semibold">{item.title}</h3>
                                <p className="text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Our Health Insurance Solutions */}
            <div className="mb-10">
                <h2 className="text-2xl font-semibold text-[var(--rv-white)] mb-6">Our Health Insurance Solutions</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
                            title: "Individual Health Insurance",
                            desc: "Covers personal medical expenses for illnesses and accidents.",
                        },
                        {
                            icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
                            title: "Family Floater Plans",
                            desc: "One policy covering the entire family under a single premium.",
                        },
                        {
                            icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
                            title: "Senior Citizen Health Plans",
                            desc: "Special coverage for elderly parents with higher age limits.",
                        },
                        {
                            icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
                            title: "Critical Illness Cover",
                            desc: "Lump-sum payout for serious illnesses like cancer or heart disease.",
                        },
                        {
                            icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
                            title: "Top-Up & Super Top-Up Plans",
                            desc: "Enhance your existing coverage at lower premiums.",
                        },
                        {
                            icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
                            title: "Maternity & Newborn Coverage",
                            desc: "Covers maternity expenses and newborn care for growing families.",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="flex items-start gap-4 bg-gradient-to-r from-[var(--rv-secondary)] to-[var(--rv-bg-primary)] text-[var(--rv-white)] p-4 rounded-md shadow-sm"
                        >
                            <div>{item.icon}</div>
                            <div>
                                <h3 className="font-semibold">{item.title}</h3>
                                <p className="text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-[var(--rv-primary)] to-[var(--rv-bg-primary)] p-6 rounded-lg shadow-md mt-10">
                <p className="mb-4">
                    Whether you need coverage for yourself, your family, or your parents —
                    <strong> SHREEFIN </strong> connects you with the best health insurance plans.
                    Protect your health and finances with the right policy today.
                </p>
                <Link href="contact-us" className="btn-primary">
                    Get Health Insurance Guidance
                </Link>
            </div>
        </section>
    );
};

export default HealthInsuranceServicesPage;
