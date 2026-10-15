import { useEffect, useRef } from 'react';

// Content stays visible by default. Animate only once as it enters the viewport.
export default function useReveal(delay = 0) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!element || motion.matches || !window.IntersectionObserver || !element.animate) return;

    let animation;
    let revealed = false;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || revealed) return;
      revealed = true;
      observer.disconnect();
      if (motion.matches || element.contains(document.activeElement)) return;
      animation = element.animate([
        { opacity: 0, transform: 'translateY(22px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ], { duration: 650, delay, easing: 'cubic-bezier(.22, 1, .36, 1)', fill: 'backwards' });
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });

    // Keyboard focus and a changed motion preference must reveal content immediately.
    const stop = () => { revealed = true; observer.disconnect(); animation?.cancel(); };
    const onMotionChange = () => { if (motion.matches) stop(); };
    observer.observe(element);
    element.addEventListener('focusin', stop);
    motion.addEventListener('change', onMotionChange);
    return () => {
      observer.disconnect();
      animation?.cancel();
      element.removeEventListener('focusin', stop);
      motion.removeEventListener('change', onMotionChange);
    };
  }, [delay]);

  return ref;
}
