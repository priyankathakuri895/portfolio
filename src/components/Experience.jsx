import { Award, GraduationCap } from 'lucide-react'
import { timeline } from '../data/portfolio'

const icons = {
  Certification: Award,
  Education: GraduationCap,
}

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-50 py-24 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-heading">04 · Experience</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
          Experience &amp; Education
        </h2>

        <div className="mt-10 space-y-6">
          {timeline.map((entry) => {
            const Icon = icons[entry.type]
            return (
              <div
                key={entry.title}
                className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-900"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400">
                  <Icon size={20} />
                </span>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-violet-500 dark:text-violet-400">
                    {entry.type}
                  </p>
                  <h3 className="mt-1 text-base font-semibold text-slate-900 dark:text-white">
                    {entry.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{entry.place}</p>
                  {(entry.period || entry.detail) && (
                    <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                      {[entry.period, entry.detail].filter(Boolean).join(' · ')}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
