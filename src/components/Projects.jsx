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

export default function Projects() {
  const [activeId, setActiveId] = useState(PROJECTS[0].id)
  const active = PROJECTS.find((p) => p.id === activeId)

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

        <div className="grid items-start gap-5 lg:grid-cols-[320px_1fr] lg:gap-7">
          {/* ------------------------------------------------ Selector list */}
          <aside
            className="rv max-h-[380px] overflow-y-auto rounded-3xl border border-white/10 bg-card p-3 shadow-[0_20px_50px_rgba(0,0,0,.35)] lg:max-h-[640px] lg:sticky lg:top-24"
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

          {/* ------------------------------------------------ Preview panel */}
          <div className="rv rounded-3xl border border-white/10 bg-card p-4 shadow-[0_20px_50px_rgba(0,0,0,.4)] sm:p-6">
            <div key={active.id} className="pane-in space-y-6">
              <Carousel slides={active.slides} />

              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-pri/40 bg-pri/10 px-4 py-1.5 text-[0.8rem] font-semibold tracking-wide text-lilac">
                  <i className={active.tagIcon} aria-hidden="true" />
                  {active.tagLabel}
                </span>

                <h3 className="mt-3.5 text-[clamp(1.2rem,2.4vw,1.5rem)] font-bold leading-snug">
                  {active.title}
                </h3>
                <p className="mt-1 text-[0.9rem] font-semibold text-lilac">{active.sub}</p>

                <p className="mt-3.5 text-[0.94rem] leading-relaxed text-mut">{active.desc}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {active.tags.map(([icon, label]) => (
                    <Tag key={label} icon={icon} label={label} />
                  ))}
                </div>

                {active.link && (
                  <a
                    href={active.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-pri to-pri-2 px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(139,92,246,.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(236,72,153,.5)]"
                  >
                    <i className={active.link.icon} aria-hidden="true" />
                    {active.link.label}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}