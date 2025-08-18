import React from "react";
import { BarChart3, PieChart, LineChart, Wallet, ShieldCheck, FileCheck } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Mutual Fund Services",
  description:
    "Plan, invest, and grow your wealth with SHREEFIN’s mutual fund solutions. From SIPs to tax-saving options, we guide you toward smarter investments tailored to your goals.",
};

const MutualFundServicesPage = () => {
  return (
    <section className="max-w-screen-xl mx-auto lg:px-0 md:px-2 px-4 py-40 text-[var(--rv-white)]">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[var(--rv-white)]">Mutual Fund Services</h1>
        <p className="text-lg mt-2">
          Smarter investing for your future — SIPs, tax-saving funds, and growth opportunities
        </p>
      </div>

      {/* Introduction */}
      <div className="text-base leading-relaxed space-y-4 mb-10">
        <p>
          Investing in mutual funds is one of the most effective ways to build wealth, diversify your portfolio,
          and achieve financial goals. Whether you’re starting your first SIP or looking for advanced
          strategies, the right guidance can make all the difference.
        </p>
        <p>
          At <strong>SHREEFIN</strong>, we simplify investing by offering expert insights,
          handpicked schemes, and end-to-end support. From tax-efficient ELSS funds to long-term equity
          growth strategies, we help you invest with confidence.
        </p>
      </div>

      {/* Why Mutual Fund Services Matter */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-[var(--rv-primary)] mb-6">Why Invest in Mutual Funds with Us?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <BarChart3 className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Professional Fund Management",
              desc: "Your money is managed by experienced professionals aiming for long-term growth.",
            },
            {
              icon: <PieChart className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Diversified Portfolio",
              desc: "Spread your investment across sectors and assets to reduce risk.",
            },
            {
              icon: <LineChart className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Goal-Based Planning",
              desc: "Funds tailored for retirement, children’s education, tax saving, and more.",
            },
            {
              icon: <Wallet className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Easy Entry with SIPs",
              desc: "Start with as low as ₹500/month and grow steadily over time.",
            },
            {
              icon: <ShieldCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Trusted & Regulated",
              desc: "All investments comply with SEBI regulations for your safety and transparency.",
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

      {/* Our Mutual Fund Services */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-[var(--rv-white)] mb-6">Our Mutual Fund Solutions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Systematic Investment Plans (SIP)",
              desc: "Disciplined, monthly investments for long-term wealth creation.",
            },
            {
              icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Tax Saving Funds (ELSS)",
              desc: "Save up to ₹1.5 lakh under Section 80C with equity-linked savings schemes.",
            },
            {
              icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Lumpsum Investments",
              desc: "Invest surplus funds for potential long-term returns.",
            },
            {
              icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Retirement & Child Plans",
              desc: "Specially curated funds for life milestones and future security.",
            },
            {
              icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Debt & Hybrid Funds",
              desc: "Balanced options for conservative or moderate investors.",
            },
            {
              icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Fund Advisory",
              desc: "Personalized guidance to select the right schemes for your goals.",
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
          Whether you’re starting your first SIP, planning for retirement, or looking for advanced fund strategies —
          <strong> SHREEFIN </strong> is here to guide you.
          Invest smartly, stay disciplined, and let your wealth grow over time.
        </p>
        <Link href="contact-us" className="btn-primary">
          Start Investing in Mutual Funds
        </Link>
      </div>
    </section>
  );
};

export default MutualFundServicesPage;
