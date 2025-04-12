"use client";

import { useState } from "react";

export default function AddUserPage() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isInvitationSent, setIsInvitationSent] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSendInvitation = () => {
    if (!email) {
      setEmailError("Email is required");
      return;
    }
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setEmailError(""); // Clear error if validation passes
    // Simulate sending invitation
    console.log(`Sending invitation to ${email}`);
    setIsInvitationSent(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-black">Add User</h1>
        {!isInvitationSent ? (
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Employee Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter employee's email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
            <button
              onClick={handleSendInvitation}
              className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Send Invitation
            </button>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-green-500 text-lg font-medium">
              Invitation sent successfully to {email}!
            </p>
            <button
              onClick={() => setIsInvitationSent(false)}
              className="mt-4 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition"
            >
              Send Another Invitation
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
