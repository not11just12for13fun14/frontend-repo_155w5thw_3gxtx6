import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      company: form.get('company') || undefined,
      subject: form.get('subject') || undefined,
      message: form.get('message'),
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to send')
      setStatus('ok')
      e.currentTarget.reset()
    } catch (err) {
      setStatus(err.message)
    }
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 text-center">Let’s work together</h2>
        <p className="mt-2 text-gray-600 text-center">Tell me about your project and I’ll get back to you.</p>

        <form onSubmit={submit} className="mt-10 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input required name="name" placeholder="Your name" className="w-full rounded-md border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-gray-900 focus:outline-none" />
            <input required type="email" name="email" placeholder="Email" className="w-full rounded-md border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-gray-900 focus:outline-none" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="company" placeholder="Company (optional)" className="w-full rounded-md border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-gray-900 focus:outline-none" />
            <input name="subject" placeholder="Subject (optional)" className="w-full rounded-md border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-gray-900 focus:outline-none" />
          </div>
          <textarea required name="message" placeholder="Message" rows="5" className="w-full rounded-md border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-gray-900 focus:outline-none" />
          <button disabled={status==='sending'} className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-gray-900 text-white font-medium hover:bg-black transition disabled:opacity-60">
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>

          {status && status !== 'sending' && (
            <p className={`text-sm ${status==='ok' ? 'text-green-600' : 'text-red-600'}`}>
              {status==='ok' ? 'Thanks! I will get back to you shortly.' : status}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
