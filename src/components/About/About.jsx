import { aboutParagraphs } from '../../data/portfolio';
import { useCountUp } from '../../hooks/useCountUp';
import './About.css';

function AnimatedStat({ end, suffix = '', label }) {
  const { count, ref } = useCountUp(end, 2000);
  return (
    <div className="about__stat" ref={ref}>
      <span className="about__stat-number">{count}{suffix}</span>
      <span className="about__stat-label">{label}</span>
    </div>
  );
}

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title reveal">About Me</h2>
        <div className="about__grid">
          <div className="about__text">
            {aboutParagraphs.map((p, i) => (
              <p key={i} className={`reveal reveal-delay-${i + 1}`}>
                {p}
              </p>
            ))}
          </div>
          <div className="about__highlights reveal reveal-delay-2">
            <AnimatedStat end={3} suffix="+" label="Internships" />
            <AnimatedStat end={5} suffix="+" label="Projects Built" />
            <AnimatedStat end={300} suffix="M+" label="Users Impacted" />
          </div>
        </div>
      </div>
    </section>
  );
}
