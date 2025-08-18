import React from "react";
import { HeartPulse, ShieldCheck, Users, FileText, Wallet, FileCheck } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Life Insurance Services",
  description:
    "Protect your family’s future with SHREEFIN’s life insurance guidance. From term plans to savings and ULIPs, we connect you to trusted solutions for long-term security.",
};

const LifeInsuranceServicesPage = () => {
  return (
    <section className="max-w-screen-xl mx-auto lg:px-0 md:px-2 px-4 py-40 text-[var(--rv-white)]">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[var(--rv-white)]">Life Insurance Services</h1>
        <p className="text-lg mt-2">
          Secure your loved ones with trusted life insurance plans for every stage of life
        </p>
      </div>

      {/* Introduction */}
      <div className="text-base leading-relaxed space-y-4 mb-10">
        <p>
          Life is unpredictable — and protecting your family’s financial security is one of the most important decisions you can make. The right life insurance ensures your loved ones are supported, no matter what life brings.
        </p>
        <p>
          At <strong>SHREEFIN</strong>, we simplify the process of choosing the right policy by comparing plans, explaining benefits, and offering expert guidance. Whether you need a term plan for protection or an investment-linked policy for wealth creation, we connect you to the best solutions.
        </p>
      </div>

      {/* Why Life Insurance Services Matter */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-[var(--rv-primary)] mb-6">Why Choose Our Life Insurance Services?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <ShieldCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Financial Security",
              desc: "Ensure your family’s needs are covered even in your absence.",
            },
            {
              icon: <HeartPulse className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Peace of Mind",
              desc: "A safety net that provides emotional and financial reassurance.",
            },
            {
              icon: <Users className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Tailored Coverage",
              desc: "Plans for individuals, families, NRIs, and business owners.",
            },
            {
              icon: <Wallet className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Affordable Options",
              desc: "Flexible premiums to fit your budget without compromising on cover.",
            },
            {
              icon: <FileText className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Comprehensive Advice",
              desc: "Understand term, ULIP, and savings plans before making a choice.",
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

      {/* Our Life Insurance Services */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-[var(--rv-white)] mb-6">Our Life Insurance Solutions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Term Insurance",
              desc: "Pure protection plans with high coverage at affordable premiums.",
            },
            {
              icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Whole Life Plans",
              desc: "Lifetime protection and wealth-building benefits for your family.",
            },
            {
              icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "ULIPs (Unit Linked Plans)",
              desc: "Blend of insurance and investment to grow wealth over time.",
            },
            {
              icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Child Insurance Plans",
              desc: "Secure your child’s education and future financial needs.",
            },
            {
              icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Retirement & Pension Plans",
              desc: "Ensure financial independence with post-retirement income options.",
            },
            {
              icon: <FileCheck className="text-[var(--rv-primary)] w-6 h-6" />,
              title: "Group & Corporate Insurance",
              desc: "Custom solutions for employee benefits and corporate protection.",
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
          Whether you’re securing your family’s future, planning for retirement, or looking for investment-linked policies —
          <strong> SHREEFIN </strong> helps you choose the right life insurance plan.
          Protect what matters most today.
        </p>
        <Link href="contact-us" className="btn-primary">
          Get Life Insurance Guidance
        </Link>
      </div>
    </section>
  );
};

export default LifeInsuranceServicesPage;
