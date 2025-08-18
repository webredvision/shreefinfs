"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Button } from "../ui/button";

export default function ContactForm({ sitedata }) {
  // console.log(sitedata)
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
    const emaildata = {
      user: formData?.username,
      to: formData?.email,
      subject: 'Thank You for Your Enquiry!',
      text: `Dear ${formData?.username}, We sincerely appreciate your interest and the time you took to fill out our enquiry form. We have received your details, and our team will be in touch with you soon.`
      ,
    }
    const senderdata = {
      user: sitedata?.websiteName,
      to: sitedata?.email,
      subject: 'New Enquiry',
      html: `
                <p><strong>New Enquiry Details:</strong></p>
                <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse; width: 100%;">
                    <tr>
                        <th style="background-color: #f2f2f2; text-align: left;">Field</th>
                        <th style="background-color: #f2f2f2; text-align: left;">Details</th>
                    </tr>
                    <tr>
                        <td><strong>User Name</strong></td>
                        <td>${formData?.username}</td>
                    </tr>
                    <tr>
                        <td><strong>Email</strong></td>
                        <td>${formData?.email}</td>
                    </tr>
                    <tr>
                        <td><strong>Mobile Number</strong></td>
                        <td>${formData?.mobile}</td>
                    </tr>
                    
                    <tr>
                        <td><strong>Message</strong></td>
                        <td>${formData?.message}</td>
                    </tr>
                </table>
                <br>
                <p>Regards,</p>
                <p><strong>${sitedata?.websiteName} Team</strong></p>
            `,
    };

    try {
      const res = await axios.post("/api/leads", formData);
      // console.log(res);
      // console.log(res)

      if (res.status === 201) {
        await axios.post("/api/email", emaildata);
        await axios.post("/api/email", senderdata);

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
    <div>
      <div className="bg-gradient-to-br from-[var(--rv-bg-secondary)] to-[var(--rv-secondary)] rounded-lg p-6">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            name="username"
            type="text"
            placeholder="Name"
            className="w-full border bg-white border-[var(--rv-primary)] p-3 rounded-md"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            name="mobile"
            type="text"
            placeholder="Mobile"
            className="w-full border bg-white  border-[var(--rv-primary)] p-3 rounded-md"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full border bg-white  border-[var(--rv-primary)] p-3 rounded-md"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            className="w-full border bg-white  border-[var(--rv-primary)] p-3 rounded-md"
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
            className="btn-secondary "
          >
            {loading ? "Sending..." : "Free Consultancy"}
          </Button>
        </form>
      </div>

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
