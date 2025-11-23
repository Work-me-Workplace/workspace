import Link from 'next/link';
import { Product } from '../lib/fakeData';

interface ProductCardProps {
  product: Product;
  showStatus?: boolean;
}

export default function ProductCard({ product, showStatus = true }: ProductCardProps) {
  const statusColors = {
    draft: 'bg-yellow-100 text-yellow-800',
    review: 'bg-blue-100 text-blue-800',
    approved: 'bg-green-100 text-green-800',
    published: 'bg-purple-100 text-purple-800',
  };

  return (
    <Link 
      href={`/workspace/products/${product.id}`}
      className="block p-4 border rounded-lg hover:shadow-md transition-shadow bg-white"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-1">{product.title}</h3>
          {product.description && (
            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
          )}
          {product.channel && (
            <span className="inline-block text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
              {product.channel}
            </span>
          )}
        </div>
        {showStatus && (
          <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusColors[product.status]}`}>
            {product.status}
          </span>
        )}
      </div>
    </Link>
  );
}

