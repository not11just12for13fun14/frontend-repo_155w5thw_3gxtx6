import { Code, Server, Cloud, Database } from 'lucide-react'

const projects = [
  {
    title: 'Payments Service',
    description: 'Event-driven Go microservice handling idempotent payments with Kafka, PostgreSQL, and Redis.',
    tags: ['Go', 'Kafka', 'PostgreSQL', 'Redis', 'Docker'],
    link: '#'
  },
  {
    title: 'Realtime Collab API',
    description: 'WebSocket + GRPC powered collaboration backend with fine-grained ACL and OT.',
    tags: ['Go', 'gRPC', 'WebSocket', 'MongoDB'],
    link: '#'
  },
  {
    title: 'Observability Stack',
    description: 'OpenTelemetry tracing + Prometheus metrics with Grafana dashboards and alerts.',
    tags: ['Go', 'OTel', 'Prometheus', 'Grafana'],
    link: '#'
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Featured Projects</h2>
            <p className="mt-2 text-gray-600">A selection of recent backend-heavy work.</p>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl border border-gray-200 p-6 hover:shadow-lg transition bg-white">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
                <Server className="h-4 w-4" /> Backend
              </div>
              <h3 className="mt-3 text-xl font-bold text-gray-900 group-hover:text-gray-700">{p.title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded border border-gray-200">{t}</span>
                ))}
              </div>
              <a href={p.link} className="mt-5 inline-block text-sm font-semibold text-gray-900 hover:underline">Explore →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
