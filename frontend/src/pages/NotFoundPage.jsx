import { Link } from 'react-router-dom';
import useSeo from '../lib/seo';
import Button from '../components/ui/Button';

export default function NotFoundPage() {
  useSeo('Page not found', 'The requested page could not be found.');
  return <div className="page not-found"><div><p className="eyebrow">404</p><h1>That page wandered off.</h1><p className="muted">Let’s get you back to the portfolio.</p><Button asChild><Link to="/">Go home</Link></Button></div></div>;
}
