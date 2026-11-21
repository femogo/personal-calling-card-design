type Project = {
  tag: string
  title: string
  description: string
  stack: string[]
  href: string
  linkLabel: 'GitHub ↗' | 'Live ↗'
}

const projects: Project[] = [
  {
    tag: 'Text-to-SQL · MCP',
    title: 'Natural-language SQL analyst',
    description:
      'Ask in plain English; it writes the SQL, retries if the database rejects it, and passes four safety barriers before touching data.',
    stack: ['LangGraph', 'MCP', 'PostgreSQL', 'sqlglot', 'FastAPI', 'Ollama'],
    href: 'https://github.com/femogo/querywise',
    linkLabel: 'GitHub ↗',
  },
  {
    tag: 'LangGraph · Visual debugging',
    title: 'Visual LangGraph agent studio',
    description: 'Draw, run and debug LangGraph agents in the browser, rewind to any step and branch off.',
    stack: ['LangGraph', 'FastAPI', 'Ollama', 'Human-in-the-loop', 'LLM-as-a-judge'],
    href: 'https://github.com/femogo/studio_stadio',
    linkLabel: 'GitHub ↗',
  },
  {
    tag: 'LangGraph · Human-in-the-loop',
    title: 'Incident-response agent',
    description:
      'Investigates metrics and logs over MCP, proposes one action, and touches nothing until a human approves it.',
    stack: ['LangGraph', 'MCP', 'Ollama', 'Pydantic', 'SQLite'],
    href: 'https://github.com/femogo/langgraph-hitl-incident-graph',
    linkLabel: 'GitHub ↗',
  },
  {
    tag: 'DevOps · In production',
    title: 'Clipper Hub',
    description:
      'Production site I run on my own server with infrastructure as code, GitOps, CI/CD and observability.',
    stack: ['k3s', 'Argo CD', 'OpenTofu', 'GitHub Actions', 'Prometheus', 'Grafana'],
    href: 'https://clipperhub.co',
    linkLabel: 'Live ↗',
  },
]

export function SelectedWork() {
  return (
    <section aria-labelledby="work" className="reveal">
      <h2 id="work">Selected work</h2>
      <ul className="projects">
        {projects.map((project) => (
          <li key={project.href}>
            <article className="card">
              <span className="tag">{project.tag}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="chips" aria-label="Stack">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a className="card-link" href={project.href} target="_blank" rel="noopener noreferrer">
                {project.linkLabel}
                <span className="sr-only">{` — ${project.title} (opens in a new tab)`}</span>
              </a>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
