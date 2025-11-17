import { Boxes, CircuitBoard, Cpu, Database, Gauge, Shield, Server, Wrench } from 'lucide-react'

const stacks = [
  { icon: Server, label: 'Go', detail: 'net/http, Gin, Echo' },
  { icon: Database, label: 'Datastores', detail: 'Postgres, MongoDB, Redis' },
  { icon: Boxes, label: 'Messaging', detail: 'Kafka, NATS, RabbitMQ' },
  { icon: Shield, label: 'Auth', detail: 'JWT, OAuth2, OPA' },
  { icon: CircuitBoard, label: 'Protocols', detail: 'gRPC, GraphQL, WebSocket' },
  { icon: Gauge, label: 'Observability', detail: 'OpenTelemetry, Prometheus' },
  { icon: Wrench, label: 'DevOps', detail: 'Docker, Kubernetes, Terraform' },
  { icon: Cpu, label: 'Performance', detail: 'pprof, flamegraphs' },
]

export default function Stack() {
  return (
    <section id="stack" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Tech Stack</h2>
        <p className="mt-2 text-gray-600">Tools and technologies I use day-to-day.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stacks.map(({ icon: Icon, label, detail }) => (
            <div key={label} className="rounded-xl border border-gray-200 p-5 bg-white hover:shadow-md transition">
              <Icon className="h-6 w-6 text-gray-700" />
              <div className="mt-3 font-semibold text-gray-900">{label}</div>
              <div className="text-sm text-gray-600">{detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
