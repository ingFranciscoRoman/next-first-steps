import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Contact Page',
 description: 'This view if for contact with users.',
};

const ContactPage = () => {
  return (
    <div className="text-7xl">Contact Page</div>
  )
}

export default ContactPage;
