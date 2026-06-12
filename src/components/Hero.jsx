import GridBackground from './GridBackground'

function scrollToWork() {
  document.getElementById('choose-your-path')?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <GridBackground />
      <div className="hero-inner">
        <h1 className="hero-headline">
          <span className="hero-line-1">AI Evolving You</span>
        </h1>
        <p className="hero-subtext">
          Helping people and organisations evolve with the changing world of work.
        </p>
        <button className="btn-primary" onClick={scrollToWork}>
          Explore the Work →
        </button>
      </div>
    </section>
  )
}
