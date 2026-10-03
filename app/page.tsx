import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Bot,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleGauge,
  Code2,
  Gauge,
  Layers3,
  MessagesSquare,
  Search,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react';
import ContactForm from './contact-form';
import SiteHeader from '@/components/site-header';

const services = [
  {
    icon: Code2,
    number: '01',
    title: 'Websites that perform',
    text: 'Fast, conversion-focused websites with clear messaging, thoughtful UX and clean development.',
    tags: ['Business websites', 'Landing pages', 'E-commerce'],
  },
  {
    icon: Workflow,
    number: '02',
    title: 'Automation that saves time',
    text: 'Connected workflows that reduce repetitive work and keep leads, operations and teams moving.',
    tags: ['CRM workflows', 'WhatsApp flows', 'Internal tools'],
  },
  {
    icon: Search,
    number: '03',
    title: 'Growth built into the system',
    text: 'Technical SEO and conversion improvements designed into your product from the first screen.',
    tags: ['Technical SEO', 'Analytics', 'Conversion'],
  },
  {
    icon: Bot,
    number: '04',
    title: 'Custom digital products',
    text: 'Purpose-built dashboards, portals and AI-assisted tools shaped around the way your business works.',
    tags: ['Dashboards', 'Web apps', 'AI integrations'],
  },
];

const capabilities = [
  {
    eyebrow: 'Operations',
    title: 'Courier Aggregator Platform',
    text: 'A unified operations experience for orders, shipments, partners and delivery performance.',
    className: 'work-blue',
    stats: ['Live tracking', 'Smart allocation', 'Reporting'],
  },
  {
    eyebrow: 'Brand & Growth',
    title: 'Premium Business Presence',
    text: 'A confident digital identity with a high-speed website and a focused enquiry journey.',
    className: 'work-violet',
    stats: ['Responsive UX', 'Lead capture', 'SEO setup'],
  },
  {
    eyebrow: 'Automation',
    title: 'Connected Sales Workflow',
    text: 'Lead capture, qualification and follow-ups working together without manual hand-offs.',
    className: 'work-cyan',
    stats: ['Lead routing', 'CRM sync', 'Notifications'],
  },
];

const process = [
  ['01', 'Discover', 'We uncover the real business problem, user needs and the signal worth following.', 'Clarity'],
  ['02', 'Define', 'We turn insight into a focused roadmap, experience direction and success criteria.', 'Direction'],
  ['03', 'Build', 'Design, development and automation move as one connected production system.', 'Momentum'],
  ['04', 'Evolve', 'We launch, learn from real use and feed every insight into the next growth cycle.', 'Growth'],
];

const faqs = [
  ['What does Opervia build?', 'We create business websites, landing pages, e-commerce experiences, dashboards, workflow automations and custom digital products.'],
  ['How long does a typical project take?', 'A focused website can usually launch in 2–4 weeks. Larger products and automation systems are scoped around their complexity and integrations.'],
  ['Will my website be mobile-friendly and SEO-ready?', 'Yes. Responsive layouts, semantic structure, page metadata, accessibility basics and performance-conscious development are part of every website build.'],
  ['Can you improve an existing website?', 'Absolutely. We can redesign, rebuild or optimise an existing experience while preserving the parts of your brand and content that already work.'],
  ['How do we get started?', 'Send us a WhatsApp message or the short project brief below. We will understand your requirement and suggest the clearest next step.'],
];

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Opervia',
    description: 'Digital product studio for websites, automation and business growth.',
    telephone: '+91 95883 58750',
    areaServed: 'India',
    serviceType: ['Website Development', 'Business Automation', 'SEO', 'Digital Product Development'],
  };

  return (
    <main className="site-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="intro" aria-hidden="true">
        <span className="intro-word intro-one">Build.</span>
        <span className="intro-word intro-two">Automate.</span>
        <span className="intro-word intro-three">Grow.</span>
      </div>

      <SiteHeader active="home" />

      <section className="hero" id="home">
        <div className="hero-glow" />
        <div className="hero-orbit" aria-hidden="true">
          <span />
          <span />
          <i />
        </div>
        <div className="hero-copy">
          <div className="eyebrow"><span /> Digital systems for ambitious businesses</div>
          <h1>Digital products built to <em>move business forward.</em></h1>
          <p>Opervia designs high-performing websites, intelligent automations and digital experiences that turn attention into measurable growth.</p>
          <div className="hero-actions">
            <a className="button primary" href="/contact">Discuss your project <ArrowUpRight size={18} /></a>
            <a className="button secondary" href="/work">Explore capabilities</a>
          </div>
          <div className="trust-row">
            <span><CheckCircle2 size={16} /> Strategy-led</span>
            <span><CheckCircle2 size={16} /> SEO-ready</span>
            <span><CheckCircle2 size={16} /> Built to scale</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Opervia project performance preview">
          <div className="visual-top">
            <div className="visual-dots"><i /><i /><i /></div>
            <span>opervia / growth overview</span>
            <Sparkles size={16} />
          </div>
          <div className="metric-row">
            <article><span>Digital experience</span><strong>Faster</strong><small>built for performance</small></article>
            <article><span>Business workflow</span><strong>Smarter</strong><small>less manual work</small></article>
          </div>
          <div className="chart-card">
            <div className="chart-label"><span>Growth trajectory</span><b>Designed to scale</b></div>
            <svg viewBox="0 0 560 210" role="img" aria-label="Rising performance chart">
              <defs>
                <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7c5cff" stopOpacity=".34" />
                  <stop offset="100%" stopColor="#7c5cff" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path className="gridline" d="M0 45H560M0 105H560M0 165H560" />
              <path className="area" d="M0 174 C75 158,105 165,160 132 S245 119,292 95 S375 108,420 63 S500 45,560 18 L560 210 L0 210Z" />
              <path className="line" d="M0 174 C75 158,105 165,160 132 S245 119,292 95 S375 108,420 63 S500 45,560 18" />
              <circle cx="560" cy="18" r="7" />
            </svg>
          </div>
          <div className="floating-card"><span>Our approach</span><strong>Build with purpose</strong></div>
        </div>
      </section>

      <section className="ticker" aria-label="Opervia capabilities">
        <div>
          <span>Web experiences <i /></span><span>Business automation <i /></span>
          <span>Digital products <i /></span><span>SEO & growth <i /></span>
          <span>Web experiences <i /></span><span>Business automation <i /></span>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="section-heading">
          <div><span className="section-kicker">What we do</span><h2>From first idea to a system that works.</h2></div>
          <p>Strategy, design and technology brought together to create digital work that looks sharp and performs with purpose.</p>
        </div>
        <div className="service-grid">
          {services.map(({ icon: Icon, number, title, text, tags }) => (
            <article className="service-card" key={title}>
              <div className="card-top"><span className="service-icon"><Icon size={22} /></span><small>{number}</small></div>
              <h3>{title}</h3><p>{text}</p>
              <div className="tag-row">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <a href="/contact" aria-label={`Discuss ${title}`}>Tell us what you need <ArrowRight size={16} /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="section work" id="work">
        <div className="section-heading">
          <div><span className="section-kicker">What we can build</span><h2>Digital capabilities, shaped around your business.</h2></div>
          <p>Every engagement starts with the business outcome—not a recycled template or a list of trendy features.</p>
        </div>
        <div className="work-grid">
          {capabilities.map((item) => (
            <article className={`work-card ${item.className}`} key={item.title}>
              <div className="mock-window">
                <div className="mock-sidebar"><span /><span /><span /><span /></div>
                <div className="mock-main">
                  <div className="mock-header"><i /><i /></div>
                  <div className="mock-stats"><span /><span /><span /></div>
                  <div className="mock-chart"><i /><i /><i /><i /><i /><i /></div>
                </div>
              </div>
              <div className="work-copy">
                <span>{item.eyebrow}</span><h3>{item.title}</h3><p>{item.text}</p>
                <div className="tag-row">{item.stats.map((stat) => <b key={stat}>{stat}</b>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section quality-lab">
        <div className="quality-heading">
          <div><span className="section-kicker">The Opervia quality ribbon</span><h2>Four signals.<br />One launch-ready system.</h2></div>
          <div className="quality-intro">
            <p>Quality is not a final checklist. These four signals stay connected through every decision we make.</p>
            <a className="text-link" href="/contact">Build to this standard <ArrowUpRight size={17} /></a>
          </div>
        </div>
        <div className="quality-stage">
          <div className="ribbon-flow" aria-hidden="true"><span /><span /><span /><span /></div>
          {[
            [Gauge, '01', 'Speed signal', 'Fast by default', 'Lightweight experiences tuned for real-world devices and attention spans.'],
            [Layers3, '02', 'Scale signal', 'Built to evolve', 'A clear system your content, features and team can confidently grow into.'],
            [CircleGauge, '03', 'Action signal', 'Every screen earns its place', 'Useful paths that guide people toward the next meaningful action.'],
            [ShieldCheck, '04', 'Trust signal', 'Reliable at the core', 'Clean delivery, secure foundations and no unnecessary platform lock-in.'],
          ].map(([Icon, number, signal, title, text], index) => {
            const ItemIcon = Icon as typeof Gauge;
            return (
              <article className={`quality-card quality-card-${index + 1}`} key={title as string}>
                <div className="quality-card-top"><span>{number as string}</span><ItemIcon size={21} /></div>
                <small>{signal as string}</small><h3>{title as string}</h3><p>{text as string}</p>
                <div className="signal-meter"><i /><i /><i /><i /><i /></div>
              </article>
            );
          })}
          <div className="quality-checkpoint">
            <span>4/4 signals active</span>
            <strong>READY TO SHIP</strong>
            <i><Check size={16} /></i>
          </div>
        </div>
      </section>

      <section className="section process" id="process">
        <div className="section-heading">
          <div><span className="section-kicker">The Opervia Orbit</span><h2>Not a hand-off.<br />A connected loop.</h2></div>
          <p>Most agencies work in a straight line and disappear at launch. Our system keeps strategy, craft and growth in continuous motion.</p>
        </div>
        <div className="orbit-map">
          <div className="orbit-rings" aria-hidden="true">
            <span /><span /><span />
            <i className="orbit-signal signal-one" />
            <i className="orbit-signal signal-two" />
          </div>
          <div className="orbit-core">
            <small>OPERVIA</small>
            <strong>Build<br />Automate<br />Grow</strong>
            <div><i /><i /><i /></div>
          </div>
          {process.map(([number, title, text, output], index) => (
            <article className={`orbit-step orbit-step-${index + 1}`} key={number}>
              <div className="orbit-step-top"><span>{number}</span><b>{output}</b></div>
              <h3>{title}</h3>
              <p>{text}</p>
              <small>Feeds the next stage <ArrowUpRight size={14} /></small>
            </article>
          ))}
          <div className="orbit-footnote">
            <span>One continuous system</span>
            <b>Every decision stays connected to the outcome.</b>
          </div>
        </div>
      </section>

      <section className="section faq">
        <div className="faq-heading">
          <span className="section-kicker">Good to know</span>
          <h2>Questions, answered.</h2>
          <p>Still unsure where to begin? A quick conversation is usually the fastest way forward.</p>
          <a className="button secondary" href="https://wa.me/919588358750" target="_blank" rel="noreferrer"><MessagesSquare size={17} /> Ask on WhatsApp</a>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary>{question}<ChevronDown size={20} /></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="contact-copy">
          <span className="section-kicker">Start a conversation</span>
          <h2>Have an idea?<br /><em>Let&apos;s build it well.</em></h2>
          <p>Share a little about your goal. We&apos;ll help you turn it into a clear, practical digital plan.</p>
          <div className="contact-direct">
            <span>Phone & WhatsApp</span>
            <a href="tel:+919588358750">+91 95883 58750</a>
          </div>
          <ul>
            <li><Check size={16} /> Clear scope before work begins</li>
            <li><Check size={16} /> Direct, practical communication</li>
            <li><Check size={16} /> Full ownership of your final product</li>
          </ul>
        </div>
        <ContactForm />
      </section>

      <footer>
        <div className="footer-top">
          <a className="brand footer-brand" href="/"><img src="/opervia-logo.png" alt="" /><span>OPERVIA</span></a>
          <p>Build. Automate. Grow.<br />Digital systems for modern businesses.</p>
          <div className="footer-links"><a href="/services">Services</a><a href="/work">Capabilities</a><a href="/process">Process</a><a href="/contact">Contact</a></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Opervia. All rights reserved.</span><span>Designed for progress.</span></div>
      </footer>

      <a className="whatsapp-float" href="https://wa.me/919588358750?text=Hi%20Opervia%2C%20I%20want%20to%20discuss%20a%20project." target="_blank" rel="noreferrer" aria-label="Chat with Opervia on WhatsApp">
        <MessagesSquare size={21} /><span>Let&apos;s talk</span>
      </a>
    </main>
  );
}
