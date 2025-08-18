"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import axios from "axios";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import Link from "next/link";

export function ContactUs({ sitedata }) {
  const [hcaptchaToken, setHcaptchaToken] = useState(null);
  const [captchaError, setCaptchaError] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    mobile: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!hcaptchaToken) {
      setCaptchaError("Please complete the CAPTCHA verification.");
      return;
    }
    setCaptchaError("");
    setLoading(true);
    const emailContent =
      "We’re excited to help you reach your financial goals.";
    const emailData = {
      to: formData.email,
      subject: "Thank You for Your Enquiry!",
      text: `Dear ${formData.username},\n\nWe sincerely appreciate your interest and the time you took to fill out our enquiry form. We have received your details, and our team will be in touch with you soon.\n\n${emailContent}`,
    };

    const senderData = {
      to: sitedata?.email ,
      subject: "New Enquiry Received",
      text: `New Enquiry from Contact Us:\n\nUser Name: ${formData.username}\nEmail: ${formData.email}\nMobile: ${formData.mobile}\nMessage: ${formData.message}\n\n${emailContent}`,
    };

    try {
      const res = await axios.post("/api/leads", formData);
    
      // console.log(res)

      if (res.status === 201) {
        await axios.post("/api/email", emailData);
        await axios.post("/api/email", senderData);

        setSubmitted(true);
        setFormData({ username: "", mobile: "", email: "", message: "" });
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setSubmitted(false);
  };

  return (
    <div className="main_section relative bg-[#b2b2b21f]">
      <section className="max-w-screen-xl mx-auto text-center items-center">
        {/* Left Section */}
        <h2 className="topheading text-[var(--rv-primary)]">GET STARTED</h2>
          <h2 className="subheading text-[var(--rv-primary)] mb-4">
            Schedule a call to achieve your financial goals
          </h2>
          <div className="em_bar mx-auto">
            <div className="em_bar_bg" />
          </div>
          <p className="text-black text-lg">
            Unlock expert insights and personalized strategies to grow your
            wealth.
          </p>
        {/* Right Section - Form */}
        <div className="flex flex-col md:flex-row mt-10 gap-10">
          <div className="md:w-1/2">
          <Link href={sitedata.mapurl}>
          <iframe
            src={sitedata?.iframe}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            className="rounded"
          ></iframe></Link>
        </div>
          <div className="md:w-1/2 border border-[var(--rv-primary)] rounded-lg p-6">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              name="username"
              type="text"
              placeholder="Name"
              className="w-full border border-[var(--rv-primary)] p-3 rounded-md"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              name="mobile"
              type="text"
              placeholder="Mobile"
              className="w-full border border-[var(--rv-primary)] p-3 rounded-md"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full border border-[var(--rv-primary)] p-3 rounded-md"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              className="w-full border border-[var(--rv-primary)] p-3 rounded-md"
              value={formData.message}
              onChange={handleChange}
            />
            <div>
              <HCaptcha
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onVerify={(token) => setHcaptchaToken(token)}
                className="w-full"
              />
              {captchaError && (
                <p className="text-red-500 text-sm mt-2">{captchaError}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="bg-[var(--rv-primary)] text-[var(--rv-white)] sm:text-lg md:text-lg font-bold px-4 py-2 rounded-lg hover:bg-[var(--rv-primary)] transition-all w-[50%] cursor-pointer "
            >
              {loading ? "Sending..." : "Free Consultancy"}
            </Button>
          </form>
        </div>
        </div>
      </section>

      {/* Modal Popup */}
      {submitted && (
        <div className="fixed inset-0 bg-[var(--rv-primary)a3] bg-opacity-50 flex items-center justify-center z-50 transition-all">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
            <h2 className="text-2xl font-semibold text-[var(--rv-primary)] mb-4">
              Thank You!
            </h2>
            <p className="text-gray-700 mb-6">
              Thank you for connecting with us. We'll reach out to you shortly.
            </p>
            <Button
              onClick={closeModal}
              className="bg-[var(--rv-primary)] text-[var(--rv-white)] px-6 py-2 rounded-lg hover:bg-[var(--rv-primary)]"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
