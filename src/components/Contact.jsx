import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import GithubIcon from './icons/GithubIcon'
import { profile } from '../data/portfolio'

const contactItems = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
  { icon: MapPin, label: 'Location', value: profile.location, href: null },
  { icon: GithubIcon, label: 'GitHub', value: profile.githubHandle, href: profile.github },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'website visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <p className="section-heading">05 · Contact</p>
      <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
        Get In Touch
      </h2>
      <p className="mt-3 max-w-2xl text-slate-500 dark:text-slate-400">
        Open to remote, project-based, or part-time web development work. Reach out
        directly or send a message below.
      </p>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          {contactItems.map(({ icon: Icon, label, value, href }) => {
            const content = (
              <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 transition-colors hover:border-violet-300 dark:border-white/10 dark:bg-white/5 dark:hover:border-violet-500/40">
                <span className="rounded-lg bg-violet-500/10 p-2.5 text-violet-600 dark:text-violet-400">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400">{label}</p>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{value}</p>
                </div>
              </div>
            )
            return href ? (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                {content}
              </a>
            ) : (
              <div key={label}>{content}</div>
            )
          })}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-violet-400 dark:border-white/10 dark:bg-slate-900 dark:text-white"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-violet-400 dark:border-white/10 dark:bg-slate-900 dark:text-white"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              className="w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-violet-400 dark:border-white/10 dark:bg-slate-900 dark:text-white"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition-transform hover:-translate-y-0.5 hover:bg-violet-500"
          >
            Send Message
            <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  )
}
