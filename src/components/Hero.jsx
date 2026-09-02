import { ArrowRight, Mail, Terminal } from 'lucide-react'
import { profile } from '../data/portfolio'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl dark:bg-violet-500/10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_60%,transparent_100%)]" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 font-mono text-xs text-violet-600 dark:text-violet-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Open to remote &amp; project-based work
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{' '}
            <span className="text-gradient">{profile.name}</span>
          </h1>

          <p className="mt-4 font-mono text-lg text-slate-500 dark:text-slate-400">
            {profile.tagline}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
            I build modern web applications using Laravel, React and JavaScript —
            turning real business requirements into functional, reliable software.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition-transform hover:-translate-y-0.5 hover:bg-violet-500"
            >
              View My Projects
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-transform hover:-translate-y-0.5 hover:border-slate-400 dark:border-white/15 dark:text-slate-200 dark:hover:border-white/30"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white/70 shadow-2xl shadow-slate-900/10 backdrop-blur dark:border-white/10 dark:bg-slate-900/70 dark:shadow-black/40">
            <div className="flex items-center gap-1.5 border-b border-slate-200 px-4 py-3 dark:border-white/10">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <span className="ml-2 flex items-center gap-1.5 font-mono text-xs text-slate-400">
                <Terminal size={12} /> priyanka.dev
              </span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-slate-600 dark:text-slate-300">
{`const developer = {
  name: 'Priyanka Thakuri',
  role: 'Web Developer',
  stack: [
    'React', 'Laravel',
    'PHP', 'MySQL',
    'Node.js', 'MongoDB'
  ],
  location: 'Chitwan, Nepal',
  available: true,
};`}
            </pre>
          </div>
          <div className="absolute -bottom-6 -right-6 -z-10 h-40 w-40 rounded-2xl bg-gradient-to-br from-violet-500/30 to-cyan-400/30 blur-2xl" />
        </div>
      </div>
    </section>
  )
}
