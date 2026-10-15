import { Dialog, DialogCloseButton, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '../ui/Dialog';

export default function AchievementsSection({ achievements = [] }) {
  const isEmpty = achievements.length === 0;

  return (
    <div className="achievements-section" id="achievements">
      <div className="achievements-header">
        <div>
          <p className="eyebrow">// ACHIEVEMENTS &amp; RECOGNITION</p>
          <h3 className="achievements-title">Certificates &amp; Milestones</h3>
          <p className="muted achievements-subtitle">
            Certificates and academic achievements representing continuous learning and hands-on practice.
          </p>
        </div>
      </div>

      {isEmpty ? (
        /* Clean empty state ready for manual update by user */
        <div className="achievement-empty-card">
          <div className="achievement-empty-icon" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="6" />
              <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
            </svg>
          </div>
          <div className="achievement-empty-copy">
            <span className="achievement-empty-badge">Currently Updating</span>
            <h4 className="achievement-empty-title">Certificates &amp; Awards in Progress</h4>
            <p className="achievement-empty-desc">
              Academic credentials, course certifications, and competition recognitions will be showcased here.
            </p>
          </div>
        </div>
      ) : (
        /* Achievement cards grid (when populated) */
        <div className="achievements-grid">
          {achievements.map((item) => (
            <Dialog key={item.id || item.title}>
              <DialogTrigger asChild>
                <button type="button" className="achievement-card" aria-label={`View certificate: ${item.title}`}>
              <div className="achievement-media">
                <img
                  src={item.image}
                  alt={item.title}
                  className="achievement-img"
                  loading="lazy"
                />
                <div className="achievement-overlay">
                  <span className="achievement-view-btn">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    View Certificate
                  </span>
                </div>
              </div>
              <div className="achievement-body">
                <div>
                  <p className="achievement-category">// {item.category || 'CERTIFICATION'}</p>
                  <h4 className="achievement-item-title">{item.title}</h4>
                  {item.issuer && <p className="achievement-issuer">{item.issuer}</p>}
                </div>
                <div className="achievement-footer">
                  {item.year && <span className="achievement-year">{item.year}</span>}
                  <div className="achievement-status">
                    <span className="achievement-pulse" aria-hidden="true" />
                    <span>VERIFIED</span>
                  </div>
                </div>
              </div>
                </button>
              </DialogTrigger>
              <DialogContent className="certificate-modal">
                <div className="media-modal-header">
                  <div className="media-modal-meta">
                    <div className="achievement-status in-modal">
                      <span className="achievement-pulse" aria-hidden="true" />
                      <span>{item.category || 'CERTIFIED'}</span>
                    </div>
                    <DialogTitle className="media-modal-title">{item.title}</DialogTitle>
                    <DialogDescription className="media-modal-issuer">
                      {item.issuer ? `${item.issuer}${item.year ? ` · ${item.year}` : ''}` : 'Certificate preview'}
                    </DialogDescription>
                  </div>
                  <DialogCloseButton aria-label="Close certificate preview" />
                </div>
                <div className="media-modal-image-wrapper certificate-wrapper">
                  <img src={item.image} alt={item.title} className="media-modal-img certificate-full-img" />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      )}
    </div>
  );
}
