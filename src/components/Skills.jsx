import { Code2, Server, Database, Wrench } from 'lucide-react'
import { skills } from '../data/portfolio'

const icons = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  Tools: Wrench,
}

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-50 py-24 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-heading">02 · Skills</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
          Technical Skills
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ category, items }) => {
            const Icon = icons[category]
            return (
              <div
                key={category}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-violet-300 dark:border-white/10 dark:bg-slate-900 dark:hover:border-violet-500/40"
              >
                <span className="inline-flex rounded-lg bg-violet-500/10 p-2.5 text-violet-600 dark:text-violet-400">
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">
                  {category}
                </h3>
                <ul className="mt-3 space-y-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="font-mono text-sm text-slate-500 dark:text-slate-400"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
