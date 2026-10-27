import { Link } from 'react-router-dom';
import HeroSection from '../components/sections/HeroSection';
import ProjectStack from '../components/projects/ProjectStack';
import SectionHeading from '../components/sections/SectionHeading';
import ContactPanel from '../components/sections/ContactPanel';
import Capabilities from '../components/sections/Capabilities';
import ApproachList from '../components/sections/ApproachList';
import ExperienceSection from '../components/sections/ExperienceSection';
import { profile, projects } from '../content/portfolio';
import useSeo from '../lib/seo';

export default function HomePage() {
  useSeo(null, profile.summary);
  const selected = [...projects.filter((project) => project.slug === 'breedsmart-oton'), ...projects.filter((project) => project.featured && project.slug !== 'breedsmart-oton')];
  return (
    <>
      <HeroSection />

      <section id="work" className="section work-section theme-dark" aria-labelledby="work-title" tabIndex={-1}>
        <div className="container">
          <div className="section-topline">
            <SectionHeading title="Featured projects" id="work-title">Web applications and interfaces, from the first idea to the finished experience.</SectionHeading>
            <Link className="text-link" to="/projects">View all projects ↗</Link>
          </div>
          <ProjectStack projects={selected} />
          <div className="work-footnote"><span>More experiments, prototypes, and source code.</span><a className="text-link" href={profile.socials[0].href} target="_blank" rel="noreferrer">On GitHub ↗<span className="sr-only"> (new tab)</span></a></div>
        </div>
      </section>

      <section id="about" className="section about-section" aria-labelledby="about-title" tabIndex={-1}>
        <div className="container">
          <div className="about-grid">
            <div className="about-intro">
              <h2 id="about-title">Behind the work</h2>
              <p className="about-lead">{profile.about}</p>
              <Link className="text-link" to="/resume">A little more about me ↗</Link>
            </div>
            <ApproachList />
          </div>
          <div className="capabilities-grid">
            <div><h3 className="display-heading">My toolkit</h3><p className="muted">From the interface you see to the systems that support it.</p></div>
            <Capabilities />
          </div>
        </div>
      </section>

      <ExperienceSection />

      <section id="contact" className="section contact-section" aria-label="Contact me" tabIndex={-1}><ContactPanel /></section>
    </>
  );
}

