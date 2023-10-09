"use client";

import { useState } from "react";

const EmailPage = () => {
  const [showVerificationPopup, setShowVerificationPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isCodeCorrect, setIsCodeCorrect] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleVerificationClick = () => {
    // Check if the email is valid before proceeding
    if (isValidEmail(email)) {
      setShowVerificationPopup(true);
      setIsCodeCorrect(true);
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  const handleVerificationSubmit = () => {
    const correctCode = "123456";

    if (verificationCode === correctCode) {
      setShowVerificationPopup(false);
      setIsCodeCorrect(true);
    } else {
      setIsCodeCorrect(false);
    }
  };

  // Function to validate email using regex
  const isValidEmail = (email: any) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };


  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h1 className="mb-4 text-2xl font-bold">Email Verification</h1>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none ${
              !isEmailValid ? "border-red-500" : ""
            }`}
          />
          {!isEmailValid && (
            <p className="mt-2 text-red-500">Invalid email format.</p>
          )}
        </div>
        <button
          onClick={handleVerificationClick}
          className="w-full rounded bg-blue-500 p-2 font-semibold text-white transition duration-300 hover:bg-blue-600"
        >
          Send Verification
        </button>

        {showVerificationPopup && (
          <div className="mt-4">
            <input
              type="text"
              placeholder="Enter verification code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              className="w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
            />
            <button
              onClick={handleVerificationSubmit}
              className="mt-2 w-full rounded bg-blue-500 p-2 font-semibold text-white transition duration-300 hover:bg-blue-600"
            >
              Verify
            </button>

            {!isCodeCorrect && (
              <p className="mt-2 text-red-500">Wrong code. Please try again.</p>
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default EmailPage;
