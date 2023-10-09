"use client";
import Link from "next/link";

const SuccessPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h1 className="mb-4 text-2xl font-bold">Verification Successful</h1>
        <p>Your email has been verified successfully.</p>
        <Link href="/email">
          <h1 className="mt-4 text-blue-500">Go back to Email Page</h1>
        </Link>
      </div>
    </main>
  );
};

export default SuccessPage;
