import { useState } from 'react'
import SectionHead from './SectionHead'
import Carousel from './Carousel'
import { PROJECTS } from '../data/projects'

function Tag({ icon, label }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-card-2 px-3.5 py-1.5 text-[0.78rem] text-mut transition-colors duration-200 hover:border-pri/60 hover:text-white">
      <i className={`${icon} text-[0.75rem] text-pri-2`} aria-hidden="true" />
      {label}
    </span>
  )
}

function SelectorRow({ project, number, active, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(project.id)}
      aria-current={active ? 'true' : undefined}
      className={`group mb-1.5 flex w-full items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition-all duration-300 ${
        active
          ? 'border-pri/60 bg-card-2 shadow-[0_12px_30px_rgba(0,0,0,.3)]'
          : 'border-transparent hover:bg-white/[0.04]'
      }`}
    >
      <span
        className={`font-sora text-[0.7rem] font-bold tracking-wide transition-colors ${
          active ? 'grad-text' : 'text-mut'
        }`}
      >
        {number}
      </span>
      <span
        className={`flex-1 truncate text-[0.88rem] font-medium transition-colors ${
          active ? 'text-white' : 'text-mut group-hover:text-white'
        }`}
      >
        {project.title}
      </span>
      <i
        className={`fa-solid fa-arrow-right text-[0.65rem] transition-all duration-300 ${
          active
            ? 'translate-x-0 text-pri-2 opacity-100'
            : '-translate-x-1 text-mut opacity-0 group-hover:opacity-100'
        }`}
        aria-hidden="true"
      />
    </button>
  )
}

function Preview({ project }) {
  return (
    <>
      <Carousel slides={project.slides} />

      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-pri/40 bg-pri/10 px-4 py-1.5 text-[0.8rem] font-semibold tracking-wide text-lilac">
          <i className={project.tagIcon} aria-hidden="true" />
          {project.tagLabel}
        </span>

        <h3 className="mt-3.5 text-[clamp(1.2rem,2.4vw,1.5rem)] font-bold leading-snug">
          {project.title}
        </h3>
        <p className="mt-1 text-[0.9rem] font-semibold text-lilac">{project.sub}</p>

        <p className="mt-3.5 text-[0.94rem] leading-relaxed text-mut">{project.desc}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map(([icon, label]) => (
            <Tag key={label} icon={icon} label={label} />
          ))}
        </div>

        {project.link && (
          <a
            href={project.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-pri to-pri-2 px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(139,92,246,.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(236,72,153,.5)]"
          >
            <i className={project.link.icon} aria-hidden="true" />
            {project.link.label}
          </a>
        )}
      </div>
    </>
  )
}

export default function Projects() {
  const [activeId, setActiveId] = useState(PROJECTS[0].id)
  const idx = PROJECTS.findIndex((p) => p.id === activeId)
  const active = PROJECTS[idx]
  const go = (n) => setActiveId(PROJECTS[(n + PROJECTS.length) % PROJECTS.length].id)

  return (
    <section id="projects" className="section-alt py-16 md:py-24">
      <div className="mx-auto w-[92%] max-w-[1150px]">
        <SectionHead
          eyebrow="My Work"
          title={
            <>
              My <span className="grad-text">Projects</span>
            </>
          }
          sub="Select a project to explore real screenshots — auto-sliding previews with arrows, dots or swipe"
        />

        {/* ------------------------------------------------ Mobile: vertical tabs + preview */}
        <div className="flex items-start gap-3 lg:hidden">
          <nav
            className="rv flex max-h-[440px] shrink-0 flex-col gap-1 overflow-y-auto rounded-2xl border border-white/10 bg-card p-2 shadow-[0_18px_40px_rgba(0,0,0,.35)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:max-h-none sm:flex-wrap"
            aria-label="Mobile project navigation"
          >
            {PROJECTS.map((project, i) => {
              const isActive = project.id === activeId
              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Project ${String(i + 1).padStart(2, '0')}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border font-sora text-[0.7rem] font-bold transition-all duration-200 active:scale-95 sm:h-10 sm:w-10 lg:w-full ${
                    isActive
                      ? 'border-pri/60 bg-pri/15 grad-text shadow-[0_8px_20px_rgba(139,92,246,.3)]'
                      : 'border-white/10 bg-card-2/60 text-mut hover:border-pri/40 hover:text-white'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </button>
              )
            })}
          </nav>

          <div className="rv min-w-0 flex-1 rounded-3xl border border-white/10 bg-card p-4 shadow-[0_20px_50px_rgba(0,0,0,.4)] sm:p-6">
            <div key={active.id} className="pane-in space-y-6">
              <Preview project={active} />
            </div>
          </div>
        </div>

        {/* ------------------------------------------------ Desktop: selector + preview */}
        <div className="hidden lg:grid lg:grid-cols-[320px_1fr] lg:items-start lg:gap-7">
          <aside
            className="rv max-h-[640px] rounded-3xl border border-white/10 bg-card p-3 shadow-[0_20px_50px_rgba(0,0,0,.35)] lg:sticky lg:top-24 lg:overflow-y-auto"
            aria-label="Project list"
          >
            {PROJECTS.map((project, i) => (
              <div key={project.id}>
                {project.groupDivider && (
                  <div className="flex items-center gap-2 px-3 pb-1.5 pt-4 font-sora text-[0.7rem] font-bold uppercase tracking-wider text-pri-2">
                    <i className={project.groupDivider.icon} aria-hidden="true" />
                    {project.groupDivider.label}
                  </div>
                )}
                <SelectorRow
                  project={project}
                  number={String(i + 1).padStart(2, '0')}
                  active={project.id === activeId}
                  onSelect={setActiveId}
                />
              </div>
            ))}
          </aside>

          <div className="rv min-w-0 rounded-3xl border border-white/10 bg-card p-6 shadow-[0_20px_50px_rgba(0,0,0,.4)]">
            <div key={active.id} className="pane-in space-y-6">
              <Preview project={active} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}