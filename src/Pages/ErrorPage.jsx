import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
            {/* Icon of a broken chain or error */}
            <div className="mb-8">
                {/* Use a simple broken chain icon or any related icon */}
                <img
                    src="https://cdn-icons-png.flaticon.com/128/8722/8722270.png"
                    alt="Broken Link Icon"
                    className="w-24 h-24"
                />
            </div>

            {/* Error Message */}
            <h1 className="text-4xl font-bold mb-4">Oops! Page Not Found</h1>
            <p className="text-lg mb-8">
                The page you're looking for doesn't exist or has been moved.
            </p>

            {/* Navigation Button */}
            <Link
                to="/"
                className="px-6 py-3 border border-black rounded-md hover:bg-black hover:text-white transition-all"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default ErrorPage;
