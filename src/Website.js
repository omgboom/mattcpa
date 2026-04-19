import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Linkedin, Mail } from 'lucide-react';

const stageMeta = [
  { id: 'thesis', navLabel: 'Thesis', step: '01' },
  { id: 'leverage', navLabel: 'Leverage', step: '02' },
  { id: 'signals', navLabel: 'Signals', step: '03' },
  { id: 'fit', navLabel: 'Fit', step: '04' },
];

const leverageAreas = [
  {
    id: '01',
    title: 'Strategic finance leadership',
    body: 'Planning, forecasting, and executive partnership that turn ambiguity into a sharper operating cadence.',
  },
  {
    id: '02',
    title: 'Performance systems',
    body: 'Models, reporting logic, and business instrumentation that make the numbers easier to trust and act on.',
  },
  {
    id: '03',
    title: 'AI-native execution',
    body: 'Practical AI woven into workflow design, analysis, and team leverage without losing judgment or accountability.',
  },
];

const impactSignals = [
  {
    value: '-15%',
    label: 'Reduced operating expenses through disciplined budgeting and cost control.',
  },
  {
    value: '+50%',
    label: 'Lifted operating profit versus the prior fiscal year with stronger financial stewardship.',
  },
  {
    value: '>$2M',
    label: 'Recovered and negotiated payment-provider savings through analytical problem-solving.',
  },
  {
    value: '$1M/mo',
    label: 'Cut marketing spend in a changing market without materially disrupting revenue.',
  },
];

const operatingSteps = [
  {
    id: '01',
    title: 'See the pattern',
    body: 'Map where planning, reporting, or decision quality is breaking down before prescribing solutions.',
  },
  {
    id: '02',
    title: 'Build the mechanism',
    body: 'Create systems, models, and operating rhythm that reduce noise and make better action easier.',
  },
  {
    id: '03',
    title: 'Make leverage durable',
    body: 'Use AI, process design, and team enablement so the gain compounds after the first win.',
  },
];

const contactEmail = 'matthew.chrzaszcz@gmail.com';
const linkedinUrl = 'https://www.linkedin.com/in/chrzaszcz/';

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const Website = () => {
  const [activeStage, setActiveStage] = useState(0);
  const activeStageRef = useRef(0);
  const navigationLockRef = useRef(0);
  const touchStartRef = useRef(null);
  const lastStageIndex = stageMeta.length - 1;

  const setStageIndex = (nextIndex, lockNavigation = false) => {
    const clampedIndex = clamp(nextIndex, 0, lastStageIndex);

    if (lockNavigation) {
      navigationLockRef.current = Date.now();
    }

    activeStageRef.current = clampedIndex;
    setActiveStage(clampedIndex);
  };

  const stepStage = (direction, lockNavigation = false) => {
    setStageIndex(activeStageRef.current + direction, lockNavigation);
  };

  useEffect(() => {
    activeStageRef.current = activeStage;
  }, [activeStage]);

  useEffect(() => {
    const canNavigate = () => Date.now() - navigationLockRef.current > 760;
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

      const tagName = target.tagName;
      return target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(tagName);
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
      event.preventDefault();

      if (!canNavigate() || Math.abs(event.deltaY) < 36) {
        return;
      }

      goToStage(activeStageRef.current + (event.deltaY > 0 ? 1 : -1));
    };

    const handleTouchStart = (event) => {
      touchStartRef.current = event.touches[0]?.clientY ?? null;
    };

    const handleTouchEnd = (event) => {
      if (!canNavigate() || touchStartRef.current === null) {
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
            <p className="stage-kicker">Strategic finance leadership</p>
            <h1 className="stage-title">
              Some roles are a fit on paper. The right one creates momentum.
            </h1>
            <p className="stage-summary">
              I lead where FP&amp;A, systems thinking, and AI-native execution converge, helping
              teams make better decisions earlier.
            </p>
            <p className="stage-note">
              I&apos;m focused on full-time opportunities where finance is expected to shape the
              business, not simply report on it.
            </p>
            <div className="stage-actions">
              <a className="button-primary" href={`mailto:${contactEmail}`}>
                Start a conversation
                <ArrowUpRight size={18} strokeWidth={2} />
              </a>
              <button
                type="button"
                className="button-secondary"
                onClick={() => setStageIndex(1, true)}
              >
                See how I lead
              </button>
            </div>
          </div>

          <div className="atlas-shell" aria-hidden="true">
            <div className="atlas-halo atlas-halo-a" />
            <div className="atlas-halo atlas-halo-b" />
            <svg className="atlas-map" viewBox="0 0 720 720" role="presentation">
              <path
                className="atlas-path atlas-path-a"
                d="M94 188C173 161 244 162 309 208C370 251 442 273 545 266C602 262 653 248 682 235"
              />
              <path
                className="atlas-path atlas-path-b"
                d="M128 575C216 507 282 462 334 400C385 339 433 294 547 236"
              />
              <path
                className="atlas-path atlas-path-c"
                d="M178 93C232 148 271 214 326 313C374 400 453 476 611 552"
              />
              <path
                className="atlas-path atlas-path-d"
                d="M94 440C182 422 263 406 346 360C434 312 510 301 628 331"
              />

              <circle className="atlas-node atlas-node-a" cx="128" cy="188" r="10" />
              <circle className="atlas-node atlas-node-b" cx="184" cy="582" r="8" />
              <circle className="atlas-node atlas-node-c" cx="186" cy="102" r="7" />
              <circle className="atlas-node atlas-node-d" cx="329" cy="359" r="12" />
              <circle className="atlas-node atlas-node-e" cx="548" cy="236" r="11" />
              <circle className="atlas-node atlas-node-f" cx="625" cy="334" r="7" />
              <circle className="atlas-node atlas-node-g" cx="611" cy="552" r="9" />
            </svg>

            <div className="atlas-fragment atlas-fragment-a">
              <span>Signal</span>
              <strong>Clearer visibility</strong>
            </div>
            <div className="atlas-fragment atlas-fragment-b">
              <span>Structure</span>
              <strong>Better operating rhythm</strong>
            </div>
            <div className="atlas-fragment atlas-fragment-c">
              <span>Timing</span>
              <strong>Faster strategic response</strong>
            </div>
            <div className="atlas-center">
              <span>Convergence</span>
              <strong>Decision quality that compounds</strong>
            </div>
          </div>
        </div>
      );
    }

    if (stageId === 'leverage') {
      return (
        <div className="stage-grid leverage-layout">
          <div className="stage-copy compact-copy">
            <p className="stage-kicker">How I lead</p>
            <h2 className="stage-title">I build finance functions people can actually move with.</h2>
            <p className="stage-summary">
              The value is not advisory theatre. It is better rhythm, cleaner signal, and sharper
              choices inside the business.
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

    if (stageId === 'signals') {
      return (
        <div className="stage-grid signals-layout">
          <div className="stage-copy compact-copy">
            <p className="stage-kicker">Signals of impact</p>
            <h2 className="stage-title">Better models matter when they alter real decisions.</h2>
            <p className="stage-summary">
              Results earned across SaaS and operating businesses, with equal attention to cost
              discipline, commercial unlocks, and execution quality.
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
          <p className="stage-kicker">Working together</p>
          <h2 className="stage-title">
            The strongest fit is a team ready to treat finance as an operating partner.
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
          <h3>Bring me in when strategy, systems, and timing need to align.</h3>
          <p className="contact-copy">
            I&apos;m looking for an in-house role where I can own the cadence, improve decision
            quality, and help a business move with more intent.
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
          <p className="contact-meta">Email or LinkedIn are the fastest paths in.</p>
        </aside>
      </div>
    );
  };

  return (
    <div className="site-shell" data-stage={activeStage}>
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
                onClick={() => setStageIndex(index, true)}
              >
                {stage.navLabel}
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
        <div className="ambient-field" aria-hidden="true">
          <div className="ambient-glow ambient-glow-a" />
          <div className="ambient-glow ambient-glow-b" />
          <div className="ambient-thread ambient-thread-a" />
          <div className="ambient-thread ambient-thread-b" />
        </div>

        <aside className="stage-rail" aria-label="Stage progress">
          {stageMeta.map((stage, index) => (
            <button
              key={stage.id}
              type="button"
              className={`stage-rail-link ${index === activeStage ? 'is-active' : ''}`}
              onClick={() => setStageIndex(index, true)}
            >
              <span>{stage.step}</span>
              <strong>{stage.navLabel}</strong>
            </button>
          ))}
        </aside>

        <div className="stage-controls" aria-label="Next or previous screen">
          <button
            type="button"
            className="stage-arrow"
            onClick={() => stepStage(-1, true)}
            disabled={activeStage === 0}
            aria-label="Previous screen"
          >
            <ArrowLeft size={18} strokeWidth={2} />
          </button>
          <button
            type="button"
            className="stage-arrow"
            onClick={() => stepStage(1, true)}
            disabled={activeStage === stageMeta.length - 1}
            aria-label="Next screen"
          >
            <ArrowRight size={18} strokeWidth={2} />
          </button>
        </div>

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
          <p className="stage-instruction">Use wheel, swipe, or arrow keys to move through the site.</p>
          <div className="stage-dots" aria-hidden="true">
            {stageMeta.map((stage, index) => (
              <span key={stage.id} className={index === activeStage ? 'is-active' : ''} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Website;
