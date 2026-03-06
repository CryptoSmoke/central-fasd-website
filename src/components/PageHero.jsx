import './PageHero.css'

export default function PageHero({ title, subtitle, backgroundImage, children }) {
  return (
    <section
      className="page-hero"
      style={backgroundImage ? { backgroundImage: `linear-gradient(rgba(15,38,64,0.75), rgba(15,38,64,0.85)), url(${backgroundImage})` } : undefined}
    >
      <div className="container page-hero-content">
        <h1>{title}</h1>
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}
