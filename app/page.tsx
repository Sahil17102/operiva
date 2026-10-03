import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  ChevronDown,
  Code2,
  MessagesSquare,
  Search,
  Workflow,
} from 'lucide-react';
import Link from 'next/link';
import ContactForm from './contact-form';
import SiteHeader from '@/components/site-header';

const services = [
  { icon: Code2, number: '01', title: 'Web experiences', text: 'Distinctive websites that make the value clear, earn trust quickly and turn attention into action.', tags: ['Strategy', 'UX/UI', 'Development'] },
  { icon: Workflow, number: '02', title: 'Business automation', text: 'Connected workflows that remove repetitive work and keep leads, operations and teams moving.', tags: ['CRM', 'WhatsApp', 'Internal tools'] },
  { icon: Search, number: '03', title: 'Growth systems', text: 'Technical SEO, analytics and conversion thinking designed into the product from the first screen.', tags: ['SEO', 'Analytics', 'Conversion'] },
  { icon: Bot, number: '04', title: 'Digital products', text: 'Purpose-built dashboards, portals and AI-assisted tools shaped around the way your business works.', tags: ['Web apps', 'Dashboards', 'AI'] },
];

const process = [
  ['01', 'Find the signal', 'We cut through assumptions and define the real business outcome.'],
  ['02', 'Shape the system', 'Strategy, content and interaction become one clear direction.'],
  ['03', 'Build with intent', 'Design and development move together in fast, visible cycles.'],
  ['04', 'Launch, learn, evolve', 'We ship carefully, read the signals and improve what matters.'],
];

const faqs = [
  ['What does Opervia build?', 'We create business websites, e-commerce experiences, dashboards, workflow automations and custom digital products.'],
  ['How long does a typical project take?', 'A focused website can usually launch in 2–4 weeks. Larger products and automation systems are scoped around their complexity and integrations.'],
  ['Will my website be mobile-friendly and SEO-ready?', 'Yes. Responsive layouts, semantic structure, page metadata, accessibility basics and performance-conscious development are part of every website build.'],
  ['Can you improve an existing website?', 'Absolutely. We can redesign, rebuild or optimise an existing experience while preserving the parts of your brand and content that already work.'],
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
    <main className="site-shell v2-home">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SiteHeader active="home" />

      <section className="v2-hero" id="home">
        <div className="v2-hero-copy">
          <div className="v2-kicker"><i /> Independent digital studio · India / Worldwide</div>
          <h1>We turn <span>complexity</span> into digital momentum.</h1>
          <div className="v2-hero-bottom">
            <p>Strategy, design and technology for businesses that refuse to blend in.</p>
            <div className="v2-actions">
              <Link className="v2-button v2-button-primary" href="/contact">Start a project <ArrowUpRight size={18} /></Link>
              <a className="v2-button v2-button-ghost" href="#work">See our thinking <ArrowRight size={17} /></a>
            </div>
          </div>
        </div>

        <div className="signal-visual" aria-label="Opervia digital systems visualisation">
          <div className="signal-topline"><span>OPV / SYSTEM 01</span><b>LIVE</b></div>
          <div className="signal-orbit">
            <div className="signal-ring ring-a" /><div className="signal-ring ring-b" /><div className="signal-ring ring-c" />
            <div className="signal-core"><small>ONE SYSTEM</small><strong>BUILD<br />MOVE<br />GROW</strong></div>
            <i className="signal-node node-a" /><i className="signal-node node-b" /><i className="signal-node node-c" />
          </div>
          <div className="signal-footer"><span>Strategy → Experience → Technology</span><span>26°55&apos;N / 75°49&apos;E</span></div>
        </div>
        <div className="v2-scroll"><span>SCROLL TO EXPLORE</span><i /></div>
      </section>

      <section className="v2-marquee" aria-label="Opervia capabilities"><div><span>WEB EXPERIENCES</span><i /><span>AUTOMATION</span><i /><span>DIGITAL PRODUCTS</span><i /><span>GROWTH SYSTEMS</span><i /><span>WEB EXPERIENCES</span><i /><span>AUTOMATION</span><i /></div></section>

      <section className="v2-section v2-services" id="services">
        <div className="v2-section-head"><span className="v2-index">01 / SERVICES</span><h2>Not another list of deliverables. <em>A connected growth system.</em></h2></div>
        <div className="v2-service-list">
          {services.map(({ icon: Icon, number, title, text, tags }) => (
            <Link className="v2-service-row" href="/contact" key={title}>
              <span className="v2-service-num">{number}</span><span className="v2-service-icon"><Icon size={23} /></span><h3>{title}</h3><p>{text}</p>
              <span className="v2-service-tags">{tags.map((tag) => <b key={tag}>{tag}</b>)}</span><ArrowUpRight className="v2-service-arrow" size={23} />
            </Link>
          ))}
        </div>
      </section>

      <section className="v2-work" id="work">
        <div className="v2-section v2-work-inner">
          <div className="v2-section-head v2-section-head-light"><span className="v2-index">02 / SELECTED DIRECTIONS</span><h2>Built for the part of your business that needs to <em>move next.</em></h2></div>
          <div className="v2-work-grid">
            <article className="v2-case v2-case-main">
              <div className="case-meta"><span>OPERATIONS PLATFORM</span><span>01</span></div>
              <div className="case-canvas logistics-canvas"><div className="route-line route-one" /><div className="route-line route-two" /><div className="route-hub hub-a">A</div><div className="route-hub hub-b">B</div><div className="route-hub hub-c">C</div><div className="route-card"><small>SHIPMENTS TODAY</small><strong>1,284</strong><span>↑ 18.4%</span></div></div>
              <div className="case-copy"><h3>Courier, without the chaos.</h3><p>A unified command centre for shipments, partners and delivery performance.</p></div>
            </article>
            <article className="v2-case v2-case-side">
              <div className="case-meta"><span>BRAND EXPERIENCE</span><span>02</span></div>
              <div className="case-canvas brand-canvas"><span>Clarity</span><span>creates</span><strong>confidence.</strong><i /></div>
              <div className="case-copy"><h3>A presence people remember.</h3><p>Positioning, storytelling and conversion built into one sharp experience.</p></div>
            </article>
            <article className="v2-case v2-case-wide">
              <div className="case-meta"><span>AUTOMATION ENGINE</span><span>03</span></div>
              <div className="automation-map"><span>New lead</span><i /><span>Qualify</span><i /><span>Route</span><i /><span>Follow up</span><i /><strong>Won</strong></div>
              <div className="case-copy"><h3>Workflows that keep moving when you&apos;re not.</h3><p>Connected sales and operations flows with fewer hand-offs and no lost context.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="v2-section v2-manifesto">
        <span className="v2-index">03 / OUR STANDARD</span>
        <p className="manifesto-copy">We don&apos;t decorate the internet. We design <em>useful systems</em> where every screen, interaction and line of code earns its place.</p>
        <div className="manifesto-notes"><span><b>01</b> Clear before clever</span><span><b>02</b> Distinct, never noisy</span><span><b>03</b> Built for real use</span><span><b>04</b> Ready to evolve</span></div>
      </section>

      <section className="v2-process" id="process"><div className="v2-section">
        <div className="v2-section-head"><span className="v2-index">04 / THE OPERATING SYSTEM</span><h2>Less theatre.<br /><em>More forward motion.</em></h2></div>
        <div className="v2-process-grid">{process.map(([number, title, text]) => <article key={number}><span>{number}</span><div className="process-marker"><i /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div></section>

      <section className="v2-section v2-faq">
        <div className="v2-faq-intro"><span className="v2-index">05 / GOOD TO KNOW</span><h2>Questions,<br /><em>answered plainly.</em></h2><a href="https://wa.me/919588358750" target="_blank" rel="noreferrer">Ask us directly <MessagesSquare size={17} /></a></div>
        <div className="v2-faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>0{index + 1}</span>{question}<ChevronDown size={20} /></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="v2-section v2-contact" id="contact">
        <div className="v2-contact-copy"><span className="v2-index">06 / START SOMETHING</span><h2>Bring the ambition.<br /><em>We&apos;ll build the momentum.</em></h2><p>Tell us what you&apos;re trying to change. We&apos;ll come back with the clearest next step.</p><a href="tel:+919588358750">+91 95883 58750 <ArrowUpRight size={19} /></a><ul><li><Check size={15} /> Clear scope before work begins</li><li><Check size={15} /> Direct access to the people doing the work</li><li><Check size={15} /> Full ownership of your final product</li></ul></div>
        <ContactForm />
      </section>

      <footer className="v2-footer"><div className="v2-footer-word">OPERVIA<span>®</span></div><div className="v2-footer-row"><p>Build. Automate. Grow.<br />Digital systems for ambitious businesses.</p><div><Link href="/services">Services</Link><Link href="/work">Work</Link><Link href="/process">Process</Link><Link href="/contact">Contact</Link></div><span>© {new Date().getFullYear()} OPERVIA<br />INDIA / WORLDWIDE</span></div></footer>

      <a className="whatsapp-float" href="https://wa.me/919588358750?text=Hi%20Opervia%2C%20I%20want%20to%20discuss%20a%20project." target="_blank" rel="noreferrer" aria-label="Chat with Opervia on WhatsApp"><MessagesSquare size={20} /><span>Let&apos;s talk</span></a>
    </main>
  );
}
