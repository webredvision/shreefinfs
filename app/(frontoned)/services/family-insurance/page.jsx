import React from "react";
import { Users, HeartPulse, ShieldCheck, FileText, Wallet, FileCheck } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Family Insurance Services",
  description:
    "Protect your entire family with SHREEFIN’s family insurance solutions. From health and life coverage to long-term security, we ensure comprehensive protection for your loved ones.",
};

const FamilyInsuranceServicesPage = () => {
  return (
    <section className="max-w-screen-xl mx-auto lg:px-0 md:px-2 px-4 py-40 text-[var(--rv-white)]">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[var(--rv-white)]">Family Insurance Services</h1>
        <p className="text-lg mt-2">
          Complete coverage for your family’s health, life, and financial well-being
        </p>
      </div>

      {/* Introduction */}
      <div className="text-base leading-relaxed space-y-4 mb-10">
        <p>
          Your family’s security is your top priority — and the right insurance ensures they’re
          financially protected against life’s uncertainties. From health coverage for every
          member to comprehensive life insurance, family insurance plans provide peace of mind
          and stability.
        </p>
        <p>
          At <strong>SHREEFIN</strong>, we guide you through choosing
          family-focused plans that combine affordability, wide coverage, and long-term
          protection. Whether you’re safeguarding your children’s future, covering elderly parents, or ensuring overall well-being — we’ve got you covered.
        </p>
      </div>

      {/* Why Family Insurance Matters */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-[var(--rv-primary)] mb-6">Why Our Family Insurance Services Matter</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Users className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Protection for All",
              desc: "Covers every member of your family under one plan.",
            },
            {
              icon: <HeartPulse className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Health & Wellness",
              desc: "Access to medical care, preventive health, and emergency support.",
            },
            {
              icon: <ShieldCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Financial Security",
              desc: "Keeps your family financially safe during unexpected events.",
            },
            {
              icon: <Wallet className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Cost-Effective",
              desc: "One policy, one premium — easier and cheaper than multiple plans.",
            },
            {
              icon: <FileText className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Peace of Mind",
              desc: "Reassurance that your loved ones are protected at all times.",
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

      {/* Our Family Insurance Solutions */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-[var(--rv-white)] mb-6">Our Family Insurance Solutions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Family Health Insurance",
              desc: "Comprehensive health coverage for all family members under one plan.",
            },
            {
              icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Family Life Insurance",
              desc: "Life protection plans to secure your family’s financial future.",
            },
            {
              icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Child Protection Plans",
              desc: "Safeguard your children’s education and future goals.",
            },
            {
              icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Senior Citizen Coverage",
              desc: "Special policies designed for elderly parents’ health and care.",
            },
            {
              icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Critical Illness Plans",
              desc: "Lump-sum payouts for major illnesses to ease financial stress.",
            },
            {
              icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Maternity & Newborn Coverage",
              desc: "Support for maternity expenses and newborn care.",
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
          Whether you want to secure your children’s future, protect elderly parents, or cover your entire household —
          <strong> SHREEFIN </strong> helps you choose the best family insurance plans.
          Give your loved ones the protection they deserve.
        </p>
        <Link href="contact-us" className="btn-primary">
          Get Family Insurance Guidance
        </Link>
      </div>
    </section>
  );
};

export default FamilyInsuranceServicesPage;
