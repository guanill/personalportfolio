import { projects } from '../../data/portfolio';
import { useRef, useCallback } from 'react';
import './Projects.css';

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function TiltCard({ children, className, isFeatured }) {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const maxTilt = isFeatured ? 4 : 6;
    const rotateX = (0.5 - y) * maxTilt;
    const rotateY = (x - 0.5) * maxTilt;

    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`;

    // Move gradient glow to cursor position
    const glowX = (x * 100).toFixed(1);
    const glowY = (y * 100).toFixed(1);
    el.style.setProperty('--glow-x', `${glowX}%`);
    el.style.setProperty('--glow-y', `${glowY}%`);
  }, [isFeatured]);

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
  }, []);

  return (
    <article
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </article>
  );
}

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title reveal">Projects</h2>
        <p className="section-subtitle reveal reveal-delay-1">
          A selection of things I&apos;ve built.
        </p>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <TiltCard
              key={project.id}
              isFeatured={!!project.image}
              className={`project-card ${project.image ? 'project-card--featured' : ''} reveal reveal-delay-${(index % 4) + 1}`}
            >
              {project.image && (
                <div className="project-card__image-wrap">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="project-card__image"
                    loading="lazy"
                  />
                  <div className="project-card__image-overlay" />
                </div>
              )}
              <div className="project-card__body">
              <div className="project-card__number">
                {String(project.id).padStart(2, '0')}
              </div>
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>

              <div className="project-card__footer">
                <div className="project-card__tech">
                  {project.tech.map((t) => (
                    <span key={t} className="project-card__tag">{t}</span>
                  ))}
                </div>
                <div className="project-card__links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__link"
                      aria-label="GitHub repository"
                    >
                      <GithubIcon />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__link"
                      aria-label="Live demo"
                    >
                      <ExternalLinkIcon />
                    </a>
                  )}
                  {project.note && !project.github && !project.live && (
                    <span className="project-card__note">{project.note}</span>
                  )}
                </div>
              </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
