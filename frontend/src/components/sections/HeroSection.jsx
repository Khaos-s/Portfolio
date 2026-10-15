import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkle } from 'lucide-react';
import Button from '../ui/Button';
import portrait from '../../assets/images/hero-cinematic-shoulder-fixed.png';
import { profile } from '../../content/portfolio';

export default function HeroSection() {
  const github = profile.socials.find((social) => social.label === 'GitHub');

  return (
    <section id="home" className="home-hero cinematic-hero" aria-labelledby="hero-title" tabIndex={-1}>
      <div className="hero-utility container"><span>Developer • Designer • Always learning.</span><span>Available for freelance</span></div>
      <div className="hero-backdrop-word" aria-hidden="true">Portfolio</div>
      <div className="hero-portrait cinematic-portrait">
        <img src={portrait} alt="John Arvy Lopez wearing metallic-rimmed glasses and a black blazer, with warm and crimson studio lighting" width="1392" height="1130" fetchPriority="high" />
      </div>
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-greeting">Hello, I’m</p>
          <h1 id="hero-title" className="hero-title"><span>John Arvy</span><span>Lopez</span></h1>
          <p className="hero-role">Full-stack Developer</p>
          <p className="hero-description">I build and design stylish, user-focused web experiences that combine creativity with strategy. Passionate about clean code, smooth interactions, and details that make a difference.</p>
          <div className="hero-actions">
            <Button asChild><Link to="/#work">Explore projects <ArrowUpRight size={18} aria-hidden="true" /></Link></Button>
            {github && <a className="hero-github" href={github.href} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={18} aria-hidden="true" /><span className="sr-only"> (new tab)</span></a>}
          </div>
        </div>
      </div>
      <p className="hero-annotation"><Sparkle size={18} strokeWidth={1.5} aria-hidden="true" /><span>Turning ideas into powerful digital experiences.</span></p>
      <div className="hero-bottom container"><span>Available worldwide</span></div>
    </section>
  );
}
