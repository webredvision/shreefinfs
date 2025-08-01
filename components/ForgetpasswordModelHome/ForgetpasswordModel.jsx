// components/ForgotPasswordModal.jsx
"use client"
import axios from "axios";
import { useState } from "react";

export default function ForgotPasswordModal({ isOpen, onClose,selectedRole }) {
   const [error, setError] = useState("");
     const [mobileno, setMobileNo] = useState("");
     const [otp, setOtp] = useState("");
     const [otpField, setOtpField] = useState(false);
     const [provider, setProvider] = useState({
         userName: "",
         type: selectedRole,
         source: "link",
     });
     const otpData = {
         'OtpMobileNo': mobileno,
         'mobileOtp': otp
     }

     // 448310
     console.log(otpData)
     const handleSubmit = async (event) => {
         event.preventDefault();
         try {
             if (otpField) {
                 const response = await axios.post('https://redvisionweb.com/api/login/submit-forget-password', otpData);
                 console.log(response)
                 console.log(response.data)
                 if (response.data.msgType === 'success') {
                     setOtpField(true);
                     setError(response.data.msg);
                 }
                 else {
                     setError(`${response.data.msg}`);
                 }
             }
             else {
                 const response = await axios.post('https://redvisionweb.com/api/login/forget-password', provider);
                 console.log(response.data)
                 if (response.data.msgType === 'success') {
                     setOtpField(true);
                     setError(`One Time Password (OTP) has been sent to your mobile ******${response.data.mobileLastFourDigit} And e-mail to ${response.data.email}, please enter the same here to login`);
                     setMobileNo(response.data.encryptedMobileNo)
                 }
                 else {
                     setError(`${response.data.msg}`);
                 }
             }
 
         } catch (error) {
             console.error("Error submitting the form:", error);
             setError("An error occurred while submitting the form. Please try again.");
         }
     };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-transparent bg-opacity-30 flex justify-center items-center">
      <div className="bg-gradient-to-br from-yellow-100 to-white     rounded-lg w-full max-w-md p-6 relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &#10005;
        </button>
        <h1 className="text-2xl font-extrabold text-center mb-6 ">
          Forgot Password
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 text-sm mb-4"
            type="email"
            placeholder="Email"
            value={provider.userName}
            onChange={(e) =>
              setProvider({ ...provider, userName: e.target.value })
            }
          />
          {otpField && (
            <input
              className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 text-sm mb-4"
              type="text"
              placeholder="OTP"
              value={provider.otp}
              onChange={(e) =>
                setOtp(e.target.value)
            }
            />
          )}
          <button
            type="submit"
            className="w-full bg-cyan-500 text-white py-2 rounded-lg font-semibold"
          >
            Submit
          </button>
          {error && (
            <div
              className={`mt-3 text-sm ${
                otpField ? "text-green-600" : "text-red-600"
              }`}
            >
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
