import { Link } from 'react-router-dom';
import Portrait from '../components/sections/Portrait';
import Capabilities from '../components/sections/Capabilities';
import ApproachList from '../components/sections/ApproachList';
import Button from '../components/ui/Button';
import { profile } from '../content/portfolio';
import useSeo from '../lib/seo';

export default function ResumePage() {
  useSeo('About', `Meet ${profile.name}, ${profile.role.toLowerCase()}.`);
  return (
    <div className="page"><div className="container">
      <Link className="back-link" to="/#about">← Back to the introduction</Link>
      <div className="profile-intro">
        <div className="page-heading"><p className="eyebrow">A little more about me</p><h1>A curious mind.<br /><em>A careful approach.</em></h1><p className="detail-lead">{profile.about}</p><p className="profile-location">{profile.name} · {profile.location}</p><Button asChild><Link to="/#contact">Start a conversation ↗</Link></Button></div>
        <Portrait />
      </div>
      <div className="capabilities-grid">
        <div><p className="eyebrow">My approach</p><h2>Small decisions.<br /><em>Better experiences.</em></h2></div><ApproachList />
      </div>
      <div className="capabilities-grid">
        <div><p className="eyebrow">Capabilities</p><h2>From idea<br /><em>to interface.</em></h2><p className="muted">A practical toolkit for designing, building, and refining web applications.</p></div><Capabilities />
      </div>
    </div></div>
  );
}

