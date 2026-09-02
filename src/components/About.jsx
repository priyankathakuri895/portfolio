import { MapPin, GraduationCap, Sparkles } from 'lucide-react'
import { profile } from '../data/portfolio'

const facts = [
  { icon: GraduationCap, label: 'BCA Graduate', detail: 'Tribhuvan University' },
  { icon: MapPin, label: 'Based in', detail: profile.location },
  { icon: Sparkles, label: 'Focus', detail: 'Full-stack web development' },
]

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <p className="section-heading">01 · About</p>
      <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
        About Me
      </h2>

      <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          {profile.summary}
        </p>

        <div className="space-y-4">
          {facts.map(({ icon: Icon, label, detail }) => (
            <div
              key={label}
              className="flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5"
            >
              <span className="rounded-lg bg-violet-500/10 p-2 text-violet-600 dark:text-violet-400">
                <Icon size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{label}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
