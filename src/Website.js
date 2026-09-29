import React, { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, Linkedin, Mail } from 'lucide-react';

const contactEmail = 'matthew.chrzaszcz@gmail.com';
const linkedinUrl = 'https://www.linkedin.com/in/chrzaszcz/';
const mailtoUrl = `mailto:${contactEmail}`;
const asset = (file) => `${process.env.PUBLIC_URL}/assets/${file}`;

const stages = [
  {
    id: 'intro',
    navLabel: 'Intro',
    step: '01',
    title: (
      <>
        Where Strategy Meets Intelligence, Meaning <em>Emerges</em>.
      </>
    ),
    summary:
      'I partner with leaders to align capital, data, and technology, building systems that predict, adapt, and compound value.',
    cta: { label: "Let's create convergence", href: mailtoUrl },
    showContact: true,
    points: [
      {
        id: '01',
        label: 'Strategy',
        text: 'Translate complexity into advantage. Align decisions with long-term value.',
      },
      {
        id: '02',
        label: 'AI Systems',
        text: 'Design and operationalize applied AI that augments judgment and scale.',
      },
      {
        id: '03',
        label: 'Predictive BI',
        text: 'Turn data into foresight. Anticipate, prioritize, and perform.',
      },
      {
        id: '04',
        label: 'Automation',
        text: 'Build intelligent workflows that remove friction and unlock capacity.',
      },
    ],
  },
  {
    id: 'approach',
    navLabel: 'Approach',
    step: '02',
    title: (
      <>
        Intelligence Becomes Useful When It Changes the <em>Loop</em>.
      </>
    ),
    summary:
      'The work is not more tools. It is a tighter relationship between signal, judgment, workflow, and business action.',
    cta: { label: 'See the proof', href: '#impact' },
    points: [
      {
        id: '01',
        label: 'Find constraints',
        text: 'Start where the business is actually slowed by unclear economics, fragmented data, or manual work.',
      },
      {
        id: '02',
        label: 'Build mechanisms',
        text: 'Connect infrastructure, models, permissions, and workflows into something teams can rely on.',
      },
      {
        id: '03',
        label: 'Move the decision',
        text: 'Shorten the distance between what the business can know and what it is willing to do.',
      },
      {
        id: '04',
        label: 'Compound leverage',
        text: 'Leave behind systems that keep improving capacity, clarity, and operating speed.',
      },
    ],
  },
  {
    id: 'impact',
    navLabel: 'Impact',
    step: '03',
    title: (
      <>
        The Signal Is Proven By Business <em>Movement</em>.
      </>
    ),
    summary:
      'My best work changes how a company sees customers, controls cost, allocates attention, and acts before the obvious moment.',
    cta: { label: 'Discuss fit', href: mailtoUrl },
    points: [
      {
        id: '01',
        label: '40% revenue focus',
        text: 'Built a CRM-connected AI workflow for the VIP team managing the top customer cohort.',
      },
      {
        id: '02',
        label: 'Earlier action',
        text: 'Developed predictive models, datamarts, and production BI for acquisition and retention marketing.',
      },
      {
        id: '03',
        label: '50% profit lift',
        text: 'Led budgeting and cost control that helped reduce operating expenses and improve profit.',
      },
      {
        id: '04',
        label: '$2M economics',
        text: 'Found provider overcharges, recovered cash, and secured lower ongoing payment fees.',
      },
    ],
  },
  {
    id: 'fit',
    navLabel: 'Fit',
    step: '04',
    title: (
      <>
        Builder, Challenger, Operator. One <em>Thread</em>.
      </>
    ),
    summary:
      'I am looking for an in-house role where practical systems, direct judgment, economic clarity, and high agency can compound.',
    cta: { label: 'Start a conversation', href: mailtoUrl },
    showContact: true,
    points: [
      {
        id: '01',
        label: 'Strategic finance',
        text: 'Fluent in the economics, incentives, and tradeoffs that determine whether work matters.',
      },
      {
        id: '02',
        label: 'Applied AI',
        text: 'Grounded in useful implementation: secure workflows, data-connected LLMs, and human-in-the-loop systems.',
      },
      {
        id: '03',
        label: 'Decision quality',
        text: 'Comfortable challenging assumptions and redesigning operating patterns around real outcomes.',
      },
      {
        id: '04',
        label: 'Modern operator',
        text: 'Able to move between strategy, infrastructure, analytics, automation, and executive communication.',
      },
    ],
  },
];

const metrics = [
  { value: '10+', label: 'Years', text: 'Strategic finance and business intelligence' },
  { value: '0–1', label: 'Finance functions', text: 'Built startup finance foundations, models, reporting, and controls' },
  { value: '$100M+', label: 'Spend visibility', text: 'Built budgets, reporting, and tools that help businesses excel' },
];

const portraitSizes = '(max-width: 1080px) 88vw, 26rem';

const FieldGeometry = () => (
  <svg className="field-geometry" viewBox="0 0 740 720" aria-hidden="true">
    <defs>
      <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#c6a987" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#c6a987" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle className="geo-orbit" cx="250" cy="362" r="132" />
    <circle className="geo-orbit geo-orbit-wide" cx="250" cy="362" r="246" />
    <line className="geo-axis" x1="0" y1="362" x2="740" y2="362" />
    <line className="geo-axis" x1="250" y1="0" x2="250" y2="720" />
    <g className="geo-fan">
      {Array.from({ length: 18 }).map((_, index) => {
        const angle = -62 + index * 7.2;
        const radians = (angle * Math.PI) / 180;
        const x = 250 + Math.cos(radians) * 360;
        const y = 362 + Math.sin(radians) * 360;

        return (
          <line
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className="geo-ray"
            x1="250"
            y1="362"
            x2={x}
            y2={y}
          />
        );
      })}
      {[0, 2, 4, 7, 10, 13, 16].map((index) => {
        const angle = -62 + index * 7.2;
        const radians = (angle * Math.PI) / 180;
        const x = 250 + Math.cos(radians) * 245;
        const y = 362 + Math.sin(radians) * 245;

        return (
          <circle
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className="geo-node"
            cx={x}
            cy={y}
            r={index === 10 ? 5 : 3.5}
          />
        );
      })}
      <circle className="geo-node geo-node-red" cx="270" cy="500" r="4" />
    </g>
    <circle className="geo-center" cx="250" cy="362" r="6" />
    <circle className="geo-glow" cx="250" cy="362" r="58" />
  </svg>
);

const ContactLinks = ({ className, size = 18 }) => (
  <>
    <a
      className={className}
      href={linkedinUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn profile (opens in a new tab)"
    >
      <Linkedin size={size} strokeWidth={1.7} aria-hidden="true" />
    </a>
    <a className={className} href={mailtoUrl} aria-label={`Email ${contactEmail}`}>
      <Mail size={size} strokeWidth={1.7} aria-hidden="true" />
    </a>
  </>
);

const StageAction = ({ cta }) => {
  const Icon = cta.href.startsWith('#') ? ArrowDown : ArrowUpRight;

  return (
    <a className="button-primary" href={cta.href}>
      <span>{cta.label}</span>
      <Icon size={18} strokeWidth={1.6} aria-hidden="true" />
    </a>
  );
};

const Stage = ({ stage, index, inView }) => {
  const Heading = index === 0 ? 'h1' : 'h2';
  const titleId = `${stage.id}-title`;

  return (
    <section
      id={stage.id}
      className={`stage${inView ? ' is-inview' : ''}`}
      data-reveal={stage.id}
      aria-labelledby={titleId}
    >
      <div className="stage-inner">
        <p className="stage-kicker reveal" style={{ '--i': 0 }} aria-hidden="true">
          <span>{stage.step}</span>
          {stage.navLabel}
        </p>
        <Heading id={titleId} className="stage-title reveal" style={{ '--i': 1 }}>
          {stage.title}
        </Heading>
        <p className="stage-summary reveal" style={{ '--i': 2 }}>
          {stage.summary}
        </p>

        <ol className="proof-list">
          {stage.points.map((point, pointIndex) => (
            <li className="proof-row reveal" style={{ '--i': 3 + pointIndex }} key={point.id}>
              <span className="proof-id" aria-hidden="true">
                {point.id}
              </span>
              <h3>{point.label}</h3>
              <p>{point.text}</p>
            </li>
          ))}
        </ol>

        <div className="stage-actions reveal" style={{ '--i': 3 + stage.points.length }}>
          <StageAction cta={stage.cta} />
          {stage.showContact && <ContactLinks className="button-icon" />}
        </div>
      </div>
    </section>
  );
};

const Profile = ({ inView }) => (
  <aside
    className={`profile${inView ? ' is-inview' : ''}`}
    data-reveal="profile"
    aria-label="About Matt Chrzaszcz"
  >
    <div className="profile-sticky">
      <figure className="portrait reveal" style={{ '--i': 1 }}>
        <FieldGeometry />
        <div className="portrait-frame">
          <picture>
            <source
              type="image/webp"
              srcSet={`${asset('portrait-560.webp')} 560w, ${asset('portrait-960.webp')} 960w`}
              sizes={portraitSizes}
            />
            <img
              className="portrait-image"
              src={asset('portrait-960.jpg')}
              srcSet={`${asset('portrait-560.jpg')} 560w, ${asset('portrait-960.jpg')} 960w`}
              sizes={portraitSizes}
              width="960"
              height="1280"
              alt="Portrait of Matt Chrzaszcz"
              fetchPriority="high"
            />
          </picture>
        </div>
        <figcaption className="portrait-caption">
          <strong>Matt Chrzaszcz</strong>
          <span>Strategic Finance, Analytics and Applied AI Operator</span>
        </figcaption>
      </figure>

      <ul className="metrics reveal" style={{ '--i': 3 }} aria-label="Selected career signals">
        {metrics.map((metric) => (
          <li className="metric" key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
            <p>{metric.text}</p>
          </li>
        ))}
      </ul>
    </div>
  </aside>
);

const Website = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [inView, setInView] = useState({});
  const [motionOk] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  useEffect(() => {
    // Highlight whichever stage crosses a thin band just above the middle of the viewport.
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const index = stages.findIndex((stage) => stage.id === entry.target.id);

          if (index !== -1) {
            setActiveIndex(index);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    // Reveal each block once, the first time it scrolls into view.
    const revealer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          revealer.unobserve(entry.target);
          setInView((current) => ({ ...current, [entry.target.dataset.reveal]: true }));
        });
      },
      { rootMargin: '0px 0px -10% 0px' }
    );

    stages.forEach((stage) => {
      const section = document.getElementById(stage.id);

      if (section) {
        spy.observe(section);
      }
    });
    document.querySelectorAll('[data-reveal]').forEach((element) => revealer.observe(element));

    return () => {
      spy.disconnect();
      revealer.disconnect();
    };
  }, []);

  return (
    <div className={`site-shell${motionOk ? ' motion-ok' : ''}`} style={{ '--stage': activeIndex }}>
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <div className="backdrop" aria-hidden="true" />

      <aside className="side-rail" aria-label="Site navigation">
        <a className="rail-logo" href="#intro" aria-label="Matt Chrzaszcz, back to top">
          <img src={asset('mc-monogram.png')} alt="" width="320" height="320" />
        </a>

        <nav className="rail-nav" aria-label="Sections">
          {stages.map((stage, index) => {
            const isActive = index === activeIndex;

            return (
              <a
                key={stage.id}
                className={`rail-link${isActive ? ' is-active' : ''}`}
                href={`#${stage.id}`}
                aria-current={isActive ? 'true' : undefined}
              >
                <span>{stage.step}</span>
                <strong>{stage.navLabel}</strong>
              </a>
            );
          })}
        </nav>

        <div className="rail-contact">
          <ContactLinks className="rail-icon" size={16} />
        </div>
      </aside>

      <div className="page">
        <header className="site-header">
          <a className="brand" href="#intro">
            <img className="brand-mark" src={asset('mc-monogram.png')} alt="" width="320" height="320" />
            <span className="brand-name">Matt Chrzaszcz</span>
            <span className="brand-tagline">Strategic Finance. Analytics. Applied AI.</span>
          </a>
        </header>

        <main className="layout" id="content" tabIndex={-1}>
          {stages.map((stage, index) => (
            <React.Fragment key={stage.id}>
              <Stage stage={stage} index={index} inView={inView[stage.id]} />
              {index === 0 && <Profile inView={inView.profile} />}
            </React.Fragment>
          ))}
        </main>

        <footer className="site-footer">
          <p>© {new Date().getFullYear()} Matt Chrzaszcz</p>
          <nav className="footer-links" aria-label="Contact">
            <a href={mailtoUrl}>{contactEmail}</a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Website;
