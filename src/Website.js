import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Linkedin, Mail } from 'lucide-react';

const stageMeta = [
  { id: 'thesis', navLabel: 'Thesis', step: '01' },
  { id: 'stack', navLabel: 'Stack', step: '02' },
  { id: 'proof', navLabel: 'Proof', step: '03' },
  { id: 'fit', navLabel: 'Fit', step: '04' },
];

const leverageAreas = [
  {
    id: '01',
    title: 'Built the operating stack',
    body: 'Launched my own server and stood up n8n, Metabase, Airflow, dbt, and the SQL infrastructure behind datamarts used for analysis, applications, BI, data science, and marketing.',
  },
  {
    id: '02',
    title: 'Shipped internal AI systems',
    body: 'Built Lumina AI and an AI-in-the-loop data science application, then connected workflow, permissions, scheduled tasks, and tool calls into Silver CRM for real operating use.',
  },
  {
    id: '03',
    title: 'Pushed business decisions that matter',
    body: 'Recommended and won approval for changes across incentives, performance reviews, customer support structure, product leadership, pricing logic, and affiliate economics.',
  },
];

const impactSignals = [
  {
    value: '12 months',
    label: 'Built infrastructure, automation, BI, orchestration, and AI tooling instead of stopping at slideware.',
  },
  {
    value: 'Own stack',
    label: 'Server, n8n, Metabase, Airflow, dbt, SQL datamarts, and the connective layer between them.',
  },
  {
    value: 'AI in workflow',
    label: 'Lumina AI, Silver CRM integrations, scheduled tasks, and an auto data science loop placed directly inside real operations.',
  },
  {
    value: 'Approved',
    label: 'Strategic recommendations on org design, incentives, pricing, customer support, product leadership, and acquisition economics were adopted.',
  },
];

const operatingSteps = [
  {
    id: '01',
    title: 'Build where the business is actually constrained',
    body: 'I focus on the operational bottleneck first, whether that lives in data infrastructure, workflow design, org shape, or commercial logic.',
  },
  {
    id: '02',
    title: 'Connect systems to decisions',
    body: 'The point is not tools in isolation. It is a tighter loop between information, judgment, and action for the people running the business.',
  },
  {
    id: '03',
    title: 'Challenge the economics when needed',
    body: 'If incentives, fee structures, affiliate deals, or team design are wrong, I will say it and help redesign them around real outcomes.',
  },
];

const contactEmail = 'matthew.chrzaszcz@gmail.com';
const linkedinUrl = 'https://www.linkedin.com/in/chrzaszcz/';

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const Website = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [hasNavigated, setHasNavigated] = useState(false);
  const activeStageRef = useRef(0);
  const navigationLockRef = useRef(0);
  const touchStartRef = useRef(null);
  const lastStageIndex = stageMeta.length - 1;

  const navigateToStage = (nextIndex, options = {}) => {
    const { lockNavigation = false, markNavigated = false } = options;
    const clampedIndex = clamp(nextIndex, 0, lastStageIndex);

    if (lockNavigation) {
      navigationLockRef.current = Date.now();
    }

    if (markNavigated) {
      setHasNavigated(true);
    }

    activeStageRef.current = clampedIndex;
    setActiveStage(clampedIndex);
  };

  useEffect(() => {
    activeStageRef.current = activeStage;
  }, [activeStage]);

  useEffect(() => {
    const canNavigate = () => Date.now() - navigationLockRef.current > 760;
    const goToStage = (nextIndex, markNavigated = false) => {
      const clampedIndex = clamp(nextIndex, 0, lastStageIndex);

      navigationLockRef.current = Date.now();

      if (markNavigated) {
        setHasNavigated(true);
      }

      activeStageRef.current = clampedIndex;
      setActiveStage(clampedIndex);
    };

    const isFormField = (target) => {
      if (!(target instanceof HTMLElement)) {
        return false;
      }

      const tagName = target.tagName;
      return target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(tagName);
    };

    const handleKeyDown = (event) => {
      if (isFormField(event.target)) {
        return;
      }

      if (event.key === 'Home') {
        event.preventDefault();
        goToStage(0, true);
        return;
      }

      if (event.key === 'End') {
        event.preventDefault();
        goToStage(lastStageIndex, true);
        return;
      }

      if (['ArrowDown', 'ArrowRight', 'PageDown', ' '].includes(event.key)) {
        event.preventDefault();
        setHasNavigated(true);

        if (canNavigate()) {
          goToStage(activeStageRef.current + 1);
        }

        return;
      }

      if (['ArrowUp', 'ArrowLeft', 'PageUp'].includes(event.key)) {
        event.preventDefault();
        setHasNavigated(true);

        if (canNavigate()) {
          goToStage(activeStageRef.current - 1);
        }
      }
    };

    const handleWheel = (event) => {
      event.preventDefault();

      if (Math.abs(event.deltaY) < 36) {
        return;
      }

      setHasNavigated(true);

      if (!canNavigate()) {
        return;
      }

      goToStage(activeStageRef.current + (event.deltaY > 0 ? 1 : -1));
    };

    const handleTouchStart = (event) => {
      touchStartRef.current = event.touches[0]?.clientY ?? null;
    };

    const handleTouchEnd = (event) => {
      if (touchStartRef.current === null) {
        return;
      }

      const touchEndY = event.changedTouches[0]?.clientY;

      if (typeof touchEndY !== 'number') {
        touchStartRef.current = null;
        return;
      }

      const delta = touchStartRef.current - touchEndY;
      touchStartRef.current = null;

      if (Math.abs(delta) < 56) {
        return;
      }

      setHasNavigated(true);

      if (!canNavigate()) {
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

  const renderStage = (stageId) => {
    if (stageId === 'thesis') {
      return (
        <div className="stage-grid hero-layout">
          <div className="stage-copy">
            <p className="stage-kicker">Finance, systems, and applied AI</p>
            <h1 className="stage-title">
              I build the systems that help a business see clearly and move earlier.
            </h1>
            <p className="stage-summary">
              In the last 12 months I have launched infrastructure, automation, BI, internal AI
              tools, and strategic operating changes that made it into the business.
            </p>
            <p className="stage-note">
              I&apos;m looking for full-time roles where finance is expected to shape decisions,
              challenge assumptions, and help the company build better systems.
            </p>
            <div className="stage-actions">
              <a className="button-primary" href={`mailto:${contactEmail}`}>
                Start a conversation
                <ArrowUpRight size={18} strokeWidth={2} />
              </a>
              <button
                type="button"
                className="button-secondary"
                onClick={() =>
                  navigateToStage(1, { lockNavigation: true, markNavigated: true })
                }
              >
                See the stack
              </button>
            </div>
          </div>

          <div className="atlas-shell" aria-hidden="true">
            <div className="atlas-veil atlas-veil-a" />
            <div className="atlas-veil atlas-veil-b" />
            <svg className="atlas-map" viewBox="0 0 720 720" role="presentation">
              <path
                className="atlas-path atlas-path-a"
                d="M84 196C177 170 255 176 332 230C403 279 474 296 562 290C621 286 669 272 690 260"
              />
              <path
                className="atlas-path atlas-path-b"
                d="M118 586C208 522 272 474 338 400C398 332 458 282 580 219"
              />
              <path
                className="atlas-path atlas-path-c"
                d="M180 90C238 152 274 211 332 314C386 410 468 487 618 551"
              />
              <path
                className="atlas-path atlas-path-d"
                d="M84 438C180 424 260 404 350 360C454 309 548 302 638 322"
              />

              <circle className="atlas-node atlas-node-a" cx="122" cy="196" r="9" />
              <circle className="atlas-node atlas-node-b" cx="190" cy="586" r="8" />
              <circle className="atlas-node atlas-node-c" cx="188" cy="96" r="7" />
              <circle className="atlas-node atlas-node-d" cx="350" cy="360" r="12" />
              <circle className="atlas-node atlas-node-e" cx="580" cy="219" r="10" />
              <circle className="atlas-node atlas-node-f" cx="638" cy="322" r="7" />
              <circle className="atlas-node atlas-node-g" cx="618" cy="551" r="8" />
            </svg>

            <div className="atlas-fragment atlas-fragment-a">
              <span>Automation</span>
              <strong>n8n and orchestration in production</strong>
            </div>
            <div className="atlas-fragment atlas-fragment-b">
              <span>Intelligence</span>
              <strong>Datamarts, BI, and AI tools with business context</strong>
            </div>
            <div className="atlas-fragment atlas-fragment-c">
              <span>Strategy</span>
              <strong>Recommendations that changed how the company operates</strong>
            </div>
            <div className="atlas-center">
              <span>Convergence</span>
              <strong>Systems, economics, and judgment aligned in one operator</strong>
            </div>
          </div>
        </div>
      );
    }

    if (stageId === 'stack') {
      return (
        <div className="stage-grid leverage-layout">
          <div className="stage-copy compact-copy">
            <p className="stage-kicker">What I actually built</p>
            <h2 className="stage-title">This is not AI enthusiasm. It is shipped operating infrastructure.</h2>
            <p className="stage-summary">
              I didn&apos;t stop at prompting. I put infrastructure, orchestration, BI, AI tooling,
              and workflow into the hands of the teams using them.
            </p>
          </div>

          <div className="stage-list">
            {leverageAreas.map((area) => (
              <article className="stage-row" key={area.id}>
                <p className="stage-row-id">{area.id}</p>
                <h3>{area.title}</h3>
                <p>{area.body}</p>
              </article>
            ))}
          </div>
        </div>
      );
    }

    if (stageId === 'proof') {
      return (
        <div className="stage-grid signals-layout">
          <div className="stage-copy compact-copy">
            <p className="stage-kicker">Proof of range</p>
            <h2 className="stage-title">The pattern is simple: build the system, then improve the business through it.</h2>
            <p className="stage-summary">
              The work spans technical delivery and commercial judgment, because the bottleneck is
              rarely confined to one function.
            </p>
          </div>

          <div className="signal-stack">
            {impactSignals.map((signal) => (
              <article className="signal-row" key={`${signal.value}-${signal.label}`}>
                <p className="signal-value">{signal.value}</p>
                <p className="signal-copy">{signal.label}</p>
              </article>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="stage-grid fit-layout">
        <div className="stage-copy compact-copy">
          <p className="stage-kicker">How I operate</p>
          <h2 className="stage-title">
            The best fit is a company that wants one person who can build and challenge.
          </h2>
          <div className="operating-list">
            {operatingSteps.map((step) => (
              <article className="operating-row" key={step.id}>
                <p className="stage-row-id">{step.id}</p>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="contact-slab">
          <p className="contact-kicker">Open to full-time opportunities</p>
          <h3>Bring me in where AI, data, finance, and commercial judgment need one owner.</h3>
          <p className="contact-copy">
            I&apos;m looking for an in-house role where I can keep building systems, influence the
            operating model, and raise the quality of decisions across the business.
          </p>
          <div className="stage-actions contact-actions">
            <a className="button-primary contact-primary" href={`mailto:${contactEmail}`}>
              <Mail size={18} strokeWidth={2} />
              Email
            </a>
            <a
              className="button-secondary contact-secondary"
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} strokeWidth={2} />
              LinkedIn
            </a>
          </div>
          <p className="contact-meta">Email or LinkedIn are still the fastest paths in.</p>
        </aside>
      </div>
    );
  };

  return (
    <div className="site-shell" data-stage={activeStage} data-has-navigated={hasNavigated}>
      <header className="topbar">
        <div className="topbar-inner">
          <a className="topbar-brand" href="#top">
            MATT CHRZASZCZ
          </a>

          <nav className="topbar-nav" aria-label="Stage navigation">
            {stageMeta.map((stage, index) => (
              <button
                key={stage.id}
                type="button"
                className={`topbar-nav-link ${index === activeStage ? 'is-active' : ''}`}
                onClick={() =>
                  navigateToStage(index, { lockNavigation: true, markNavigated: true })
                }
              >
                <span className="topbar-nav-step">{stage.step}</span>
                <span className="topbar-nav-label">{stage.navLabel}</span>
              </button>
            ))}
          </nav>

          <div className="topbar-actions">
            <a className="topbar-icon" href={`mailto:${contactEmail}`} aria-label="Email Matt">
              <Mail size={18} strokeWidth={2} />
            </a>
            <a
              className="topbar-icon"
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn profile"
            >
              <Linkedin size={18} strokeWidth={2} />
            </a>
            <p className="topbar-status">
              {stageMeta[activeStage].step} / {stageMeta.length}
            </p>
          </div>
        </div>
      </header>

      <main className="viewport-shell" id="top">
        <p className="stage-announcer" aria-live="polite">
          Showing {stageMeta[activeStage].navLabel}
        </p>

        <div className="stage-deck">
          {stageMeta.map((stage, index) => {
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
                {renderStage(stage.id)}
              </section>
            );
          })}
        </div>

        <div className="stage-footer">
          {!hasNavigated && (
            <p className="stage-instruction">Use wheel, swipe, or arrow keys to move through the site.</p>
          )}
          <div className="stage-dots" aria-label="Jump to a screen">
            {stageMeta.map((stage, index) => (
              <button
                key={stage.id}
                type="button"
                className={`stage-dot ${index === activeStage ? 'is-active' : ''}`}
                onClick={() =>
                  navigateToStage(index, { lockNavigation: true, markNavigated: true })
                }
                aria-label={`Go to ${stage.navLabel}`}
                aria-pressed={index === activeStage}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Website;
