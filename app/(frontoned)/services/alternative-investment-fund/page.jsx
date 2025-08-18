import React from "react";
import { Landmark, ShieldCheck, TrendingUp, Layers, BarChart3, FileCheck, Wallet } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Alternative Investment Funds (AIF)",
    description:
        "Discover high-growth opportunities with SHREEFIN’s Alternative Investment Fund (AIF) solutions. From private equity to hedge funds, we connect you to exclusive investments tailored for sophisticated investors.",
};

const AIFPage = () => {
    return (
        <section className="max-w-screen-xl mx-auto lg:px-0 md:px-2 px-4 py-40 text-[var(--rv-white)]">
            {/* Heading */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-[var(--rv-white)]">Alternative Investment Funds (AIF)</h1>
                <p className="text-lg mt-2">
                    Exclusive investment opportunities beyond traditional equity and debt markets
                </p>
            </div>

            {/* Introduction */}
            <div className="text-base leading-relaxed space-y-4 mb-10">
                <p>
                    Alternative Investment Funds (AIFs) are designed for sophisticated investors seeking
                    exposure beyond traditional stocks, bonds, and mutual funds. These funds pool capital from
                    investors to invest in high-growth opportunities such as private equity, venture capital,
                    hedge funds, and structured credit.
                </p>
                <p>
                    At <strong>SHREEFIN</strong>, we connect you with SEBI-registered AIF
                    managers who curate exclusive investment strategies tailored to your risk profile and wealth
                    objectives — providing access to opportunities that are not available through conventional
                    channels.
                </p>
            </div>

            {/* Why AIF Matters */}
            <div className="mb-10">
                <h2 className="text-2xl font-semibold text-[var(--rv-primary)] mb-6">
                    Why Choose Alternative Investment Funds?
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            icon: <TrendingUp className="text-[var(--rv-primary)] w-6 h-6" />,
                            title: "High-Growth Potential",
                            desc: "Access asset classes with the potential for superior long-term returns.",
                        },
                        {
                            icon: <ShieldCheck className="text-[var(--rv-primary)] w-6 h-6" />,
                            title: "Diversification",
                            desc: "Reduce dependency on traditional markets by spreading risk across alternative assets.",
                        },
                        {
                            icon: <Landmark className="text-[var(--rv-primary)] w-6 h-6" />,
                            title: "Exclusive Opportunities",
                            desc: "Invest in private equity, venture capital, and real estate projects not open to retail investors.",
                        },
                        {
                            icon: <Wallet className="text-[var(--rv-primary)] w-6 h-6" />,
                            title: "Tailored Strategies",
                            desc: "Solutions designed for high-net-worth individuals and institutions.",
                        },
                        {
                            icon: <BarChart3 className="text-[var(--rv-primary)] w-6 h-6" />,
                            title: "SEBI-Regulated",
                            desc: "Transparent, compliant, and regulated structures for investor protection.",
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

            {/* Our AIF Solutions */}
            <div className="mb-10">
                <h2 className="text-2xl font-semibold text-[var(--rv-white)] mb-6">Our AIF Offerings</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
                            title: "Category I AIF",
                            desc: "Invests in startups, SMEs, infrastructure, and socially beneficial sectors.",
                        },
                        {
                            icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
                            title: "Category II AIF",
                            desc: "Includes private equity, debt funds, and structured credit strategies.",
                        },
                        {
                            icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
                            title: "Category III AIF",
                            desc: "Hedge funds and complex strategies aiming for short-term gains.",
                        },
                        {
                            icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
                            title: "Venture Capital Funds",
                            desc: "Backing high-potential early-stage startups for exponential growth.",
                        },
                        {
                            icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
                            title: "Private Equity Funds",
                            desc: "Investing in established businesses to unlock long-term value.",
                        },
                        {
                            icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
                            title: "Real Estate Funds",
                            desc: "Exposure to commercial and residential real estate investments.",
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
                    Looking for exclusive, high-growth investment opportunities?
                    <strong> SHREEFIN </strong> partners with leading SEBI-registered AIF managers to bring you curated investment solutions.
                    Diversify your portfolio and explore the power of alternatives today.
                </p>
                <Link href="contact-us" className="btn-primary">
                    Explore AIF Solutions
                </Link>
            </div>
        </section>
    );
};

export default AIFPage;
