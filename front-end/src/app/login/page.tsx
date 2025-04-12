"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [emailError, setEmailError] = useState(""); // State for email validation error
  const router = useRouter();

  useEffect(() => {
    // Check if the user is already logged in
    if (isLoggedIn) {
      router.push("/dashboard");
    }
  }, [isLoggedIn, router]);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSendOtp = () => {
    if (!email) {
      setEmailError("Email is required");
      return;
    }
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setEmailError(""); // Clear error if validation passes
    // Simulate sending OTP
    console.log(`Sending OTP to ${email}`);
    setIsOtpSent(true);
  };

  const handleVerifyOtp = () => {
    if (otp) {
      // Simulate OTP verification
      console.log(`Verifying OTP: ${otp}`);
      alert("OTP Verified!");
      setIsLoggedIn(true); // Set the user as logged in
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-black">Login</h1>
        {!isOtpSent ? (
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
            <button
              onClick={handleSendOtp}
              className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Send OTP
            </button>
          </div>
        ) : (
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              OTP
            </label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter the OTP"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
            <button
              onClick={handleVerifyOtp}
              className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
            >
              Verify OTP
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
