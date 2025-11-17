import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center py-24">
            <div className="">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Golang Backend • APIs • Distributed Systems</p>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
                Backend Engineer building reliable services in Go
              </h1>
              <p className="mt-5 text-gray-600 text-lg leading-relaxed">
                I design and ship scalable backends, clean REST/GraphQL APIs, and cloud-native systems. I love performance, observability, and developer ergonomics.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="px-5 py-2.5 rounded-md bg-gray-900 text-white font-medium hover:bg-black transition">View Projects</a>
                <a href="#contact" className="px-5 py-2.5 rounded-md bg-white text-gray-900 font-medium border border-gray-200 hover:border-gray-300">Contact Me</a>
              </div>
            </div>

            <div className="hidden lg:block" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90" />
    </section>
  )
}
