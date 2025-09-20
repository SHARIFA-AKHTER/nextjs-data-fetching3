"use client";

import { useEffect } from "react";

const ErrorPage = ({ error, reset }:{
  error: Error & { digest?: string }
  reset: () => void
}) => {
 useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
  return (
    <div>
      <p className="text-center text-red-500 text-xl">Something Went wrong</p>
      <p className="text-center text-red-500 text-xl">{error?.message}</p>

      <div className="text-center">
        <button
          onClick={() => reset()}
          className="bg-red-500 text-white py-2 px-5 rounded-lg shadow-md
          hover:bg-red-500 transition-all"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
