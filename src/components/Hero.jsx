import GridBackground from './GridBackground'

function scrollToWork() {
  document.querySelector('.fade-section')?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <GridBackground />
      <div className="hero-inner">
        <h1 className="hero-headline">
          <span className="hero-line-1">AI is evolving you.</span>
          <span className="hero-line-2">
            The question is whether you're evolving with it.
          </span>
        </h1>
        <p className="hero-subtext">
          AI is changing how we work, decide and create.{' '}
          I explore what that means for incentives, leadership and human agency{' '}
          by writing, building and experimenting.
        </p>
        <button className="btn-primary" onClick={scrollToWork}>
          Explore the Work →
        </button>
      </div>
    </section>
  )
}
