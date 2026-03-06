import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import './WhoWeAre.css'

export default function WhoWeAre() {
  return (
    <>
      <SEO
        title="Who We Are"
        description="Learn about the Central Alberta FASD Network - a non-profit organization offering community based, cost-free services to persons impacted by FASD."
        path="/who-we-are"
      />
      <PageHero
        title="Who We Are"
        subtitle="Empowering individuals and communities impacted by FASD"
        backgroundImage="https://static.wixstatic.com/media/b2dfdd826840478bb97492cb871e8c27.jpg"
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="vision-block">
            <h2>Our Vision</h2>
            <p>
              We envision a future where all individuals and communities impacted by FASD are supported
              to reach their full potential, and there is continuous reduction in alcohol-exposed
              pregnancies, and the accompanying stigma attached to this disability.
            </p>
          </div>

          <div className="about-content">
            <h2>About Our Network</h2>
            <p>
              The Central Alberta FASD Network is a non-profit organization offering community based,
              cost-free services to persons impacted by Fetal Alcohol Spectrum Disorder (FASD) across
              the lifespan, and their caregivers. With programs offered in Red Deer and surrounding area,
              Rocky Mountain House and surrounding area, South Central, Drumheller, Hanna, Trochu,
              Coronation, Castor and Three Hills, we are part of a system wide FASD Network model
              that has made Alberta a leader in service delivery, both in Canada and internationally.
            </p>
            <p>
              We offer education and training, outreach and prevention, assessment and diagnosis, and
              advocacy. We offer fee for service options for assessment and diagnosis, professional
              development and training, restorative practice interventions.
            </p>
          </div>

          <div className="mission-values-grid">
            <div className="mv-card">
              <h3>Our Mission</h3>
              <p>
                The Central Alberta FASD Network believes in treating all individuals with respect,
                accepting our clients for who they are, and celebrating their uniqueness. To engage
                our clients and their caregivers across the lifespan, we provide community-based
                services and individualized support, in a safe and non-judgement environment. We strive
                to support individuals impacted by FASD and their caregivers by offering education
                and training, outreach and support, assessment and diagnostic services, and through
                informed and inclusive collaborative partnerships.
              </p>
            </div>
            <div className="mv-card">
              <h3>Our Values</h3>
              <p>
                We believe in engaging all individuals with respect, celebrating their uniqueness,
                and supporting each in their personal journey. The FASD Network supports a
                person-centered approach, and embraces the core values of dignity, individuality
                and autonomy, empathy, integrity, collaboration, innovation, adaptability and leadership.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/our-team" className="btn btn-outline">Meet Our Team</Link>
          </div>
        </div>
      </section>
    </>
  )
}
