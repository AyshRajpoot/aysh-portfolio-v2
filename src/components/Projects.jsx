import SectionHead from './SectionHead'
import Carousel from './Carousel'
import { PROJECTS } from '../data/projects'

function GroupDivider({ icon, label }) {
  return (
    <div className="rv mx-auto my-12 flex max-w-3xl items-center gap-4 md:my-14">
      <span className="h-px flex-1 bg-white/10" aria-hidden="true" />
      <span className="inline-flex items-center gap-2.5 rounded-full border border-pri/35 bg-card-2 px-5 py-2.5 text-center font-sora text-[0.95rem] font-bold text-white">
        <i className={icon} aria-hidden="true" />
        {label}
      </span>
      <span className="h-px flex-1 bg-white/10" aria-hidden="true" />
    </div>
  )
}

function Tag({ icon, label }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-card-2 px-3.5 py-1.5 text-[0.78rem] text-mut transition-colors duration-200 hover:border-pri/60 hover:text-white">
      <i className={`${icon} text-[0.75rem] text-pri-2`} aria-hidden="true" />
      {label}
    </span>
  )
}

function ProjectCard({ project }) {
  const { tagIcon, tagLabel, title, sub, desc, link, reversed, tags, slides } = project

  return (
    <article className="rv rounded-3xl border border-white/10 bg-card p-6 shadow-[0_20px_50px_rgba(0,0,0,.4)] transition-all duration-300 hover:border-pri/40 hover:shadow-[0_24px_60px_rgba(0,0,0,.5)] sm:p-8 lg:p-10">
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
        <div className={reversed ? 'lg:order-2' : ''}>
          <span className="inline-flex items-center gap-2 rounded-full border border-pri/40 bg-pri/10 px-4 py-1.5 text-[0.8rem] font-semibold tracking-wide text-lilac">
            <i className={tagIcon} aria-hidden="true" />
            {tagLabel}
          </span>

          <h3 className="mt-4 text-[clamp(1.2rem,2.4vw,1.4rem)] font-bold leading-snug">{title}</h3>
          <p className="mt-1 text-[0.9rem] font-semibold text-lilac">{sub}</p>

          <p className="mt-4 text-[0.94rem] leading-relaxed text-mut">{desc}</p>

          {link && (
            <div className="mt-6">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-pri to-pri-2 px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(139,92,246,.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(236,72,153,.5)]"
              >
                <i className={link.icon} aria-hidden="true" />
                {link.label}
              </a>
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map(([icon, label]) => (
              <Tag key={label} icon={icon} label={label} />
            ))}
          </div>
        </div>

        <div className={reversed ? 'lg:order-1' : ''}>
          <Carousel slides={slides} />
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
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
          sub="Auto-sliding carousels with real screenshots — explore with arrows, dots or swipe"
        />

        {PROJECTS.map((project) => (
          <div key={project.id} className={project.groupDivider ? 'mt-14 md:mt-16' : ''}>
            {project.groupDivider && (
              <div className="mb-8 md:mb-10">
                <GroupDivider
                  icon={project.groupDivider.icon}
                  label={project.groupDivider.label}
                />
              </div>
            )}
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  )
}