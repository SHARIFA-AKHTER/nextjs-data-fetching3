
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-500 mb-6 text-center max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
