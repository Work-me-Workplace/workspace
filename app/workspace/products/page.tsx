import Link from 'next/link';
import ProductCard from '../../components/ProductCard';
import { productsToBuild } from '../../lib/fakeData';

export default function ProductsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Products to Build</h1>
        <Link
          href="/workspace/build"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          + New Product
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {productsToBuild.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {productsToBuild.length === 0 && (
        <div className="text-center py-12 bg-white border rounded-lg">
          <p className="text-gray-500 mb-4">No products to build yet.</p>
          <Link
            href="/workspace/build"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Create Your First Product
          </Link>
        </div>
      )}
    </div>
  );
}

