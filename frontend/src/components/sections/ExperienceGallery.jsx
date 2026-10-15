import { useState, useCallback, useRef } from 'react';
import { Dialog, DialogCloseButton, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '../ui/Dialog';

export default function ExperienceGallery({ slides = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const touchStartX = useRef(null);

  const total = slides.length;
  const currentSlide = slides[currentIndex] || null;

  const nextSlide = useCallback(() => {
    if (total <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    if (total <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') { event.preventDefault(); nextSlide(); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); prevSlide(); }
  };

  // Touch swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 45) prevSlide();
    if (diff < -45) nextSlide();
    touchStartX.current = null;
  };

  if (!currentSlide) return null;

  return (
    <div className="experience-gallery" onKeyDown={handleKeyDown}>
      <div className="gallery-header">
        <div>
          <h3 className="gallery-title">Beyond the screen</h3>
        </div>
        <p className="gallery-counter-badge" aria-live="polite">Photo {currentIndex + 1} of {total}</p>
      </div>

      <div
        className="gallery-stage"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
          <DialogTrigger asChild>
            <button className="gallery-media-wrapper" type="button" aria-label={`View full photo: ${currentSlide.title}`}>
              <img src={currentSlide.image} alt={currentSlide.title} className="gallery-main-img" loading="lazy" />
              <span className="gallery-media-overlay"><span className="gallery-zoom-pill">View photo ↗</span></span>
            </button>
          </DialogTrigger>
          <DialogContent>
            <div className="media-modal-header">
              <div className="media-modal-meta"><span className="media-modal-badge">{currentSlide.category}</span><DialogTitle className="media-modal-title">{currentSlide.title}</DialogTitle><DialogDescription className="sr-only">{currentSlide.description}</DialogDescription></div>
              <DialogCloseButton />
            </div>
            <div className="media-modal-image-wrapper"><img src={currentSlide.image} alt={currentSlide.title} className="media-modal-img" /></div>
            <div className="media-modal-footer"><p className="media-modal-desc">{currentSlide.description}</p><div className="media-modal-nav"><button type="button" className="media-modal-nav-btn" onClick={prevSlide}>← Prev</button><span className="media-modal-counter">{currentIndex + 1} / {total}</span><button type="button" className="media-modal-nav-btn" onClick={nextSlide}>Next →</button></div></div>
          </DialogContent>
        </Dialog>

        <div className="gallery-caption-card">
          <h4 className="gallery-item-title">{currentSlide.title}</h4>
          <p className="gallery-item-desc">{currentSlide.description}</p>

          <div className="gallery-controls-bar">
            <div className="gallery-dots">
              {slides.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  className={`gallery-dot ${idx === currentIndex ? 'is-active' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                  aria-pressed={idx === currentIndex}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="gallery-nav-buttons">
              <button
                type="button"
                className="gallery-btn"
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                ←
              </button>
              <button
                type="button"
                className="gallery-btn"
                onClick={nextSlide}
                aria-label="Next slide"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnail Bar */}
      <div className="gallery-thumbnails">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            type="button"
            className={`gallery-thumb-btn ${idx === currentIndex ? 'is-active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
            aria-pressed={idx === currentIndex}
            aria-label={`Select ${slide.title}`}
          >
            <img src={slide.image} alt="" aria-hidden="true" />
            <span className="thumb-label">{slide.category}</span>
          </button>
        ))}
      </div>

    </div>
  );
}
