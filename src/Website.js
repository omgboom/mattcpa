import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Linkedin, Mail } from 'lucide-react';

const contactEmail = 'matthew.chrzaszcz@gmail.com';
const linkedinUrl = 'https://www.linkedin.com/in/chrzaszcz/';

const stages = [
  {
    id: 'intro',
    navLabel: 'Intro',
    step: '01',
    kicker: 'Intro',
    title: (
      <>
        Where Strategy Meets Intelligence, Meaning <em>Emerges</em>.
      </>
    ),
    summary:
      'I partner with leaders to align capital, data, and technology, building systems that predict, adapt, and compound value.',
    cta: "Let's create convergence",
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
    kicker: 'Approach',
    title: (
      <>
        Intelligence Becomes Useful When It Changes the <em>Loop</em>.
      </>
    ),
    summary:
      'The work is not more tools. It is a tighter relationship between signal, judgment, workflow, and business action.',
    cta: 'See the proof',
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
    kicker: 'Impact',
    title: (
      <>
        The Signal Is Proven By Business <em>Movement</em>.
      </>
    ),
    summary:
      'My best work changes how a company sees customers, controls cost, allocates attention, and acts before the obvious moment.',
    cta: 'Discuss fit',
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
    id: 'partner',
    navLabel: 'Fit',
    step: '04',
    kicker: 'Fit',
    title: (
      <>
        Builder, Challenger, Operator. One <em>Thread</em>.
      </>
    ),
    summary:
      'I am looking for an in-house role where practical systems, direct judgment, economic clarity, and high agency can compound.',
    cta: 'Start a conversation',
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
  { value: '0-1', label: 'Finance functions', text: 'Built startup finance foundations, models, reporting, and controls' },
  { value: '$100M+', label: 'Spend visibility', text: 'Built budgets, reporting, and tools that help businesses excel' },
];

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

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
    <line className="geo-axis" x1="0" y1="362" x2="740" y2="362" />
    <line className="geo-axis" x1="250" y1="0" x2="250" y2="720" />
    <circle className="geo-center" cx="250" cy="362" r="6" />
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
    <circle className="geo-glow" cx="250" cy="362" r="58" />
  </svg>
);

const Website = () => {
  const [activeStage, setActiveStage] = useState(0);
  const activeStageRef = useRef(0);
  const navigationLockRef = useRef(0);
  const touchStartRef = useRef(null);
  const mobileSwipeRef = useRef(null);
  const lastStageIndex = stages.length - 1;
  const active = stages[activeStage];

  const navigateToStage = (nextIndex, options = {}) => {
    const { lockNavigation = false } = options;
    const clampedIndex = clamp(nextIndex, 0, lastStageIndex);

    if (lockNavigation) {
      navigationLockRef.current = Date.now();
    }

    activeStageRef.current = clampedIndex;
    setActiveStage(clampedIndex);
  };

  useEffect(() => {
    activeStageRef.current = activeStage;
    window.requestAnimationFrame(() => {
      document.querySelector('.stage-panel.is-active')?.scrollTo({ top: 0 });
    });
  }, [activeStage]);

  useEffect(() => {
    const canNavigate = () => Date.now() - navigationLockRef.current > 760;
    const isScrollLayout = () =>
      window.matchMedia('(max-width: 720px), (max-width: 1080px) and (max-height: 560px)').matches;
    const goToStage = (nextIndex) => {
      const clampedIndex = clamp(nextIndex, 0, lastStageIndex);

      navigationLockRef.current = Date.now();
      activeStageRef.current = clampedIndex;
      setActiveStage(clampedIndex);
    };

    const isFormField = (target) => {
      if (!(target instanceof HTMLElement)) {
        return false;
      }

      return target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName);
    };

    const handleKeyDown = (event) => {
      if (isFormField(event.target)) {
        return;
      }

      if (event.key === 'Home') {
        event.preventDefault();
        goToStage(0);
        return;
      }

      if (event.key === 'End') {
        event.preventDefault();
        goToStage(lastStageIndex);
        return;
      }

      if (['ArrowDown', 'ArrowRight', 'PageDown', ' '].includes(event.key)) {
        event.preventDefault();
        if (canNavigate()) {
          goToStage(activeStageRef.current + 1);
        }
        return;
      }

      if (['ArrowUp', 'ArrowLeft', 'PageUp'].includes(event.key)) {
        event.preventDefault();
        if (canNavigate()) {
          goToStage(activeStageRef.current - 1);
        }
      }
    };

    const handleWheel = (event) => {
      if (isScrollLayout()) {
        return;
      }

      if (Math.abs(event.deltaY) < 36) {
        return;
      }

      event.preventDefault();

      if (canNavigate()) {
        goToStage(activeStageRef.current + (event.deltaY > 0 ? 1 : -1));
      }
    };

    const handleTouchStart = (event) => {
      if (isScrollLayout()) {
        return;
      }

      touchStartRef.current = event.touches[0]?.clientY ?? null;
    };

    const handleTouchEnd = (event) => {
      if (isScrollLayout()) {
        touchStartRef.current = null;
        return;
      }

      if (touchStartRef.current === null) {
        return;
      }

      const touchEndY = event.changedTouches[0]?.clientY;
      const delta = touchStartRef.current - touchEndY;
      touchStartRef.current = null;

      if (typeof touchEndY !== 'number' || Math.abs(delta) < 56 || !canNavigate()) {
        return;
      }

      goToStage(activeStageRef.current + (delta > 0 ? 1 : -1));
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [lastStageIndex]);

  const handleMobileSwipeStart = (event) => {
    if (!window.matchMedia('(max-width: 720px), (max-width: 1080px) and (max-height: 560px)').matches) {
      return;
    }

    const touch = event.touches[0];

    if (!touch) {
      return;
    }

    mobileSwipeRef.current = {
      x: touch.clientX,
      y: touch.clientY,
    };
  };

  const handleMobileSwipeEnd = (event) => {
    if (!mobileSwipeRef.current) {
      return;
    }

    const touch = event.changedTouches[0];
    const start = mobileSwipeRef.current;
    mobileSwipeRef.current = null;

    if (!touch) {
      return;
    }

    const deltaX = start.x - touch.clientX;
    const deltaY = start.y - touch.clientY;
    const isHorizontalSwipe = Math.abs(deltaX) > 54 && Math.abs(deltaX) > Math.abs(deltaY) * 1.25;

    if (!isHorizontalSwipe) {
      return;
    }

    navigateToStage(activeStageRef.current + (deltaX > 0 ? 1 : -1), { lockNavigation: true });
  };

  return (
    <div className="site-shell" data-stage={activeStage}>
      <p className="stage-announcer" aria-live="polite">
        Showing {active.navLabel}
      </p>

      <aside className="side-rail" aria-label="Site navigation">
        <a className="rail-logo" href="#top" aria-label="Matt Chrzaszcz home">
          <img src={`${process.env.PUBLIC_URL}/refined-logo.png`} alt="" />
        </a>

        <nav className="rail-nav" aria-label="Stage navigation">
          {stages.map((stage, index) => (
            <button
              key={stage.id}
              type="button"
              className={`rail-nav-link ${index === activeStage ? 'is-active' : ''}`}
              onClick={() => navigateToStage(index, { lockNavigation: true })}
            >
              <span>{stage.step}</span>
              <strong>{stage.navLabel}</strong>
            </button>
          ))}
        </nav>
      </aside>

      <main className="viewport-shell" id="top">
        <header className="site-header">
          <img
            className="mobile-header-logo"
            src={`${process.env.PUBLIC_URL}/refined-logo.png`}
            alt=""
          />
          <a className="brand-lockup" href="#top">
            <span>Matt Chrzaszcz</span>
            <small>Strategic Finance. Analytics. Applied AI.</small>
          </a>

          <div className="stage-control" aria-label="Stage controls">
            <p>
              <span>Stage</span>
              <strong>{active.step}</strong>
              <small>/ 04</small>
            </p>
            <div className="stage-dots">
              {stages.map((stage, index) => (
                <button
                  key={stage.id}
                  type="button"
                  className={`stage-dot ${index === activeStage ? 'is-active' : ''}`}
                  onClick={() => navigateToStage(index, { lockNavigation: true })}
                  aria-label={`Go to ${stage.navLabel}`}
                  aria-pressed={index === activeStage}
                />
              ))}
            </div>
          </div>
        </header>

        <FieldGeometry />

        <section className="portrait-panel" aria-label="Portrait of Matt Chrzaszcz">
          <div className="portrait-frame">
            <img
              className="portrait-image"
              src={`${process.env.PUBLIC_URL}/refined-portrait.png`}
              alt="Portrait of Matt Chrzaszcz"
            />
            <div className="portrait-caption">
              <span>Matt Chrzaszcz</span>
              <p>Strategic Finance, Analytics and Applied AI Operator</p>
              <div />
            </div>
          </div>
        </section>

        <div
          className="stage-deck"
          onTouchStart={handleMobileSwipeStart}
          onTouchEnd={handleMobileSwipeEnd}
        >
          {stages.map((stage, index) => {
            let stageState = 'is-after';

            if (index === activeStage) {
              stageState = 'is-active';
            } else if (index < activeStage) {
              stageState = 'is-before';
            }

            return (
              <section
                key={stage.id}
                className={`stage-panel ${stageState}`}
                aria-hidden={index !== activeStage}
              >
                <div className="stage-copy">
                  <p className="stage-kicker">{stage.kicker}</p>
                  {index === 0 ? (
                    <h1 className="stage-title">{stage.title}</h1>
                  ) : (
                    <h2 className="stage-title">{stage.title}</h2>
                  )}
                  <p className="stage-summary">{stage.summary}</p>

                  <div className="proof-list">
                    {stage.points.map((point) => (
                      <article className="proof-row" key={`${stage.id}-${point.id}`}>
                        <p className="proof-id">{point.id}</p>
                        <h3>{point.label}</h3>
                        <p>{point.text}</p>
                      </article>
                    ))}
                  </div>

                  <div className="stage-actions">
                    <a className="button-primary" href={`mailto:${contactEmail}`}>
                      <span>{stage.cta}</span>
                      <ArrowUpRight size={18} strokeWidth={1.6} />
                    </a>
                    <a
                      className="button-icon"
                      href={linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit LinkedIn profile"
                    >
                      <Linkedin size={18} strokeWidth={1.7} />
                    </a>
                    <a className="button-icon" href={`mailto:${contactEmail}`} aria-label="Email Matt">
                      <Mail size={18} strokeWidth={1.7} />
                    </a>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        <footer className="metric-strip" aria-label="Selected career signals">
          {metrics.map((metric) => (
            <article className="metric-item" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
              <p>{metric.text}</p>
            </article>
          ))}
        </footer>
      </main>
    </div>
  );
};

export default Website;
