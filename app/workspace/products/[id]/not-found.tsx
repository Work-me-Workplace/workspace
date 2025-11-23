import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto text-center py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
      <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
      <Link
        href="/workspace/products"
        className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Back to Products
      </Link>
    </div>
  );
}

