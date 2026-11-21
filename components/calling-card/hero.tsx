import { Typewriter } from './typewriter'

const WHOAMI = 'whoami → sysadmin · devops · local AI'

export function Hero() {
  return (
    <header>
      <div className="hero">
        <div className="hero-top">
          <div className="avatar" aria-hidden="true">
            FM
          </div>
          <span className="status">
            <span className="dot" aria-hidden="true"></span>Available now · Madrid
          </span>
        </div>
        <div>
          <h1>Fernando Morales González</h1>
          <p className="role">Systems administrator moving into DevOps, building local AI systems.</p>
        </div>
        <p className="terminal">
          <span className="sr-only">{`$ ${WHOAMI}`}</span>
          <span aria-hidden="true">
            <span className="prompt">$</span>
            <Typewriter text={WHOAMI} />
          </span>
        </p>
      </div>
    </header>
  )
}
