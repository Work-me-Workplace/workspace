import { notFound } from 'next/navigation';
import Link from 'next/link';
import { productsToBuild } from '../../../lib/fakeData';
import { publishedProducts } from '../../../lib/fakeData';
import { ArrowLeft } from 'lucide-react';

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;
  // Search in both productsToBuild and publishedProducts
  const allProducts = [
    ...productsToBuild,
    ...publishedProducts.social,
    ...publishedProducts.signage,
    ...publishedProducts.website,
  ];

  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const statusColors = {
    draft: 'bg-yellow-100 text-yellow-800',
    review: 'bg-blue-100 text-blue-800',
    approved: 'bg-green-100 text-green-800',
    published: 'bg-purple-100 text-purple-800',
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Link
        href="/workspace/products"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft size={20} />
        Back to Products
      </Link>

      <div className="bg-white border rounded-lg p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>
            {product.channel && (
              <span className="inline-block text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded">
                {product.channel}
              </span>
            )}
          </div>
          <span
            className={`text-sm px-3 py-1 rounded-full font-medium ${statusColors[product.status]}`}
          >
            {product.status}
          </span>
        </div>

        {product.description && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Description</h2>
            <p className="text-gray-700">{product.description}</p>
          </div>
        )}

        {product.createdAt && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Created</h2>
            <p className="text-gray-700">
              {new Date(product.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        )}

        <div className="mt-8 pt-6 border-t">
          <div className="flex gap-4">
            {product.status === 'draft' && (
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Submit for Review
              </button>
            )}
            <button className="px-6 py-2 border rounded-lg hover:bg-gray-50">
              Edit Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

