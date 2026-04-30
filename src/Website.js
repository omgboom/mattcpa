import React from 'react';
import { ArrowRight, Linkedin, Mail } from 'lucide-react';

const contactEmail = 'matthew.chrzaszcz@gmail.com';
const linkedinUrl = 'https://www.linkedin.com/in/chrzaszcz/';

const navItems = ['Philosophy', 'Systems', 'Impact', 'Fit'];

const journey = [
  'Find the constraints hidden in unclear economics, fragmented data, and manual work.',
  'Build mechanisms that connect infrastructure, models, permissions, and operating rhythm.',
  'Move the decision closer to the signal, then leave behind systems that keep compounding.',
];

const metrics = [
  { value: '10+', label: 'Years' },
  { value: '0-1', label: 'Builds' },
  { value: '$100M+', label: 'Visibility' },
  { value: '$2M', label: 'Economics' },
];

const archive = [
  {
    label: '40% revenue focus',
    text: 'CRM-connected AI workflow for the VIP team managing the top customer cohort.',
  },
  {
    label: 'Earlier action',
    text: 'Predictive models, datamarts, and production BI for acquisition and retention.',
  },
  {
    label: '50% profit lift',
    text: 'Budgeting and cost control that reduced operating expense and improved profit.',
  },
  {
    label: 'Modern operator',
    text: 'Strategy, infrastructure, analytics, automation, and executive communication.',
  },
];

const Website = () => (
  <div className="site-shell">
    <header className="site-header">
      <a className="brand-mark" href="#top" aria-label="Matt Chrzaszcz home">
        <img src={`${process.env.PUBLIC_URL}/refined-logo.png`} alt="" />
        <span>Matt</span>
      </a>

      <nav className="top-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
      </nav>

      <a className="enter-button" href={`mailto:${contactEmail}`}>
        Enter
      </a>
    </header>

    <main id="top">
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-photo" aria-hidden="true">
          <img src={`${process.env.PUBLIC_URL}/refined-portrait.png`} alt="" />
          <div className="jumpsuit-panel" />
        </div>

        <div className="hero-copy">
          <p className="hanzi">戦略 知能</p>
          <h1 id="hero-title">Enter The Field</h1>
          <p className="hero-summary">
            Align capital, data, and technology into systems that predict, adapt, and compound value.
          </p>
          <a className="gold-button" href={`mailto:${contactEmail}`}>
            Begin the journey
            <ArrowRight size={20} strokeWidth={1.6} />
          </a>
        </div>

        <div className="stage-index" aria-hidden="true">
          <span>01</span>
          <i />
          <i />
          <i />
          <i />
          <span>04</span>
        </div>

        <div className="scroll-cue" aria-hidden="true">
          <span>Scroll</span>
          <i />
        </div>
      </section>

      <section className="philosophy-section" id="philosophy">
        <p className="ghost-number">01</p>
        <div className="section-rule" />
        <article className="philosophy-copy">
          <p className="section-kicker">Philosophy</p>
          <h2>Be The Signal</h2>
          <p>
            Useful intelligence is not another tool. It is a tighter loop between signal, judgment,
            workflow, and business action.
          </p>
          <a href="#systems">
            Explore
            <ArrowRight size={18} strokeWidth={1.5} />
          </a>
        </article>
        <div className="image-slab black-shirt">
          <img src={`${process.env.PUBLIC_URL}/refined-portrait.png`} alt="Matt Chrzaszcz in a black shirt" />
        </div>
      </section>

      <section className="journey-section" id="systems">
        <div className="film-frame">
          <img src={`${process.env.PUBLIC_URL}/matt-photo.jpg`} alt="Matt Chrzaszcz" />
        </div>
        <p className="ghost-number">02</p>
        <div className="section-rule" />
        <article className="journey-copy">
          <p className="section-kicker">Systems</p>
          <h2>The Journey</h2>
          {journey.map((item) => (
            <p key={item}>{item}</p>
          ))}
          <a href="#impact">
            Discover
            <ArrowRight size={18} strokeWidth={1.5} />
          </a>
        </article>
      </section>

      <section className="metric-band" aria-label="Selected career signals">
        {metrics.map((metric) => (
          <article key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </article>
        ))}
      </section>

      <section className="archive-section" id="impact">
        <p className="ghost-number">03</p>
        <article className="archive-intro">
          <p className="section-kicker">Impact</p>
          <h2>Archive Moments</h2>
          <p>
            The proof is business movement: clearer customer focus, earlier action, tighter cost
            control, and operating patterns that keep improving.
          </p>
          <a href={`mailto:${contactEmail}`}>
            Discuss fit
            <ArrowRight size={18} strokeWidth={1.5} />
          </a>
        </article>

        <div className="archive-portrait">
          <img src={`${process.env.PUBLIC_URL}/refined-portrait.png`} alt="Portrait of Matt Chrzaszcz" />
        </div>

        <div className="archive-grid">
          {archive.map((item) => (
            <article key={item.label}>
              <span>{item.label}</span>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="fit-section" id="fit">
        <div className="fit-photo">
          <img src={`${process.env.PUBLIC_URL}/refined-portrait.png`} alt="Matt Chrzaszcz" />
        </div>
        <blockquote>
          <p>
            Knowing is not enough.
            <br />
            The system must apply.
            <br />
            Insight is not enough.
            <br />
            The business must move.
          </p>
          <cite>Builder, challenger, operator.</cite>
        </blockquote>
        <div className="dragon-mark" aria-hidden="true">
          <img src={`${process.env.PUBLIC_URL}/refined-logo.png`} alt="" />
        </div>
      </section>
    </main>

    <footer className="site-footer">
      <span>© 2026 Matt Chrzaszcz</span>
      <div>
        <a href={`mailto:${contactEmail}`}>Contact</a>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin size={18} strokeWidth={1.7} />
        </a>
        <a href={`mailto:${contactEmail}`} aria-label="Email Matt">
          <Mail size={18} strokeWidth={1.7} />
        </a>
      </div>
    </footer>
  </div>
);

export default Website;
