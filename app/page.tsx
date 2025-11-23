import Link from 'next/link';

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome to Your WorkSpace
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Your collaboration container for managing products and content
        </p>
        <Link
          href="/workspace"
          className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
        >
          Enter WorkSpace
        </Link>
      </div>
    </div>
  );
}

