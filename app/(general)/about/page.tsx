import type { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'About Page',
 description: 'This view is for infomation of About Company',
 keywords: ['About Page', 'Francisco', 'information', '...'],
};

const AboutPage = () => {
  return (
      <span className='text-7xl'>About Page</span>
  )
}

export default AboutPage;