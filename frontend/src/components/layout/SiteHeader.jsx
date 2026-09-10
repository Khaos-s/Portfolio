import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [{ to: '/', label: 'Home' }, { to: '/projects', label: 'Projects' }, { to: '/resume', label: 'About' }, { to: '/contact', label: 'Contact' }];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const close = () => setOpen(false);
  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner">
        <Link className="brand" to="/" onClick={close} aria-label="John Arvy Lopez home"><span className="brand-mark">JA</span></Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => <NavLink key={item.to} to={item.to}>{item.label}</NavLink>)}
          <a className="button button-download" href="/resume.pdf" download><span aria-hidden="true">↓</span> Download CV</a>
        </nav>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>{open ? '×' : '☰'}<span className="sr-only">Menu</span></button>
      </div>
      {open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{navItems.map((item) => <NavLink key={item.to} to={item.to} onClick={close}>{item.label}</NavLink>)}<a href="/resume.pdf" download onClick={close}>↓ Download CV</a></nav>}
    </header>
  );
}
