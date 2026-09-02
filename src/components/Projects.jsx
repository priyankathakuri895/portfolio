import { CheckCircle2 } from 'lucide-react'
import GithubIcon from './icons/GithubIcon'
import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <p className="section-heading">03 · Projects</p>
      <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
        Featured Projects
      </h2>
      <p className="mt-3 max-w-2xl text-slate-500 dark:text-slate-400">
        Real-world Laravel and PHP applications built to solve practical business
        problems, from inventory tracking to point-of-sale billing.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/5 dark:border-white/10 dark:bg-slate-900 dark:hover:border-violet-500/40"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {project.title}
              </h3>
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:border-violet-400 hover:text-violet-600 dark:border-white/15 dark:text-slate-300 dark:hover:border-violet-400 dark:hover:text-violet-300"
              >
                <GithubIcon size={14} />
                Code
              </a>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {project.description}
            </p>

            <ul className="mt-4 space-y-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-violet-500 dark:text-violet-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-4 dark:border-white/10">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-violet-500/10 px-2.5 py-1 font-mono text-xs text-violet-600 dark:text-violet-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
