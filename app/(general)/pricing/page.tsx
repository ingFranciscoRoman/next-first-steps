import type { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'Pricing Page',
 description: 'This view is for see all product with pricing',
};

const PricingPage = () => {
  return (
    <span className="text-7xl">Pricing Page</span>
  )
}

export default PricingPage;
