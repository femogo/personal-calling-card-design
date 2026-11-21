const homeLabTools = ['k3s', 'Argo CD', 'OpenTofu']

export function About() {
  return (
    <section aria-labelledby="about" className="reveal">
      <h2 id="about">About</h2>
      <p>3+ years as the sole infrastructure owner for a city council, after 25 years in banking.</p>
      <p>In my home lab I deploy with:</p>
      <ul className="chips stack" aria-label="Home lab tools">
        {homeLabTools.map((tool) => (
          <li key={tool}>{tool}</li>
        ))}
      </ul>
      <p>And build AI systems that run locally.</p>
    </section>
  )
}
