import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';
import PageIntro from './PageIntro';

export default function SiteLayout() {
  const { pathname, hash, key } = useLocation();
  const previousPath = useRef(pathname);
  const mainRef = useRef(null);
  useEffect(() => {
    if (hash) {
      previousPath.current = pathname;
      let cancelled = false;
      let frame;
      // Local fonts can change section heights on a direct, uncached visit.
      document.fonts.ready.then(() => {
        if (cancelled) return;
        frame = requestAnimationFrame(() => {
          const target = document.getElementById(hash.slice(1));
          if (!target) return;
          target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
          target.focus({ preventScroll: true });
        });
      });
      return () => { cancelled = true; cancelAnimationFrame(frame); };
    }
    if (previousPath.current === pathname) return;
    previousPath.current = pathname;
    window.scrollTo({ top: 0, behavior: 'instant' });
    mainRef.current?.focus({ preventScroll: true });
  }, [pathname, hash, key]);
  return <div className="site-shell"><PageIntro /><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader /><main id="main-content" tabIndex={-1} ref={mainRef}><Outlet /></main><SiteFooter /></div>;
}
