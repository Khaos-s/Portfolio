import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import ProjectCover from './ProjectCover';

export default function ProjectReel({ projects, initialProjectSlug }) {
  const viewportRef = useRef(null);
  const itemRefs = useRef([]);
  const dragRef = useRef(null);
  const positionRef = useRef(0);
  const suppressClickRef = useRef(false);
  const initialIndex = Math.max(0, projects.findIndex((project) => project.slug === initialProjectSlug));
  const [activeIndex, setActiveIndex] = useState(initialProjectSlug ? initialIndex : Math.floor(projects.length / 2));
  const [translateX, setTranslateX] = useState(0);
  const [dragging, setDragging] = useState(false);

  const centerProject = useCallback((index, animate = true) => {
    const viewport = viewportRef.current;
    const item = itemRefs.current[index];
    if (!viewport || !item) return;
    const target = viewport.clientWidth / 2 - (item.offsetLeft + item.offsetWidth / 2);
    setDragging(!animate);
    positionRef.current = target;
    setTranslateX(target);
  }, []);

  useLayoutEffect(() => {
    if (!dragRef.current) centerProject(activeIndex);
  }, [activeIndex, centerProject]);

  useEffect(() => {
    const resize = () => centerProject(activeIndex);
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [activeIndex, centerProject]);

  const closestIndex = useCallback((position) => {
    const viewport = viewportRef.current;
    if (!viewport) return 0;
    const centre = viewport.clientWidth / 2;
    return itemRefs.current.reduce((closest, item, index) => {
      if (!item) return closest;
      const distance = Math.abs(item.offsetLeft + item.offsetWidth / 2 + position - centre);
      return distance < closest.distance ? { index, distance } : closest;
    }, { index: 0, distance: Number.POSITIVE_INFINITY }).index;
  }, []);

  const onPointerDown = (event) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = { pointerId: event.pointerId, startX: event.clientX, startTranslate: positionRef.current, moved: false };
    setDragging(true);
  };
  const onPointerMove = (event) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    const nextTranslate = drag.startTranslate + event.clientX - drag.startX;
    drag.moved ||= Math.abs(event.clientX - drag.startX) > 4;
    positionRef.current = nextTranslate;
    setTranslateX(nextTranslate);
    setActiveIndex(closestIndex(nextTranslate));
  };
  const finishDrag = (event) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    suppressClickRef.current = drag.moved;
    dragRef.current = null;
    setDragging(false);
    if (!drag.moved) return;
    const nextIndex = closestIndex(positionRef.current);
    setActiveIndex(nextIndex);
    centerProject(nextIndex);
  };
  const selectOrOpenProject = (project, index) => {
    if (suppressClickRef.current) {
      suppressClickRef.current = false;
      return;
    }
    if (index === activeIndex && project.liveUrl) {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    setActiveIndex(index);
    centerProject(index);
  };
  const activeProject = projects[activeIndex];
  const bgImageUrl = activeProject?.logo;

  return (
    <section className="relative w-full py-12 overflow-hidden" aria-label="Featured project reel">
      {/* Dynamic Ambient Background */}
      {bgImageUrl && (
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
          style={{ backgroundImage: `url(${bgImageUrl})` }}
        />
      )}
      {/* Cinematic Blur Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-3xl transition-all duration-700"></div>

      {/* Edge Fades for smooth blending */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f8f7ff] to-transparent z-10 pointer-events-none mix-blend-overlay"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f8f7ff] to-transparent z-10 pointer-events-none mix-blend-overlay"></div>

      <div className={`relative z-20 w-full overflow-hidden touch-pan-y select-none ${dragging ? 'cursor-grabbing' : 'cursor-grab'}`} ref={viewportRef} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={finishDrag} onPointerCancel={finishDrag}>
        <div 
          className="flex gap-4 w-max px-4 py-8 will-change-transform" 
          style={{ transform: `translateX(${translateX}px)`, transition: dragging ? 'none' : 'transform 500ms cubic-bezier(0.22, 1, 0.36, 1)' }}
        >
          {projects.map((project, index) => {
            const isActive = index === activeIndex;
            return (
              <button 
                className={`relative flex-shrink-0 w-[clamp(178px,18vw,228px)] rounded-2xl overflow-hidden text-left border transition-all duration-500 ease-out shadow-lg
                  ${isActive ? 'scale-110 border-indigo-400 opacity-100 z-30 shadow-[0_0_40px_rgba(99,102,241,0.5)]' : 'scale-90 border-transparent opacity-40 hover:opacity-70 z-20'}`}
                type="button" 
                key={project.slug} 
                ref={(element) => { itemRefs.current[index] = element; }} 
                onClick={() => selectOrOpenProject(project, index)}
                aria-label={isActive && project.liveUrl ? `Open ${project.title} live site` : `Select ${project.title}`} 
                aria-pressed={isActive}
              >
                <ProjectCover logo={project.logo} screenshot={project.screenshot} title={project.title} />
                <span className={`absolute inset-x-0 bottom-0 z-10 grid gap-1 p-4 pt-10 text-white transition-all duration-300 ${isActive ? 'bg-gradient-to-t from-gray-900/95 to-transparent' : 'bg-gradient-to-t from-gray-900/60 to-transparent opacity-60'}`}>
                  <span className="truncate font-['Cormorant_SC'] text-sm font-extrabold leading-tight">{project.title}</span>
                  {isActive && project.liveUrl && <span className="text-[0.62rem] font-extrabold uppercase tracking-widest text-indigo-300">Open live site ↗</span>}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <p className="relative z-20 flex items-center justify-center gap-2 mt-4 text-xs tracking-wide text-gray-400 font-semibold" aria-hidden="true">Drag to explore <span className="text-lg text-indigo-400">↔</span></p>
    </section>
  );
}
