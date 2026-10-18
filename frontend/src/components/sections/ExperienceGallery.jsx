import { useState, useCallback, useRef } from 'react';
import { Dialog, DialogCloseButton, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '../ui/Dialog';

export default function ExperienceGallery({ gallery }) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const touchStartX = useRef(null);
  const photos = gallery?.photos || [];
  const total = photos.length;
  const currentPhoto = photos[photoIndex] || null;

  const nextPhoto = useCallback(() => {
    if (total <= 1) return;
    setPhotoIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevPhoto = useCallback(() => {
    if (total <= 1) return;
    setPhotoIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') { event.preventDefault(); nextPhoto(); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); prevPhoto(); }
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const diff = event.changedTouches[0].clientX - touchStartX.current;
    if (diff > 45) prevPhoto();
    if (diff < -45) nextPhoto();
    touchStartX.current = null;
  };

  if (!currentPhoto) return null;

  return (
    <div className="experience-gallery" onKeyDown={handleKeyDown}>
      <div className="gallery-header">
        <h3 className="gallery-title">Beyond the screen</h3>
        <p className="gallery-counter-badge" aria-live="polite">Photo {photoIndex + 1} of {total}</p>
      </div>

      <div className="gallery-stage" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <div className="gallery-photo-frame">
          <Dialog open={modalOpen} onOpenChange={setModalOpen}>
            <DialogTrigger asChild>
              <button className="gallery-media-wrapper" type="button" aria-label={`View full photo: ${gallery.title}`}>
                <img src={currentPhoto.image} alt={currentPhoto.alt} className="gallery-main-img" loading="lazy" />
                <span className="gallery-media-overlay"><span className="gallery-zoom-pill">View photo ↗</span></span>
              </button>
            </DialogTrigger>
            <DialogContent>
              <div className="media-modal-header">
                <div className="media-modal-meta">
                  <span className="media-modal-badge">{gallery.category}</span>
                  <DialogTitle className="media-modal-title">{gallery.title}</DialogTitle>
                  <DialogDescription className="sr-only">{gallery.description}</DialogDescription>
                </div>
                <DialogCloseButton />
              </div>
              <div className="media-modal-image-wrapper"><img src={currentPhoto.image} alt={currentPhoto.alt} className="media-modal-img" /></div>
              <div className="media-modal-footer">
                <p className="media-modal-desc">{gallery.description}</p>
                {total > 1 && (
                  <div className="media-modal-nav">
                    <button type="button" className="media-modal-nav-btn" aria-label="Previous photo" onClick={prevPhoto}>← Prev</button>
                    <span className="media-modal-counter" aria-live="polite">{photoIndex + 1} / {total}</span>
                    <button type="button" className="media-modal-nav-btn" aria-label="Next photo" onClick={nextPhoto}>Next →</button>
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>

          {total > 1 && (
            <div className="gallery-photo-controls" role="group" aria-label="Photo carousel controls">
              <button type="button" className="gallery-btn" onClick={prevPhoto} aria-label="Previous photo">←</button>
              <span className="gallery-photo-count" aria-hidden="true">{photoIndex + 1} / {total}</span>
              <button type="button" className="gallery-btn" onClick={nextPhoto} aria-label="Next photo">→</button>
            </div>
          )}
        </div>

        <div className="gallery-caption-card">
          <h4 className="gallery-item-title">{gallery.title}</h4>
          <p className="gallery-item-desc">{gallery.description}</p>
        </div>
      </div>
    </div>
  );
}
