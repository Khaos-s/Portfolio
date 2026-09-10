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
  return (
    <section className="project-reel" aria-label="Featured project reel">
      <div className={`reel-viewport ${dragging ? 'is-dragging' : ''}`} ref={viewportRef} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={finishDrag} onPointerCancel={finishDrag}>
        <div className="reel-track" style={{ transform: `translateX(${translateX}px)` }}>
          {projects.map((project, index) => {
            const isActive = index === activeIndex;
            return <button className={`reel-item ${isActive ? 'is-active' : ''}`} type="button" key={project.slug} ref={(element) => { itemRefs.current[index] = element; }} onClick={() => selectOrOpenProject(project, index)} aria-label={isActive && project.liveUrl ? `Open ${project.title} live site` : `Select ${project.title}`} aria-pressed={isActive}>
              <ProjectCover logo={project.logo} title={project.title} />
              <span className="reel-item-details">
                <span className="reel-item-title">{project.title}</span>
                {isActive && project.liveUrl && <span className="reel-item-link">Open live site ↗</span>}
              </span>
            </button>;
          })}
        </div>
      </div>
      <p className="reel-drag-hint" aria-hidden="true">Drag to explore <span>↔</span></p>
    </section>
  );
}
