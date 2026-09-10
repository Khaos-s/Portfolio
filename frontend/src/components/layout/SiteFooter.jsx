import { Link } from 'react-router-dom';
import { profile } from '../../content/portfolio';

export default function SiteFooter() {
  return <footer className="site-footer"><div className="footer-inner"><span>© {new Date().getFullYear()} {profile.name}. Built with care.</span><span>{profile.location} · <Link className="text-link" to="/contact">Get in touch</Link></span></div></footer>;
}
