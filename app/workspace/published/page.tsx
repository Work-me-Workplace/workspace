import ProductCard from '../../components/ProductCard';
import { publishedProducts } from '../../lib/fakeData';

export default function PublishedPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Published Products</h1>

      <div className="space-y-8">
        {/* Social Channel */}
        <div className="bg-white border rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Social Media</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {publishedProducts.social.map((product) => (
              <ProductCard key={product.id} product={product} showStatus={false} />
            ))}
          </div>
        </div>

        {/* Signage Channel */}
        <div className="bg-white border rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Digital Signage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {publishedProducts.signage.map((product) => (
              <ProductCard key={product.id} product={product} showStatus={false} />
            ))}
          </div>
        </div>

        {/* Website Channel */}
        <div className="bg-white border rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Website</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {publishedProducts.website.map((product) => (
              <ProductCard key={product.id} product={product} showStatus={false} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

