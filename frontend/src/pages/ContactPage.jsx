import ContactPanel from '../components/sections/ContactPanel';
import { profile } from '../content/portfolio';
import useSeo from '../lib/seo';

export default function ContactPage() {
  useSeo('Contact', `Contact ${profile.name} about web development and interface design.`);
  return <div className="page"><ContactPanel headingAs="h1" /></div>;
}
