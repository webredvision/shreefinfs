"use client";
import React from "react";

const WelcomePage = ({ onStatus }) => {
    return (
        <div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white">
                Check Your <span className="text-[var(--rv-primary)]">Financial Health</span>
            </h2>

            <p className="text-neutral-200 mt-6  leading-relaxed text-lg text-center">
                Your financial health is more than just the balance in your bank account —
                it’s a reflection of how prepared you are for life’s opportunities and challenges.
                A strong financial foundation allows you to manage daily expenses comfortably,
                save for the future, handle unexpected emergencies, and work towards long-term
                goals like owning a home, funding education, or retiring stress-free.
                <br /><br />
                By assessing your financial health, you gain a clear picture of where you stand
                today — and what steps you can take to improve your tomorrow. Whether it’s
                reducing debt, boosting savings, optimizing investments, or simply making
                smarter money choices, this assessment helps you take control of your finances
                and build lasting security.
            </p>

            <button className="btn-secondary mt-5" onClick={() => onStatus(true)}>
                Start Assessment
            </button>
        </div>
    );
};

export default WelcomePage;
