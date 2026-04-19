import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Linkedin, Mail } from 'lucide-react';

const servicePillars = [
  {
    id: '01',
    title: 'Strategic Finance',
    body: 'Planning, forecasting, pricing, and executive decision support built for companies navigating growth and complexity.',
  },
  {
    id: '02',
    title: 'Analytics Systems',
    body: 'Models, reporting flows, and operating metrics designed to surface signal quickly and keep teams aligned on what matters.',
  },
  {
    id: '03',
    title: 'Applied AI',
    body: 'Practical AI workflows that reduce friction, accelerate analysis, and help finance teams solve harder business problems.',
  },
];

const outcomeSignals = [
  {
    value: '15%',
    label: 'Reduced operating expenses through disciplined budgeting and cost control.',
  },
  {
    value: '50%',
    label: 'Lifted operating profit versus the prior fiscal year with sharper financial stewardship.',
  },
  {
    value: '$2M+',
    label: 'Recovered and negotiated payment-provider savings through analytical problem-solving.',
  },
  {
    value: '$1M/mo',
    label: 'Cut marketing spend with limited revenue disruption during a changing market.',
  },
  {
    value: '$1M ARR',
    label: 'Unblocked an enterprise opportunity by identifying and clarifying the commercial case.',
  },
  {
    value: '3x',
    label: 'One operating lens across strategy, analytics, and AI instead of disconnected point solutions.',
  },
];

const operatingModel = [
  {
    title: 'Find the friction',
    body: 'We isolate where planning, reporting, or decision-making is slowing the business down.',
  },
  {
    title: 'Build the system',
    body: 'We design a finance and analytics layer that gives leaders cleaner visibility and faster response time.',
  },
  {
    title: 'Embed AI where it matters',
    body: 'We apply AI to workflows that create leverage, not noise, so the operating system keeps improving after launch.',
  },
];

const contactEmail = 'matthew.chrzaszcz@gmail.com';
const linkedinUrl = 'https://www.linkedin.com/in/chrzaszcz/';
const portraitUrl = `${process.env.PUBLIC_URL}/matt-photo.jpg`;

const Website = () => {
  const heroStageRef = useRef(null);

  useEffect(() => {
    const stage = heroStageRef.current;

    if (!stage) {
      return undefined;
    }

    let rafId = 0;
    let pointerX = 56;
    let pointerY = 42;

    const commitPointer = () => {
      stage.style.setProperty('--pointer-x', pointerX.toString());
      stage.style.setProperty('--pointer-y', pointerY.toString());
      rafId = 0;
    };

    const scheduleCommit = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(commitPointer);
      }
    };

    const handlePointerMove = (event) => {
      const rect = stage.getBoundingClientRect();
      pointerX = ((event.clientX - rect.left) / rect.width) * 100;
      pointerY = ((event.clientY - rect.top) / rect.height) * 100;
      scheduleCommit();
    };

    const resetPointer = () => {
      pointerX = 56;
      pointerY = 42;
      scheduleCommit();
    };

    stage.addEventListener('pointermove', handlePointerMove);
    stage.addEventListener('pointerleave', resetPointer);

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }

      stage.removeEventListener('pointermove', handlePointerMove);
      stage.removeEventListener('pointerleave', resetPointer);
    };
  }, []);

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="topbar-inner">
          <a className="topbar-brand" href="#top">
            MATT CHRZASZCZ
          </a>
          <nav className="topbar-nav" aria-label="Primary">
            <a href="#services">Services</a>
            <a href="#proof">Proof</a>
            <a href="#approach">Approach</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="hero-brand">MATT CHRZASZCZ</p>
              <p className="hero-context">Strategic Finance / Analytics / Applied AI</p>
              <h1 className="hero-title">Finance that moves at the speed of the business.</h1>
              <p className="hero-summary">
                I help leadership teams turn finance, analytics, and AI into a sharper operating
                system for growth.
              </p>
              <div className="hero-actions">
                <a className="button-primary" href={`mailto:${contactEmail}`}>
                  Start a Conversation
                  <ArrowUpRight size={18} strokeWidth={2} />
                </a>
                <a className="button-secondary" href="#proof">
                  View Outcomes
                </a>
              </div>
              <ul className="hero-tags" aria-label="Core focus areas">
                <li>Scenario Planning</li>
                <li>Performance Analytics</li>
                <li>AI Workflow Design</li>
              </ul>
            </div>

            <div className="hero-stage" ref={heroStageRef}>
              <div className="hero-orbit hero-orbit-a" aria-hidden="true" />
              <div className="hero-orbit hero-orbit-b" aria-hidden="true" />
              <div className="hero-orbit hero-orbit-c" aria-hidden="true" />

              <div className="portrait-frame">
                <div className="portrait-grid" aria-hidden="true" />
                <div className="portrait-glow" aria-hidden="true" />
                <img
                  src={portraitUrl}
                  alt="Portrait of Matt Chrzaszcz"
                  className="portrait-image"
                />
                <div className="portrait-scrim" aria-hidden="true" />
                <div className="portrait-caption">CPA / FP&amp;A / AI Systems</div>

                <div className="signal-panel signal-panel-top">
                  <span>Focus</span>
                  <strong>Strategic finance design</strong>
                  <p>Planning, pricing, and operating decisions with executive-level clarity.</p>
                </div>

                <div className="signal-panel signal-panel-right">
                  <span>Interface</span>
                  <strong>Analytics that surface signal</strong>
                  <p>Models and reporting layers built to cut through operational noise.</p>
                </div>

                <div className="signal-panel signal-panel-bottom">
                  <span>Leverage</span>
                  <strong>AI with business context</strong>
                  <p>Systems that save time, sharpen analysis, and stay useful after the demo.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section services-section" id="services">
          <div className="section-intro">
            <p className="section-label">Core Services</p>
            <h2>Three disciplines. One premium decision engine.</h2>
          </div>

          <div className="experience-line" aria-label="Selected experience">
            <span>Pinnacle</span>
            <span>Vidyard</span>
            <span>FreshBooks</span>
          </div>

          <div className="service-list">
            {servicePillars.map((pillar) => (
              <article className="service-row" key={pillar.id}>
                <p className="service-id">{pillar.id}</p>
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section proof-section" id="proof">
          <div className="section-intro proof-intro">
            <p className="section-label">Selected Outcomes</p>
            <h2>When the model gets sharper, the business moves differently.</h2>
            <p className="section-copy">
              My work sits where strategic finance, analytics, and execution meet, turning insight
              into measurable movement.
            </p>
          </div>

          <div className="signal-grid">
            {outcomeSignals.map((signal) => (
              <article className="signal-row" key={`${signal.value}-${signal.label}`}>
                <p className="signal-value">{signal.value}</p>
                <p className="signal-copy">{signal.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section approach-section" id="approach">
          <div className="section-intro">
            <p className="section-label">Operating Style</p>
            <h2>Simple, direct, and built to create leverage.</h2>
          </div>

          <div className="approach-grid">
            {operatingModel.map((step, index) => (
              <article className="approach-step" key={step.title}>
                <p className="approach-index">0{index + 1}</p>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section cta-section" id="contact">
          <p className="section-label">Contact</p>
          <h2>Bring me in when the business needs better answers, faster.</h2>
          <p className="cta-copy">
            For strategic finance leadership, sharper analytics, or AI-enabled operating leverage.
          </p>
          <div className="cta-actions">
            <a className="button-primary" href={`mailto:${contactEmail}`}>
              <Mail size={18} strokeWidth={2} />
              {contactEmail}
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
        </section>
      </main>

      <footer className="footer">
        <p>Matt Chrzaszcz, CPA</p>
        <p>Strategic finance, analytics, and applied AI.</p>
      </footer>
    </div>
  );
};

export default Website;
