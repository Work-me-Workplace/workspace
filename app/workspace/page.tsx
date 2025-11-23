import Link from 'next/link';
import Section from '../components/Section';
import ProductCard from '../components/ProductCard';
import LibraryItem from '../components/LibraryItem';
import { productsToBuild, publishedProducts, companySourceLibrary } from '../lib/fakeData';

export default function WorkspaceHomePage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900">WorkSpace Dashboard</h1>
        <Link
          href="/workspace/build"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          + New Product
        </Link>
      </div>

      {/* Products to Build */}
      <Section title="Products to Build">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {productsToBuild.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {productsToBuild.length === 0 && (
          <p className="text-gray-500 text-center py-8">No products to build yet.</p>
        )}
      </Section>

      {/* Published Products */}
      <Section title="Published Products">
        <div className="space-y-6">
          {/* Social Channel */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Social</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {publishedProducts.social.map((product) => (
                <ProductCard key={product.id} product={product} showStatus={false} />
              ))}
            </div>
          </div>

          {/* Signage Channel */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Signage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {publishedProducts.signage.map((product) => (
                <ProductCard key={product.id} product={product} showStatus={false} />
              ))}
            </div>
          </div>

          {/* Website Channel */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Website</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {publishedProducts.website.map((product) => (
                <ProductCard key={product.id} product={product} showStatus={false} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Company Source Library */}
      <Section title="Company Source Library">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {companySourceLibrary.map((item) => (
            <LibraryItem key={item.id} item={item} />
          ))}
        </div>
      </Section>
    </div>
  );
}

