import { personalInfo } from '../../data/portfolio';
import { useState, useEffect } from 'react';
import Particles from '../Particles/Particles';
import './Hero.css';

const TERMINAL_LINES = [
  { prompt: true, text: 'whoami' },
  { prompt: false, text: 'Angel Guanill — Software Engineer' },
  { prompt: true, text: 'cat skills.txt' },
  { prompt: false, text: 'React · JavaScript · Python · C++' },
  { prompt: true, text: 'cat status.txt' },
  { prompt: false, text: 'Building cool stuff... ✨' },
];

function Terminal() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines < TERMINAL_LINES.length) {
      const delay = TERMINAL_LINES[visibleLines]?.prompt ? 600 : 300;
      const timer = setTimeout(() => setVisibleLines((v) => v + 1), delay);
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);

  return (
    <div className="terminal">
      <div className="terminal__header">
        <span className="terminal__dot terminal__dot--red" />
        <span className="terminal__dot terminal__dot--yellow" />
        <span className="terminal__dot terminal__dot--green" />
        <span className="terminal__title">~/angel</span>
      </div>
      <div className="terminal__body">
        {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="terminal__line">
            {line.prompt ? (
              <>
                <span className="terminal__prompt">❯</span>
                <span className="terminal__command">{line.text}</span>
              </>
            ) : (
              <span className="terminal__output">{line.text}</span>
            )}
          </div>
        ))}
        {visibleLines < TERMINAL_LINES.length && (
          <div className="terminal__line">
            <span className="terminal__prompt">❯</span>
            <span className="terminal__cursor" />
          </div>
        )}
        {visibleLines >= TERMINAL_LINES.length && (
          <div className="terminal__line">
            <span className="terminal__prompt">❯</span>
            <span className="terminal__cursor" />
          </div>
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Particle field */}
      <Particles count={80} />

      {/* Decorative blobs */}
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />
      <div className="hero__blob hero__blob--3" />

      <div className="hero__content container">
        <div className="hero__grid">
          <div className="hero__text">
            <p className="hero__greeting">
              <span className="hero__wave">👋</span> Hello, I'm
            </p>
            <h1 className="hero__name">{personalInfo.name}</h1>
            <h2 className="hero__role">
              <span className="hero__role-accent">{personalInfo.title}</span>
            </h2>
            <p className="hero__tagline">
              Building software that solves real-world problems, one commit at a time.
            </p>
            <div className="hero__cta">
              <a href="#projects" className="btn btn--primary">
                View My Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17l9.2-9.2M17 17V7.8H7.8" />
                </svg>
              </a>
              <a
                href={`${import.meta.env.BASE_URL}Resume%20Angel%20Guanill.pdf`}
                download
                className="btn btn--ghost"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Resume
              </a>
              <a href="#contact" className="btn btn--ghost">
                Get In Touch
              </a>
            </div>
          </div>
          <div className="hero__terminal-wrap">
            <Terminal />
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
