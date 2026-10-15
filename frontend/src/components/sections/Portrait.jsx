import portrait from '../../assets/images/hero-profile.jpg';
import { profile } from '../../content/portfolio';

export default function Portrait() {
  return (
    <figure className="portrait">
      <div className="portrait-stage">
        <div className="portrait-backplate" aria-hidden="true" />
        <div className="portrait-photo">
          <img src={portrait} alt={profile.name} width="512" height="473" fetchPriority="high" />
        </div>
        <span className="portrait-seal" aria-hidden="true">JAL.</span>
      </div>
      <figcaption className="portrait-caption">
        <span>{profile.name}</span>
        <span>{profile.location}</span>
      </figcaption>
    </figure>
  );
}
