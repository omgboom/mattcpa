import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Linkedin, Mail } from 'lucide-react';

const contactEmail = 'matthew.chrzaszcz@gmail.com';
const linkedinUrl = 'https://www.linkedin.com/in/chrzaszcz/';

const stages = [
  {
    id: 'thesis',
    navLabel: 'Thesis',
    step: '01',
    kicker: 'Strategy, systems, applied AI',
    title: 'I turn signal into operating leverage.',
    summary:
      'Strategic finance, predictive BI, and practical AI for clearer decisions and earlier action.',
    proofLabel: 'Convergent practice',
    artifactTitle: 'Judgment connected to machinery',
    artifactText:
      'The work sits where finance, data, automation, and commercial judgment begin to shape one another.',
    primaryAction: {
      label: 'Start a conversation',
      href: `mailto:${contactEmail}`,
    },
    secondaryAction: {
      label: 'See the stack',
      stageIndex: 1,
    },
    details: [
      {
        id: '01',
        label: 'Strategy',
        text: 'Recommendations adopted across incentives, pricing, org design, and operating economics.',
      },
      {
        id: '02',
        label: 'AI systems',
        text: 'Secure data-connected LLM workflows, AI-assisted operations, and an AI-in-the-loop auto data scientist.',
      },
      {
        id: '03',
        label: 'Predictive BI',
        text: 'Datamarts, Metabase, and production-grade predictive models that improve visibility and action.',
      },
      {
        id: '04',
        label: 'Automation',
        text: 'n8n orchestration and workflow automation shipped into real operating use.',
      },
    ],
  },
  {
    id: 'stack',
    navLabel: 'Stack',
    step: '02',
    kicker: 'What has actually shipped',
    title: 'Not AI enthusiasm. Operating infrastructure.',
    summary:
      'I put infrastructure, orchestration, BI, AI tooling, and workflow into the hands of teams using them in real operating loops.',
    proofLabel: 'Built layer by layer',
    artifactTitle: 'From tools to operating loops',
    artifactText:
      'Infrastructure becomes useful when it shortens the distance between a signal and the person who can act on it.',
    details: [
      {
        id: '01',
        label: 'Built the operating stack',
        text: 'Launched my own server and stood up n8n, Metabase, Airflow, dbt, and SQL infrastructure behind datamarts used for analysis, applications, BI, data science, and marketing.',
      },
      {
        id: '02',
        label: 'Shipped internal AI systems',
        text: 'Built a secure data-connected LLM workflow and an AI-in-the-loop data science application, then connected permissions, scheduled tasks, and tool calls into CRM workflows.',
      },
      {
        id: '03',
        label: 'Changed the operating model',
        text: 'Recommended and won approval for changes across incentives, performance reviews, support structure, product leadership, pricing logic, and affiliate economics.',
      },
    ],
  },
  {
    id: 'proof',
    navLabel: 'Outcomes',
    step: '03',
    kicker: 'Selected outcomes',
    title: 'The proof is a business that moves differently.',
    summary:
      'The pattern is consistent: find the constraint, design the mechanism, and improve the outcome with enough precision to matter.',
    proofLabel: 'Measured movement',
    artifactTitle: 'Impact, not theater',
    artifactText:
      'The signal resolves when systems change behavior, save money, surface risk, or pull attention toward the right customer at the right time.',
    details: [
      {
        id: '01',
        label: 'Revenue focus',
        text: 'Built a CRM-connected AI workflow for the VIP team, which manages roughly 40% of revenue through the top 10% of customers.',
      },
      {
        id: '02',
        label: 'Earlier action',
        text: 'Developed predictive models, datamarts, and production BI that improved acquisition and retention marketing decisions.',
      },
      {
        id: '03',
        label: 'Operating discipline',
        text: 'Led budgeting and cost control contributing to a 15% reduction in operating expenses and a 50% increase in operating profit versus fiscal 2023.',
      },
      {
        id: '04',
        label: 'Recovered economics',
        text: 'Found and corrected payment-provider overcharges, recovering $0.5M and securing another $1.5M in savings through lower ongoing fees.',
      },
    ],
  },
  {
    id: 'fit',
    navLabel: 'Fit',
    step: '04',
    kicker: 'How I operate',
    title: 'Best used where builder and challenger are the same person.',
    summary:
      'I am looking for an in-house role where I can keep building systems, influence the operating model, and raise the quality of decisions across the business.',
    proofLabel: 'Where the alignment holds',
    artifactTitle: 'High agency, low theater',
    artifactText:
      'The right environment values practical systems, direct judgment, economic clarity, and the patience to make better work compound.',
    primaryAction: {
      label: 'Email',
      href: `mailto:${contactEmail}`,
      icon: 'mail',
    },
    secondaryAction: {
      label: 'LinkedIn',
      href: linkedinUrl,
      icon: 'linkedin',
    },
    details: [
      {
        id: '01',
        label: 'Build where constrained',
        text: 'I focus on the operational bottleneck first, whether that lives in data infrastructure, workflow design, org shape, or commercial logic.',
      },
      {
        id: '02',
        label: 'Connect systems to decisions',
        text: 'The point is not tools in isolation. It is a tighter loop between information, judgment, and action for the people running the business.',
      },
      {
        id: '03',
        label: 'Challenge the economics',
        text: 'If incentives, fee structures, affiliate deals, or team design are wrong, I will say it and help redesign them around real outcomes.',
      },
    ],
  },
];

const mapPaths = [
  'M28 352C114 288 179 316 251 248C317 186 384 172 454 112',
  'M38 160C116 194 166 182 230 136C297 88 360 88 438 142',
  'M72 438C134 360 190 386 252 318C310 254 366 252 454 298',
  'M112 96C176 158 208 226 258 260C324 306 388 342 442 418',
];

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const renderActionIcon = (icon) => {
  if (icon === 'mail') {
    return <Mail size={18} strokeWidth={2} />;
  }

  if (icon === 'linkedin') {
    return <Linkedin size={18} strokeWidth={2} />;
  }

  return <ArrowUpRight size={18} strokeWidth={2} />;
};

const ConvergenceMap = ({ stageIndex }) => (
  <svg
    className="convergence-map"
    viewBox="0 0 480 520"
    role="img"
    aria-label="Abstract paths converging across the page"
  >
    <defs>
      <linearGradient id="threadGradient" x1="24" y1="80" x2="456" y2="444">
        <stop offset="0%" stopColor="#efe3d0" stopOpacity="0.18" />
        <stop offset="58%" stopColor="#b98962" stopOpacity="0.58" />
        <stop offset="100%" stopColor="#74332f" stopOpacity="0.46" />
      </linearGradient>
    </defs>
    {mapPaths.map((path, index) => (
      <path
        key={path}
        className={`thread-path ${index === stageIndex ? 'is-emphasis' : ''}`}
        d={path}
      />
    ))}
    <circle className="map-node node-one" cx="252" cy="260" r="4.5" />
    <circle className="map-node node-two" cx="454" cy="112" r="3.5" />
    <circle className="map-node node-three" cx="438" cy="142" r="3.5" />
    <circle className="map-node node-four" cx="454" cy="298" r="3.5" />
    <circle className="map-node node-five" cx="442" cy="418" r="3.5" />
  </svg>
);

const VisualArtifact = ({ stage, stageIndex }) => (
  <aside className="visual-artifact" aria-label={`${stage.navLabel} visual summary`}>
    <ConvergenceMap stageIndex={stageIndex} />
    <figure className="portrait-artifact">
      <div className="portrait-image-wrap">
        <img src={`${process.env.PUBLIC_URL}/matt-photo.jpg`} alt="Portrait of Matt Chrzaszcz" />
      </div>
      <figcaption>
        <span>{stage.proofLabel}</span>
        <strong>{stage.artifactTitle}</strong>
        <p>{stage.artifactText}</p>
      </figcaption>
    </figure>
  </aside>
);

const Website = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [hasNavigated, setHasNavigated] = useState(false);
  const activeStageRef = useRef(0);
  const navigationLockRef = useRef(0);
  const touchStartRef = useRef(null);
  const lastStageIndex = stages.length - 1;

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
    window.requestAnimationFrame(() => {
      const activePanel = document.querySelector('.stage-panel.is-active');
      activePanel?.scrollTo({ top: 0 });
      activePanel?.querySelector('.detail-scroll')?.scrollTo({ top: 0 });
    });
  }, [activeStage]);

  useEffect(() => {
    const canNavigate = () => Date.now() - navigationLockRef.current > 760;
    const getActivePanel = () => document.querySelector('.stage-panel.is-active');
    const canScrollElement = (element, direction) => {
      if (!element) {
        return false;
      }

      const overflowY = window.getComputedStyle(element).overflowY;

      if (!['auto', 'scroll'].includes(overflowY)) {
        return false;
      }

      if (direction > 0) {
        return element.scrollTop + element.clientHeight < element.scrollHeight - 8;
      }

      return element.scrollTop > 8;
    };
    const getActiveScrollContainer = (direction) => {
      const panel = getActivePanel();
      const detailScroll = panel?.querySelector('.detail-scroll');

      if (canScrollElement(detailScroll, direction)) {
        return detailScroll;
      }

      if (canScrollElement(panel, direction)) {
        return panel;
      }

      return null;
    };
    const canScrollActivePanel = (direction) => Boolean(getActiveScrollContainer(direction));
    const scrollActivePanel = (direction) => {
      const scrollContainer = getActiveScrollContainer(direction);

      if (!scrollContainer) {
        return;
      }

      scrollContainer.scrollBy({
        top: direction * Math.min(220, Math.max(120, scrollContainer.clientHeight * 0.32)),
        behavior: 'smooth',
      });
    };
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

      if (['ArrowDown', 'PageDown', ' '].includes(event.key)) {
        event.preventDefault();
        setHasNavigated(true);

        if (canScrollActivePanel(1)) {
          scrollActivePanel(1);
          return;
        }

        if (canNavigate()) {
          goToStage(activeStageRef.current + 1);
        }

        return;
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        setHasNavigated(true);

        if (canNavigate()) {
          goToStage(activeStageRef.current + 1);
        }

        return;
      }

      if (['ArrowUp', 'PageUp'].includes(event.key)) {
        event.preventDefault();
        setHasNavigated(true);

        if (canScrollActivePanel(-1)) {
          scrollActivePanel(-1);
          return;
        }

        if (canNavigate()) {
          goToStage(activeStageRef.current - 1);
        }

        return;
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        setHasNavigated(true);

        if (canNavigate()) {
          goToStage(activeStageRef.current - 1);
        }
      }
    };

    const handleWheel = (event) => {
      if (Math.abs(event.deltaY) < 36) {
        return;
      }

      setHasNavigated(true);

      if (canScrollActivePanel(event.deltaY)) {
        return;
      }

      event.preventDefault();

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

      if (canScrollActivePanel(delta)) {
        return;
      }

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

  const renderStage = (stage, index) => (
    <div className="stage-composition">
      <div className="stage-copy">
        <p className="stage-kicker">{stage.kicker}</p>
        {index === 0 ? (
          <h1 className="stage-title">{stage.title}</h1>
        ) : (
          <h2 className="stage-title">{stage.title}</h2>
        )}
        <p className="stage-summary">{stage.summary}</p>

        {(stage.primaryAction || stage.secondaryAction) && (
          <div className="stage-actions">
            {stage.primaryAction && (
              <a
                className="button-primary"
                href={stage.primaryAction.href}
                target={stage.primaryAction.href?.startsWith('http') ? '_blank' : undefined}
                rel={stage.primaryAction.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {renderActionIcon(stage.primaryAction.icon)}
                <span>{stage.primaryAction.label}</span>
              </a>
            )}
            {stage.secondaryAction?.href && (
              <a
                className="button-secondary"
                href={stage.secondaryAction.href}
                target={stage.secondaryAction.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  stage.secondaryAction.href.startsWith('http') ? 'noopener noreferrer' : undefined
                }
              >
                {renderActionIcon(stage.secondaryAction.icon)}
                <span>{stage.secondaryAction.label}</span>
              </a>
            )}
            {typeof stage.secondaryAction?.stageIndex === 'number' && (
              <button
                type="button"
                className="button-secondary"
                onClick={() =>
                  navigateToStage(stage.secondaryAction.stageIndex, {
                    lockNavigation: true,
                    markNavigated: true,
                  })
                }
              >
                <span>{stage.secondaryAction.label}</span>
                <ArrowUpRight size={18} strokeWidth={2} />
              </button>
            )}
          </div>
        )}
      </div>

      <VisualArtifact stage={stage} stageIndex={index} />

      <div className="detail-scroll" aria-label={`${stage.navLabel} details`}>
        <div className="proof-rail">
          {stage.details.map((detail) => (
            <article className="proof-row" key={`${stage.id}-${detail.id}`}>
              <p className="proof-id">{detail.id}</p>
              <div>
                <h3>{detail.label}</h3>
                <p>{detail.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="site-shell" data-stage={activeStage} data-has-navigated={hasNavigated}>
      <header className="topbar">
        <div className="topbar-inner">
          <a className="topbar-brand" href="#top" aria-label="Matt Chrzaszcz home">
            <span>Matt Chrzaszcz</span>
            <small>Strategic finance / AI systems</small>
          </a>

          <nav className="topbar-nav" aria-label="Stage navigation">
            {stages.map((stage, index) => (
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
          Showing {stages[activeStage].navLabel}
        </p>

        <div className="ambient-thread" aria-hidden="true" />
        <div className="stage-deck">
          <div className="vertical-signature" aria-hidden="true">
            <span>Yuanfen</span>
            <span>Alignment field</span>
          </div>

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
                {renderStage(stage, index)}
              </section>
            );
          })}
        </div>

        <div className="stage-footer">
          <div className="stage-dots" aria-label="Jump to a screen">
            {stages.map((stage, index) => (
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
