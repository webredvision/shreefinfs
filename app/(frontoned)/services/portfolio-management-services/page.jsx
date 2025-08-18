import React from "react";
import { LineChart, PieChart, BarChart3, ShieldCheck, FileText, Wallet, FileCheck, TrendingUp } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Portfolio Management Services (PMS)",
    description:
        "Grow and manage your wealth with SHREEFIN’s Portfolio Management Services (PMS). From customized investment strategies to expert fund management, we help you achieve your financial goals.",
};

const PMSPage = () => {
    return (
        <section className="max-w-screen-xl mx-auto lg:px-0 md:px-2 px-4 py-40 text-[var(--rv-white)]">
            {/* Heading */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-[var(--rv-white)]">Portfolio Management Services (PMS)</h1>
                <p className="text-lg mt-2">
                    Expert-led investment management to grow and protect your wealth
                </p>
            </div>

            {/* Introduction */}
            <div className="text-base leading-relaxed space-y-4 mb-10">
                <p>
                    Managing a large portfolio requires expertise, strategy, and continuous monitoring. That’s where
                    <strong> Portfolio Management Services (PMS) </strong> come in — offering professional management of your investments, tailored to your financial goals and risk appetite.
                </p>
                <p>
                    At <strong>SHREEFIN</strong>, we connect you with SEBI-registered PMS providers who specialize in equity, debt, and hybrid strategies. Whether you’re looking for long-term capital growth, stable income, or wealth preservation, PMS delivers structured and disciplined investment management.
                </p>
            </div>

            {/* Why PMS Matters */}
            <div className="mb-10">
                <h2 className="text-2xl font-semibold text-[var(--rv-primary)] mb-6">Why Choose PMS for Your Investments?</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            icon: <TrendingUp className="text-[var(--rv-primary)] w-6 h-6" />,
                            title: "Professional Expertise",
                            desc: "Your portfolio is managed by experienced fund managers with deep market knowledge.",
                        },
                        {
                            icon: <ShieldCheck className="text-[var(--rv-primary)] w-6 h-6" />,
                            title: "Risk Management",
                            desc: "Diversified strategies to balance risk and return across market cycles.",
                        },
                        {
                            icon: <Wallet className="text-[var(--rv-primary)] w-6 h-6" />,
                            title: "Tailored Investment Plans",
                            desc: "Customized portfolios based on your goals, timeline, and risk profile.",
                        },
                        {
                            icon: <FileText className="text-[var(--rv-primary)] w-6 h-6" />,
                            title: "Transparency",
                            desc: "Regular reporting, performance tracking, and compliance with SEBI norms.",
                        },
                        {
                            icon: <BarChart3 className="text-[var(--rv-primary)] w-6 h-6" />,
                            title: "Growth-Oriented",
                            desc: "Designed to help you outperform traditional investment options.",
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

            {/* Our PMS Solutions */}
            <div className="mb-10">
                <h2 className="text-2xl font-semibold text-[var(--rv-white)] mb-6">Our PMS Offerings</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
                            title: "Equity PMS",
                            desc: "Focused equity strategies for long-term capital appreciation.",
                        },
                        {
                            icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
                            title: "Debt PMS",
                            desc: "Fixed income-oriented strategies for stability and predictable returns.",
                        },
                        {
                            icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
                            title: "Hybrid PMS",
                            desc: "Balanced portfolios combining equity and debt for optimal risk-adjusted growth.",
                        },
                        {
                            icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
                            title: "Thematic & Sectoral PMS",
                            desc: "Invest in themes like technology, infrastructure, or ESG for targeted exposure.",
                        },
                        {
                            icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
                            title: "Discretionary PMS",
                            desc: "Complete portfolio management by experts with regular reporting.",
                        },
                        {
                            icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
                            title: "Non-Discretionary PMS",
                            desc: "Investors retain decision-making with advisory support from fund managers.",
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
                    Looking for personalized, professionally managed investments?
                    <strong> SHREEFIN </strong> partners with leading SEBI-registered PMS providers to create tailored strategies that align with your wealth goals.
                    Experience smart, structured portfolio management today.
                </p>
                <Link href="contact-us" className="btn-primary">
                    Explore PMS Solutions
                </Link>
            </div>
        </section>
    );
};

export default PMSPage;
