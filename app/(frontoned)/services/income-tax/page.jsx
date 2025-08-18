import React from "react";
import { FileText, Calculator, Banknote, Wallet, ShieldCheck, FileCheck } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Income Tax Services",
  description:
    "Simplify your tax journey with SHREEFIN’s income tax solutions. From filing returns to tax planning and compliance, we provide trusted guidance for individuals and businesses.",
};

const IncomeTaxServicesPage = () => {
  return (
    <section className="max-w-screen-xl mx-auto lg:px-0 md:px-2 px-4 py-40 text-[var(--rv-white)]">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[var(--rv-white)]">Income Tax Services</h1>
        <p className="text-lg mt-2">
          Stress-free tax filing, planning, and compliance for individuals & businesses
        </p>
      </div>

      {/* Introduction */}
      <div className="text-base leading-relaxed space-y-4 mb-10">
        <p>
          Filing your income tax returns and managing tax compliance shouldn’t be a headache. With the right guidance, you can save time, avoid penalties, and even optimize your tax outgo with legitimate planning.
        </p>
        <p>
          At <strong>SHREEFIN</strong>, we help individuals, NRIs, and businesses with seamless tax filing, advisory, and planning services. From preparing accurate returns to advising on deductions and exemptions — we make taxes simpler and stress-free.
        </p>
      </div>

      {/* Why Income Tax Services Matter */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-[var(--rv-primary)] mb-6">Why Our Income Tax Services Matter</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Calculator className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Accurate Filing",
              desc: "Ensure your returns are filed correctly and on time to avoid penalties.",
            },
            {
              icon: <FileText className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Comprehensive Tax Planning",
              desc: "Optimize your tax liabilities with strategic deductions and exemptions.",
            },
            {
              icon: <Banknote className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Support for Salaried & Business",
              desc: "Tailored solutions for individuals, freelancers, and business owners.",
            },
            {
              icon: <Wallet className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "NRI Taxation Expertise",
              desc: "Specialized assistance for NRIs managing income in India & abroad.",
            },
            {
              icon: <ShieldCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Trusted & Compliant",
              desc: "End-to-end adherence to Income Tax Act and government regulations.",
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

      {/* Our Income Tax Services */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-[var(--rv-white)] mb-6">Our Income Tax Solutions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "ITR Filing",
              desc: "Hassle-free income tax return filing for individuals and businesses.",
            },
            {
              icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Tax Planning & Advisory",
              desc: "Strategies to save tax legally using deductions and exemptions.",
            },
            {
              icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Advance Tax & TDS Support",
              desc: "Ensure proper calculation and timely payment of advance taxes & TDS.",
            },
            {
              icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Business & Corporate Tax",
              desc: "End-to-end compliance for partnerships, LLPs, and companies.",
            },
            {
              icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "NRI & Foreign Income Tax",
              desc: "Specialized guidance on double taxation and NRI tax compliance.",
            },
            {
              icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Notices & Assessment Handling",
              desc: "Expert support for responding to IT department notices and scrutiny cases.",
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
          Whether you’re filing your first ITR, managing business taxes, or handling NRI tax matters —
          <strong> SHREEFIN </strong> is your trusted partner for tax compliance and planning.
          Let us simplify your tax journey today.
        </p>
        <Link href="contact-us" className="btn-primary">
          Get Expert Tax Help
        </Link>
      </div>
    </section>
  );
};

export default IncomeTaxServicesPage;
