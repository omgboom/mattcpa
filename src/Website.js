import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, FileText, Linkedin, Mail } from 'lucide-react';

const contactEmail = 'matthew.chrzaszcz@gmail.com';
const linkedinUrl = 'https://www.linkedin.com/in/chrzaszcz/';
const mailtoUrl = `mailto:${contactEmail}`;
const asset = (file) => `${process.env.PUBLIC_URL}/assets/${file}`;
// The PDF opens in a new tab, where it can be read in the browser or saved.
const resumeUrl = asset('matt-chrzaszcz-resume.pdf');
const newTabProps = { target: '_blank', rel: 'noopener noreferrer' };

const stages = [
  {
    id: 'intro',
    navLabel: 'Intro',
    step: '01',
    title: (
      <>
        Clear&nbsp;Numbers. Earlier&nbsp;<em>Decisions</em>.
      </>
    ),
    summary:
      "I'm a CPA with 10+ years in FP&A and startup finance, turning fragmented data into decisions CEOs and CFOs can act on.",
    cta: { label: 'Get in touch', href: mailtoUrl },
    showResume: true,
    showLinkedIn: true,
    points: [
      {
        id: '01',
        label: 'FP&A leadership',
        text: 'Budgets, forecasts, long-range plans, and board reporting that leaders actually use.',
      },
      {
        id: '02',
        label: 'Profitability',
        text: 'Cost control, pricing, and unit economics that show up in operating margin.',
      },
      {
        id: '03',
        label: 'Finance from zero',
        text: 'First-hire experience owning the close, cash, compliance, payroll, and investor reporting.',
      },
      {
        id: '04',
        label: 'Data & AI',
        text: 'SQL, dbt, BI, and AI-enabled tools I build myself, so finance keeps pace with the business.',
      },
    ],
  },
  {
    id: 'impact',
    navLabel: 'Impact',
    step: '02',
    title: (
      <>
        Results That Show Up in the <em>{'P&L'}</em>.
      </>
    ),
    summary:
      'The pattern repeats: find where money leaks or stalls, prove it with data, and fix the mechanism behind it.',
    cta: { label: 'See my career', href: '#career' },
    points: [
      {
        id: '01',
        label: (
          <>
            <em>+50%</em> operating profit
          </>
        ),
        text: "Led Pinnacle's annual budget with a hard line on cost: operating expenses down 15% versus fiscal 2023.",
      },
      {
        id: '02',
        label: (
          <>
            <em>$2M</em> recovered and saved
          </>
        ),
        text: 'Partnered with Payments to recover ~$0.5M in overcharges and secure lower fees worth ~$1.5M more.',
      },
      {
        id: '03',
        label: (
          <>
            <em>$1M</em> a month saved
          </>
        ),
        text: 'At Vidyard, helped cut marketing spend ~$1M a month as the market shifted, without a major revenue hit.',
      },
      {
        id: '04',
        label: (
          <>
            <em>$1M+</em> cash unlocked
          </>
        ),
        text: "As Looka's first finance hire, freed funds stuck in PayPal with banks and payment partners.",
      },
    ],
  },
  {
    id: 'career',
    navLabel: 'Career',
    step: '03',
    variant: 'timeline',
    title: (
      <>
        From First Finance Hire to Head of <em>{'FP&A'}</em>.
      </>
    ),
    summary:
      'Each role widened the brief, from reporting the numbers to owning the plan to building the function around it.',
    cta: { label: 'View full resume', href: resumeUrl, external: true },
    points: [
      { id: '2025', label: 'Current role', role: 'Head of Strategic Finance', text: 'Online gaming' },
      { id: '2023', label: 'Pinnacle', role: 'Head of FP&A', text: 'Global online gaming' },
      { id: '2020', label: 'Vidyard', role: 'Senior Manager, Revenue FP&A', text: 'B2B video SaaS' },
      {
        id: '2020',
        label: 'Bonsai & Vital Bio',
        role: 'Fractional Head of Finance',
        text: 'Early-stage startups',
      },
      { id: '2019', label: 'Looka', role: 'Head of Finance', text: 'First finance hire' },
      { id: '2017', label: 'FreshBooks', role: 'FP&A Manager', text: 'Small-business accounting SaaS' },
    ],
  },
  {
    id: 'fit',
    navLabel: 'Fit',
    step: '04',
    title: (
      <>
        The Right Seat at the Right <em>Stage</em>.
      </>
    ),
    summary:
      "I'm open to senior finance roles at growing companies that need both a strategic partner and a hands-on builder.",
    cta: { label: "Let's talk", href: mailtoUrl },
    showResume: true,
    showLinkedIn: true,
    points: [
      {
        id: '01',
        label: 'Head or Director of FP&A',
        text: 'Growth companies of up to about 500 people building a planning function the CFO can trust.',
      },
      {
        id: '02',
        label: 'Head of Finance',
        text: 'Startups of up to about 100 people that need one leader across accounting, cash, and planning.',
      },
      {
        id: '03',
        label: 'How I work',
        text: "Hands-on, direct, and data-first. I'd rather fix the mechanism than explain the variance.",
      },
      {
        id: '04',
        label: 'Based in',
        text: 'Kitchener–Toronto, Ontario, Canada.',
      },
    ],
  },
];

const metrics = [
  { value: '10+', label: 'Years', text: 'FP&A, strategic finance, and startup finance' },
  { value: 'CPA', label: 'Since 2019', text: 'Chartered Professional Accountant, CPA Ontario' },
  {
    value: '3',
    label: 'Functions built',
    text: 'Startup finance set up from zero, as first hire or fractional lead',
  },
];

const portraitSizes = '(max-width: 1080px) 88vw, 26rem';
const stackedQuery = '(max-width: 1080px)';
const compactQuery = '(max-width: 720px)';

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleChange = () => setMatches(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [query]);

  return matches;
};

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
      {...newTabProps}
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
    <a className="button-primary" href={cta.href} {...(cta.external ? newTabProps : {})}>
      <span>{cta.label}</span>
      <Icon size={18} strokeWidth={1.6} aria-hidden="true" />
    </a>
  );
};

const ResumeButton = () => (
  <a className="button-secondary" href={resumeUrl} {...newTabProps}>
    <span>Resume</span>
    <FileText size={17} strokeWidth={1.6} aria-hidden="true" />
  </a>
);

const Stage = ({ stage, index, inView, isCompact }) => {
  const Heading = index === 0 ? 'h1' : 'h2';
  const titleId = `${stage.id}-title`;
  const isTimeline = stage.variant === 'timeline';
  const listRef = useRef(null);
  const [activePoint, setActivePoint] = useState(0);

  // On phones the points become a swipeable row of cards; track which card is in view.
  const handlePointsScroll = () => {
    const list = listRef.current;

    if (!list || list.children.length < 2) {
      return;
    }

    const step = list.children[1].offsetLeft - list.children[0].offsetLeft;
    const atEnd = list.scrollLeft >= list.scrollWidth - list.clientWidth - 2;

    setActivePoint(atEnd ? list.children.length - 1 : Math.round(list.scrollLeft / step));
  };

  const showPoint = (pointIndex) => {
    const list = listRef.current;
    const card = list?.children[pointIndex];

    if (card) {
      list.scrollTo({ left: card.offsetLeft - list.children[0].offsetLeft, behavior: 'smooth' });
    }
  };

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

        <ol
          ref={listRef}
          className={`proof-list${isTimeline ? ' is-timeline' : ''}`}
          onScroll={isCompact ? handlePointsScroll : undefined}
          tabIndex={isCompact ? 0 : undefined}
          aria-label={isCompact ? `${stage.navLabel} points` : undefined}
        >
          {stage.points.map((point, pointIndex) => (
            // eslint-disable-next-line react/no-array-index-key
            <li className="proof-row reveal" style={{ '--i': 3 + pointIndex }} key={pointIndex}>
              {/* Step numbers are decoration; timeline years are content. */}
              <span className="proof-id" aria-hidden={isTimeline ? undefined : 'true'}>
                {point.id}
              </span>
              <h3>{point.label}</h3>
              <p>
                {point.role && (
                  <>
                    <span className="proof-role">{point.role}</span>{' '}
                  </>
                )}
                {point.text}
              </p>
            </li>
          ))}
        </ol>

        <div className="proof-dots" aria-hidden="true">
          {stage.points.map((point, pointIndex) => (
            <button
              // eslint-disable-next-line react/no-array-index-key
              key={pointIndex}
              type="button"
              tabIndex={-1}
              className={`proof-dot${pointIndex === activePoint ? ' is-active' : ''}`}
              onClick={() => showPoint(pointIndex)}
            />
          ))}
        </div>

        <div className="stage-actions reveal" style={{ '--i': 3 + stage.points.length }}>
          <StageAction cta={stage.cta} />
          {stage.showResume && <ResumeButton />}
          {stage.showLinkedIn && (
            <a
              className="button-icon"
              href={linkedinUrl}
              {...newTabProps}
              aria-label="LinkedIn profile (opens in a new tab)"
            >
              <Linkedin size={18} strokeWidth={1.7} aria-hidden="true" />
            </a>
          )}
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
          <strong>Matt Chrzaszcz, CPA</strong>
          <span>Strategic finance and FP&amp;A leader based in Kitchener–Toronto</span>
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
  const isCompact = useMediaQuery(compactQuery);

  useEffect(() => {
    // On tablets and phones, snap one panel per screen only when every panel fits the screen,
    // so small phones and large text settings fall back to ordinary scrolling.
    const root = document.documentElement;
    const stacked = window.matchMedia(stackedQuery);
    const panels = [...document.querySelectorAll('.stage, .profile')];

    const update = () => {
      const fits =
        stacked.matches &&
        panels.every((panel) => {
          const minHeight = parseFloat(window.getComputedStyle(panel).minHeight);

          return panel.offsetHeight <= Math.ceil(minHeight) + 1;
        });

      root.classList.toggle('snap-fit', fits);
    };

    const resizeObserver = new ResizeObserver(update);

    panels.forEach((panel) => resizeObserver.observe(panel));
    stacked.addEventListener('change', update);
    update();

    return () => {
      resizeObserver.disconnect();
      stacked.removeEventListener('change', update);
      root.classList.remove('snap-fit');
    };
  }, []);

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
    <div
      className={`site-shell${motionOk ? ' motion-ok' : ''}`}
      style={{ '--stage': activeIndex, '--stage-count': stages.length }}
    >
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
            <span className="brand-tagline">Strategic Finance. FP&amp;A. CPA.</span>
          </a>
          <div className="header-contact">
            <ContactLinks className="header-icon" size={18} />
          </div>
          <span className="header-progress" aria-hidden="true" />
        </header>

        <main className="layout" id="content" tabIndex={-1}>
          {stages.map((stage, index) => (
            <React.Fragment key={stage.id}>
              <Stage stage={stage} index={index} inView={inView[stage.id]} isCompact={isCompact} />
              {index === 0 && <Profile inView={inView.profile} />}
            </React.Fragment>
          ))}
        </main>

        <footer className="site-footer">
          <p>© {new Date().getFullYear()} Matt Chrzaszcz</p>
          <nav className="footer-links" aria-label="Contact">
            <a href={mailtoUrl}>{contactEmail}</a>
            <a href={linkedinUrl} {...newTabProps}>
              LinkedIn
            </a>
            <a href={resumeUrl} {...newTabProps}>
              Resume (PDF)
            </a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Website;
