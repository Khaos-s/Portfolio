import { Link } from 'react-router-dom';
import { profile } from '../../content/portfolio';

export default function SiteFooter() {
  return (
    <footer className="site-footer theme-dark">
      <div className="container footer-top">
        <div><Link className="footer-signature" to="/#home">{profile.name}<span>.</span></Link><p>Thoughtful interfaces. Carefully built.</p></div>
        <nav aria-label="Footer navigation"><Link to="/#work">Projects</Link><Link to="/#about">About</Link><Link to="/#contact">Contact</Link></nav>
        <Link className="back-top" to="/#home">Back to top <span aria-hidden="true">↑</span></Link>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} {profile.name}</span><span>{profile.location} <span aria-hidden="true">/</span> GMT+8</span></div>
    </footer>
  );
}

