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

const thesisPoints = [
  {
    label: 'Automation',
    text: 'n8n flows and orchestration shipped into real operating work.',
  },
  {
    label: 'BI',
    text: 'Metabase, datamarts, and SQL infrastructure that teams can actually use.',
  },
  {
    label: 'AI systems',
    text: 'Lumina AI, Silver CRM tool calls, scheduled tasks, and AI in workflow.',
  },
  {
    label: 'Strategy',
    text: 'Approved recommendations that changed incentives, pricing, org design, and economics.',
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
        <div className="story-card">
          <div className="story-grid">
            <div className="story-lead">
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

            <div className="story-detail">
              <div className="bubble-grid">
                {thesisPoints.map((point) => (
                  <article className="bubble-point" key={point.label}>
                    <span>{point.label}</span>
                    <strong>{point.text}</strong>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (stageId === 'stack') {
      return (
        <div className="story-card">
          <div className="story-grid">
            <div className="story-lead">
              <p className="stage-kicker">What I actually built</p>
              <h2 className="stage-title">
                This is not AI enthusiasm. It is shipped operating infrastructure.
              </h2>
              <p className="stage-summary">
                I didn&apos;t stop at prompting. I put infrastructure, orchestration, BI, AI
                tooling, and workflow into the hands of the teams using them.
              </p>
            </div>

            <div className="story-detail">
              <div className="detail-stack">
                {leverageAreas.map((area) => (
                  <article className="detail-item" key={area.id}>
                    <p className="detail-id">{area.id}</p>
                    <div>
                      <h3>{area.title}</h3>
                      <p>{area.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (stageId === 'proof') {
      return (
        <div className="story-card">
          <div className="story-grid">
            <div className="story-lead">
              <p className="stage-kicker">Proof of range</p>
              <h2 className="stage-title">
                The pattern is simple: build the system, then improve the business through it.
              </h2>
              <p className="stage-summary">
                The work spans technical delivery and commercial judgment, because the bottleneck is
                rarely confined to one function.
              </p>
            </div>

            <div className="story-detail">
              <div className="detail-stack">
                {impactSignals.map((signal) => (
                  <article className="detail-item detail-item-signal" key={`${signal.value}-${signal.label}`}>
                    <p className="detail-value">{signal.value}</p>
                    <p>{signal.label}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="story-card">
        <div className="story-grid">
          <div className="story-lead">
            <p className="stage-kicker">How I operate</p>
            <h2 className="stage-title">
              The best fit is a company that wants one person who can build and challenge.
            </h2>
            <p className="stage-summary">
              I&apos;m looking for an in-house role where I can keep building systems, influence the
              operating model, and raise the quality of decisions across the business.
            </p>
            <p className="stage-note">Open to full-time opportunities.</p>
            <div className="stage-actions">
              <a className="button-primary" href={`mailto:${contactEmail}`}>
                <Mail size={18} strokeWidth={2} />
                Email
              </a>
              <a
                className="button-secondary"
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} strokeWidth={2} />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="story-detail">
            <div className="detail-stack">
              {operatingSteps.map((step) => (
                <article className="detail-item" key={step.id}>
                  <p className="detail-id">{step.id}</p>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
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
