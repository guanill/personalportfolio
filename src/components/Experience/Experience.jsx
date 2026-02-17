import { experiences } from '../../data/portfolio';
import { useState, useRef, useCallback } from 'react';
import './Experience.css';

function MicrosoftLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 23 23">
      <rect x="0" y="0" width="11" height="11" fill="#f25022" />
      <rect x="12" y="0" width="11" height="11" fill="#7fba00" />
      <rect x="0" y="12" width="11" height="11" fill="#00a4ef" />
      <rect x="12" y="12" width="11" height="11" fill="#ffb900" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ArrowIcon({ expanded }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`exp-arrow ${expanded ? 'exp-arrow--open' : ''}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

const TAGS_MAP = {
  1: ['C++', 'Python', 'ML', 'Audio Pipeline', 'PSTN'],
  2: ['C++', 'Python', 'Azure', 'ML'],
  3: ['React', 'Bootstrap', 'Figma', 'PM'],
};

const HIGHLIGHTS_MAP = {
  1: { metric: '~$1.1M', label: 'Annual savings' },
  2: { metric: '300M+', label: 'Users impacted' },
  3: { metric: '7 Weeks', label: 'Ship timeline' },
};

function ExperienceCard({ exp, index }) {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
    const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);
    el.style.setProperty('--glow-x', `${x}%`);
    el.style.setProperty('--glow-y', `${y}%`);
  }, []);

  const tags = TAGS_MAP[exp.id] || [];
  const highlight = HIGHLIGHTS_MAP[exp.id];
  const showBullets = expanded || exp.bullets.length <= 2;
  const visibleBullets = showBullets ? exp.bullets : exp.bullets.slice(0, 2);

  return (
    <div className={`timeline__item reveal reveal-delay-${index + 1}`}>
      {/* Timeline connector */}
      <div className="timeline__connector">
        <div className="timeline__dot-ring">
          <div className="timeline__dot">
            <MicrosoftLogo />
          </div>
        </div>
        {index < experiences.length - 1 && (
          <div className="timeline__line">
            <div className="timeline__line-glow" />
          </div>
        )}
      </div>

      {/* Card */}
      <article
        ref={cardRef}
        className="timeline__card"
        onMouseMove={handleMouseMove}
      >
        {/* Gradient border glow */}
        <div className="timeline__card-glow" />

        {/* Header area */}
        <div className="timeline__card-header">
          <div className="timeline__card-info">
            <div className="timeline__role-row">
              <h3 className="timeline__role">{exp.role}</h3>
              {highlight && (
                <div className="timeline__highlight">
                  <span className="timeline__highlight-metric">{highlight.metric}</span>
                  <span className="timeline__highlight-label">{highlight.label}</span>
                </div>
              )}
            </div>
            <p className="timeline__company">{exp.company}</p>
            <div className="timeline__meta">
              <span className="timeline__meta-item">
                <CalendarIcon />
                {exp.date}
              </span>
              {exp.location && (
                <span className="timeline__meta-item">
                  <LocationIcon />
                  {exp.location}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="timeline__divider" />

        {/* Bullets */}
        <ul className="timeline__bullets">
          {visibleBullets.map((bullet, i) => (
            <li key={i} className="timeline__bullet">
              <span className="timeline__bullet-num">{String(i + 1).padStart(2, '0')}</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {exp.bullets.length > 2 && (
          <button
            className="timeline__toggle"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Show less' : `Show ${exp.bullets.length - 2} more`}
            <ArrowIcon expanded={expanded} />
          </button>
        )}

        {/* Tags */}
        <div className="timeline__card-tags">
          {tags.map(t => (
            <span key={t} className="timeline__tag">{t}</span>
          ))}
        </div>
      </article>
    </div>
  );
}

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="experience__header reveal">
          <div>
            <h2 className="section-title">Experience</h2>
            <p className="section-subtitle">
              Where I&apos;ve contributed and grown as an engineer.
            </p>
          </div>
          <div className="experience__badge reveal reveal-delay-1">
            <span className="experience__badge-number">3</span>
            <span className="experience__badge-label">Internships at<br/>Microsoft</span>
          </div>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
