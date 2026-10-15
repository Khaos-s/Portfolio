import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';

const navItems = [
  { id: 'home', to: '/#home', label: 'Home' },
  { id: 'work', to: '/#work', label: 'Projects' },
  { id: 'about', to: '/#about', label: 'About' },
  { id: 'experience', to: '/#experience', label: 'Experience' },
  { id: 'contact', to: '/#contact', label: 'Contact' },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const headerRef = useRef(null);
  const { pathname } = useLocation();
  const [menuPath, setMenuPath] = useState(pathname);
  const [activeSection, setActiveSection] = useState('home');
  const expanded = open && menuPath === pathname;
  useEffect(() => {
    if (pathname !== '/') return;
    const updateSection = () => {
      const marker = (headerRef.current?.offsetHeight || 80) + 100;
      const current = navItems.filter((item) => {
        const section = document.getElementById(item.id);
        return section && section.getBoundingClientRect().top <= marker;
      }).at(-1);
      setActiveSection(current?.id || 'home');
    };
    updateSection();
    window.addEventListener('scroll', updateSection, { passive: true });
    window.addEventListener('resize', updateSection);
    return () => { window.removeEventListener('scroll', updateSection); window.removeEventListener('resize', updateSection); };
  }, [pathname]);
  useEffect(() => {
    if (!expanded) return;
    const onKey = (event) => {
      if (event.key === 'Escape') { setOpen(false); toggleRef.current?.focus(); }
    };
    const onOutside = (event) => {
      if (!headerRef.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onOutside);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('pointerdown', onOutside); };
  }, [expanded]);
  const currentSection = pathname === '/' ? activeSection : pathname.startsWith('/projects') ? 'work' : pathname === '/resume' ? 'about' : pathname === '/contact' ? 'contact' : null;
  const links = navItems.map((item) => <Link key={item.id} to={item.to} aria-current={currentSection === item.id ? 'location' : undefined} onClick={() => setOpen(false)}>{item.label}</Link>);
  return (
    <header className={`site-header${pathname === '/' ? ' site-header-dark' : ''}`} ref={headerRef}>
      <div className="container header-inner">
        <Link className="brand" to="/#home" aria-label="John Arvy Lopez home" onClick={() => setOpen(false)}>JAL<span aria-hidden="true">.</span></Link>
        <nav className="desktop-nav" aria-label="Primary navigation">{links}</nav>
        <Button asChild variant="outline" size="compact" className="header-cta"><Link to="/#contact" onClick={() => setOpen(false)}>Let’s talk <span aria-hidden="true">↗</span></Link></Button>
        <button ref={toggleRef} className="menu-toggle" type="button" aria-expanded={expanded} aria-controls="mobile-navigation" onClick={() => { setMenuPath(pathname); setOpen(!expanded); }}>{expanded ? 'Close' : 'Menu'}</button>
      </div>
      <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" hidden={!expanded}>{links}</nav>
    </header>
  );
}
