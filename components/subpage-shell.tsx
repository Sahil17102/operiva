import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Braces,
  ChartNoAxesCombined,
  Check,
  Code2,
  Layers3,
  MessagesSquare,
  Search,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from 'lucide-react';
import ContactForm from '@/app/contact-form';
import SiteHeader from './site-header';

type PageKind = 'services' | 'work' | 'process' | 'contact';

const content = {
  services: {
    kicker: 'Services / Digital systems',
    title: 'One partner. Every layer of your digital growth.',
    description: 'We combine strategy, interface design, development and automation so your business gets one connected system—not disconnected deliverables.',
  },
  work: {
    kicker: 'Work / Capability stories',
    title: 'Ideas become products people can actually use.',
    description: 'Explore the kinds of digital experiences Opervia can shape around your operations, customers and next stage of growth.',
  },
  process: {
    kicker: 'Process / The Opervia Orbit',
    title: 'Momentum is designed into the way we work.',
    description: 'A connected delivery system where every decision, prototype and learning moves the next stage forward.',
  },
  contact: {
    kicker: 'Contact / Start here',
    title: 'Bring the ambition. We will shape the route.',
    description: 'Tell us what you want to build, improve or automate. We will turn it into a clear first move.',
  },
} as const;

const serviceItems = [
  [Code2, 'Web experiences', 'Conversion-focused websites and landing pages with a premium, high-speed user experience.'],
  [Workflow, 'Business automation', 'Connected lead, sales and operations workflows that remove repetitive manual work.'],
  [Braces, 'Custom web products', 'Dashboards, portals and purpose-built tools designed around your actual process.'],
  [Search, 'SEO foundations', 'Semantic structure, technical optimisation and content architecture built for discovery.'],
  [Bot, 'AI integrations', 'Useful AI features connected to real business data and practical team workflows.'],
  [ShieldCheck, 'Care & optimisation', 'Launch support, measured improvements and a stable foundation that can evolve.'],
] as const;

const workItems = [
  ['01', 'Courier operations system', 'Orders, delivery partners, live tracking and performance intelligence in one operational workspace.', ['Operations', 'Dashboard', 'Automation']],
  ['02', 'Premium business platform', 'A brand-led website and enquiry journey designed to create trust and qualified conversations.', ['Brand system', 'Web experience', 'SEO']],
  ['03', 'Connected sales engine', 'Lead capture, smart qualification, CRM sync and timely follow-ups working as a single system.', ['Lead flow', 'CRM', 'WhatsApp']],
] as const;

const processItems = [
  ['Discover', 'Signal', 'Find the real problem, the right user and the outcome that matters.'],
  ['Define', 'Direction', 'Turn insight into scope, experience architecture and a visible roadmap.'],
  ['Build', 'Momentum', 'Prototype, design and develop in connected, reviewable cycles.'],
  ['Evolve', 'Growth', 'Launch, observe real use and feed learning into the next improvement.'],
] as const;

function ThreeDScene({ kind }: { kind: PageKind }) {
  if (kind === 'services') {
    return (
      <div className="scene-3d services-scene" aria-label="Animated stack of connected digital services">
        <div className="scene-aura" />
        <div className="service-stack">
          {['Strategy', 'Experience', 'Technology'].map((label, index) => (
            <div className={`stack-plane plane-${index + 1}`} key={label}>
              <span>{String(index + 1).padStart(2, '0')}</span><b>{label}</b><i /><i /><i />
            </div>
          ))}
          <div className="stack-core"><Sparkles size={22} /><strong>OPERVIA</strong></div>
        </div>
      </div>
    );
  }
  if (kind === 'work') {
    return (
      <div className="scene-3d work-scene" aria-label="Animated three-dimensional product gallery">
        <div className="scene-aura" />
        <div className="project-gallery">
          {[0, 1, 2].map((item) => (
            <div className={`gallery-panel gallery-panel-${item + 1}`} key={item}>
              <div><i /><i /><i /></div><span /><span /><strong />
            </div>
          ))}
          <div className="gallery-badge"><ChartNoAxesCombined size={18} /><span>Designed to move</span></div>
        </div>
      </div>
    );
  }
  if (kind === 'process') {
    return (
      <div className="scene-3d process-scene" aria-label="Animated Opervia delivery cycle">
        <div className="scene-aura" />
        <div className="cube-orbit"><i /><i /><i /></div>
        <div className="process-cube">
          <div className="cube-face face-front">Build</div><div className="cube-face face-back">Grow</div>
          <div className="cube-face face-right">Evolve</div><div className="cube-face face-left">Define</div>
          <div className="cube-face face-top">Discover</div><div className="cube-face face-bottom">Launch</div>
        </div>
      </div>
    );
  }
  return (
    <div className="scene-3d contact-scene" aria-label="Animated project conversation preview">
      <div className="scene-aura" />
      <div className="contact-console">
        <div className="console-head"><i /><i /><i /><span>New project signal</span></div>
        <div className="console-message">Let&apos;s build something useful.</div>
        <div className="console-status"><span /><b>Opervia is ready</b></div>
      </div>
      <div className="contact-chip chip-one"><Zap size={15} /> Fast response</div>
      <div className="contact-chip chip-two"><MessagesSquare size={15} /> Direct conversation</div>
    </div>
  );
}

function MiniFooter() {
  return (
    <footer className="subpage-footer">
      <a className="brand footer-brand" href="/"><img src="/opervia-logo.png" alt="" /><span>OPERVIA</span></a>
      <p>Build. Automate. Grow.</p>
      <a href="/contact">Start a project <ArrowUpRight size={15} /></a>
    </footer>
  );
}

export default function SubpageShell({ kind }: { kind: PageKind }) {
  const page = content[kind];
  return (
    <main className="site-shell subpage-shell">
      <SiteHeader active={kind} />
      <section className="subpage-hero">
        <div className="subpage-copy">
          <span className="section-kicker">{page.kicker}</span>
          <h1>{page.title}</h1>
          <p>{page.description}</p>
          <div className="hero-actions">
            <a className="button primary" href={kind === 'contact' ? '#project-brief' : '/contact'}>
              {kind === 'contact' ? 'Share your brief' : 'Start a conversation'} <ArrowUpRight size={18} />
            </a>
            {kind !== 'services' && <a className="button secondary" href="/services">Explore services</a>}
          </div>
        </div>
        <ThreeDScene kind={kind} />
      </section>

      {kind === 'services' && (
        <section className="subpage-content">
          <div className="content-intro"><span>Capabilities</span><h2>Everything needed to turn intent into impact.</h2></div>
          <div className="detail-grid">
            {serviceItems.map(([Icon, title, text], index) => (
              <article className="detail-card" key={title}><small>0{index + 1}</small><Icon size={23} /><h3>{title}</h3><p>{text}</p><a href="/contact">Discuss this <ArrowRight size={15} /></a></article>
            ))}
          </div>
        </section>
      )}

      {kind === 'work' && (
        <section className="subpage-content">
          <div className="content-intro"><span>Solution directions</span><h2>Built around real business movement.</h2></div>
          <div className="case-list">
            {workItems.map(([number, title, text, tags]) => (
              <article key={title}><span>{number}</span><div><h3>{title}</h3><p>{text}</p><div className="tag-row">{tags.map((tag) => <b key={tag}>{tag}</b>)}</div></div><ArrowUpRight /></article>
            ))}
          </div>
        </section>
      )}

      {kind === 'process' && (
        <section className="subpage-content">
          <div className="content-intro"><span>Four connected movements</span><h2>Nothing important gets lost between stages.</h2></div>
          <div className="phase-grid">
            {processItems.map(([title, output, text], index) => (
              <article key={title}><span>{index + 1}</span><small>{output}</small><h3>{title}</h3><p>{text}</p><div className="phase-line"><i /></div></article>
            ))}
          </div>
        </section>
      )}

      {kind === 'contact' && (
        <section className="subpage-content contact-page-content" id="project-brief">
          <div className="contact-page-aside">
            <span className="section-kicker">Your next move</span><h2>A clear conversation before any commitment.</h2>
            <p>Share the goal, not a perfect brief. We will help clarify the right scope and the most practical route.</p>
            <a href="tel:+919588358750">+91 95883 58750</a>
            <ul><li><Check size={15} /> Direct founder-level conversation</li><li><Check size={15} /> Clear scope and next step</li><li><Check size={15} /> No obligation, no pressure</li></ul>
          </div>
          <ContactForm />
        </section>
      )}
      <MiniFooter />
      <a className="whatsapp-float" href="https://wa.me/919588358750?text=Hi%20Opervia%2C%20I%20want%20to%20discuss%20a%20project." target="_blank" rel="noreferrer" aria-label="Chat with Opervia on WhatsApp">
        <MessagesSquare size={21} /><span>Let&apos;s talk</span>
      </a>
    </main>
  );
}
