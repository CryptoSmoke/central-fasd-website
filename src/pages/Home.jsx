import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Heart, BookOpen, Users, Scale, Baby, Brain, GraduationCap, Quote } from 'lucide-react'
import SEO from '../components/SEO'
import './Home.css'

const PROGRAMS = [
  {
    title: 'Assessment & Diagnosis',
    desc: 'Assessment and diagnosis is for individuals age 7 years and older who are experiencing difficulties that are suspected to be a result of prenatal exposure to alcohol.',
    icon: Brain,
    path: '/assement-diagnosis',
    img: 'https://static.wixstatic.com/media/11062b_906e5f667dde4cfeb914314a8a97dac0~mv2.jpg',
  },
  {
    title: 'Community Outreach & Support',
    desc: 'For children, youth, adults, families, and caregivers impacted by FASD who require varying levels of support.',
    icon: Users,
    path: '/community-outreach',
    img: 'https://static.wixstatic.com/media/11062b_58e6938df4374deba0e1ce3b7d789ee9~mv2.jpg',
  },
  {
    title: 'Education & Prevention',
    desc: 'We offer education and awareness opportunities as well as resources to individuals and groups in a variety of delivery methods both in person and online.',
    icon: BookOpen,
    path: '/education-prevention',
    img: 'https://static.wixstatic.com/media/11062b_61159504c4b24999b7177c3ed9ddf4dc~mv2.jpg',
  },
  {
    title: 'Support Groups',
    desc: 'Building opportunities for individuals within our FASD community to enhance social and life skills and strategies that encourage interdependence.',
    icon: Heart,
    path: '/cargiver-support-groups',
    img: 'https://static.wixstatic.com/media/11062b_a6d400ac4dae4ce3961f8c43a7b111d8~mv2.jpg',
  },
  {
    title: 'Parent & Child Assistance Program',
    desc: 'A three-year voluntary program that supports individuals with reducing and or stopping alcohol and drug use during and after pregnancy.',
    icon: Baby,
    path: '/pcap-program',
    img: 'https://static.wixstatic.com/media/51369e07cc0a436cac67c806bd625963.jpg',
  },
  {
    title: 'Restorative Justice Program',
    desc: 'A voluntary program for those impacted by FASD who are needing support and advocacy with RCMP, legal and other professionals within the Criminal Justice System.',
    icon: Scale,
    path: '/restorative-justice-program',
    img: 'https://static.wixstatic.com/media/11062b_a83659bc3d374e3cb1d620c24383bbb3~mv2.jpeg',
  },
]

const TESTIMONIALS = [
  {
    quote: "I had no idea how to navigate the complexities of FASD. The team at the Central Alberta FASD Network guided me every step of the way, giving me the knowledge and confidence I needed to support my child. We're so grateful for their compassion and expertise!",
    author: 'Sarah',
    role: 'Parent',
  },
  {
    quote: "I felt overwhelmed before reaching out, but their assessment process helped me finally understand my challenges. The staff were patient, thorough, and made me feel supported every step of the way. It's made a world of difference in my daily life!",
    author: 'John',
    role: 'Client',
  },
  {
    quote: "The resources and training provided by the Central Alberta FASD Network have transformed how I support students in my classroom. Their expertise and dedication to education is truly outstanding.",
    author: 'Karen',
    role: 'Educator',
  },
]

const PARTNERS = [
  { name: 'Government of Alberta', img: 'https://static.wixstatic.com/media/42932a_290f92e3facf40c4ba1d5b1d4cb06388~mv2.jpg' },
  { name: 'Alberta Law Foundation', img: 'https://static.wixstatic.com/media/42932a_392ce40cd8124fcc8579c543fe39fc93~mv2.png' },
  { name: 'Imagine Canada', img: 'https://static.wixstatic.com/media/42932a_3b3dfdcaab1949ba98f8f6d7c671f450~mv2.png' },
  { name: 'United Way', img: 'https://static.wixstatic.com/media/42932a_43adc52435114b1d9d3ddc951e666952~mv2.jpg' },
  { name: 'CanFASD', img: 'https://static.wixstatic.com/media/42932a_87b7c6ab14114f8eb1a41f886b74d48e~mv2.png' },
  { name: 'Lifelong Learning Council', img: 'https://static.wixstatic.com/media/42932a_e0c386da69964b30b2c898a5c399a7a1~mv2.jpg' },
  { name: 'ThinkFASD', img: 'https://static.wixstatic.com/media/42932a_7e9ef1681aa04ad59ca9e131a7bc98d8~mv2.png' },
  { name: 'Lets Get Real About Sex and Drinking', img: 'https://static.wixstatic.com/media/42932a_7fc86db07d5f43ecb7db4e7a9c975697~mv2.png' },
]

const SERVICE_AREAS = [
  'Red Deer and surrounding area',
  'Blackfalds',
  'Stettler',
  'Lacombe',
  'Rocky Mountain House area including Sunchild First Nations, O\'Chiese First Nations, Big Horn First Nations',
  'Sundre and Surrounding Area',
  'Drumheller, Hanna, and Three Hills surrounding area',
]

export default function Home() {
  return (
    <>
      <SEO
        description="Central Alberta FASD Network provides free, community-based support for individuals affected by Fetal Alcohol Spectrum Disorder and their caregivers in Red Deer and surrounding areas."
        path="/"
      />

      {/* Hero */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="container hero-content">
          <h1 className="hero-title">Empowering Families &amp; Communities Across Central Alberta</h1>
          <p className="hero-subtitle">
            We're here to guide you through FASD assessment, outreach, and prevention &mdash; every step of the way.
          </p>
          <div className="hero-actions">
            <Link to="/contact-us" className="btn btn-primary btn-lg">
              Get Help Now <ArrowRight size={20} />
            </Link>
            <a href="tel:1-403-342-7499" className="btn btn-secondary btn-lg">
              <Phone size={20} /> Call 1-403-342-7499
            </a>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="section">
        <div className="container welcome-section">
          <div className="welcome-text">
            <h2 className="section-title" style={{ textAlign: 'left' }}>Welcome to Central Alberta FASD Network</h2>
            <p>
              The Central Alberta FASD Network provides free, community-based support for individuals
              affected by Fetal Alcohol Spectrum Disorder (FASD) and their caregivers. Serving Red Deer
              and surrounding areas, we offer education, outreach, assessment, and advocacy to empower
              individuals across all stages of life.
            </p>
            <Link to="/who-we-are" className="btn btn-outline" style={{ marginTop: '1.5rem' }}>
              Learn More About Our Mission <ArrowRight size={18} />
            </Link>
          </div>
          <div className="welcome-image">
            <img
              src="https://static.wixstatic.com/media/11062b_17f8de122b984733bfa8a483e43ef666~mv2.jpeg"
              alt="Community members holding hands together"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">Our Programs &amp; Services</h2>
          <p className="section-subtitle">
            We offer a comprehensive range of programs to support individuals and families impacted by FASD.
          </p>
          <div className="grid grid-3 programs-grid">
            {PROGRAMS.map((p) => (
              <Link to={p.path} key={p.title} className="card program-card">
                <img src={p.img} alt={p.title} className="card-img" loading="lazy" />
                <div className="card-body">
                  <div className="program-icon-wrap">
                    <p.icon size={24} />
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <span className="card-link">
                    Learn More <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Imagine Canada */}
      <section className="section section-dark">
        <div className="container accreditation-section">
          <div className="accreditation-badge">
            <img
              src="https://static.wixstatic.com/media/42932a_3b3dfdcaab1949ba98f8f6d7c671f450~mv2.png"
              alt="Imagine Canada Standards Trustmark"
              loading="lazy"
            />
          </div>
          <div className="accreditation-text">
            <h2>Central Alberta FASD Network Achieves Imagine Canada Accreditation</h2>
            <p>
              We are proud to announce that as of December 18, 2024, the Central Alberta FASD Network
              has been accredited under Imagine Canada's national Standards Program. This recognition
              highlights our dedication to the highest levels of accountability, transparency, and
              governance in the nonprofit sector — ensuring that every contribution we receive is used
              effectively to support those impacted by FASD.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle">Hear from the people we serve</p>
          <div className="grid grid-3 testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testimonial-card">
                <Quote size={32} className="testimonial-icon" />
                <p className="testimonial-quote">{t.quote}</p>
                <div className="testimonial-author">
                  <strong>{t.author}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">Our Funding &amp; Grant Partners</h2>
          <p className="section-subtitle">We believe every client is a valuable long-term partner.</p>
          <div className="partners-grid">
            {PARTNERS.map((p) => (
              <div key={p.name} className="partner-logo">
                <img src={p.img} alt={p.name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section">
        <div className="container service-area-section">
          <div className="service-area-text">
            <h2>Our Service Area</h2>
            <p>We provide services across the Central Alberta area including:</p>
            <ul className="service-area-list">
              {SERVICE_AREAS.map((area) => (
                <li key={area}>
                  <MapPin size={16} />
                  {area}
                </li>
              ))}
            </ul>
          </div>
          <div className="service-area-image">
            <img
              src="https://static.wixstatic.com/media/b2dfdd826840478bb97492cb871e8c27.jpg"
              alt="Family walking together"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="section section-dark">
        <div className="container">
          <h2 className="section-title" style={{ color: '#fff' }}>Get Involved</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>
            There are many ways to support our mission and make a difference.
          </p>
          <div className="grid grid-3 cta-grid">
            <div className="cta-card">
              <h3>Board Members</h3>
              <p>
                We are actively seeking passionate, diverse and experienced board members to help guide
                the organization as it continues to grow.
              </p>
              <Link to="/board-of-directors" className="btn btn-primary btn-sm">Learn More</Link>
            </div>
            <div className="cta-card">
              <h3>Careers</h3>
              <p>
                Join our team to play a role in creating a future where all individuals and communities
                impacted by FASD are supported to reach their fullest potential.
              </p>
              <Link to="/careers" className="btn btn-primary btn-sm">View Openings</Link>
            </div>
            <div className="cta-card">
              <h3>Volunteers</h3>
              <p>
                We are actively working on building opportunities for volunteers. Please call
                403-342-7499 or email office@fasdca.ca for more information.
              </p>
              <Link to="/volunteer" className="btn btn-primary btn-sm">Current Opportunities</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function MapPin({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
