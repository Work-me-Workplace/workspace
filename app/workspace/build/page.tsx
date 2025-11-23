'use client';

import { useRouter } from 'next/navigation';
import ProductBuilderWizard from '../../components/ProductBuilderWizard';

export default function BuildPage() {
  const router = useRouter();

  const handleComplete = (data: any) => {
    // Mock submission - in real app this would call an API
    console.log('Product submitted:', data);
    alert('Product submitted for review! (This is a mock action)');
    router.push('/workspace/products');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Product Builder</h1>
      <ProductBuilderWizard onComplete={handleComplete} />
    </div>
  );
}

