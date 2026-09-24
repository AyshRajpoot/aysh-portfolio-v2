import SectionHead from './SectionHead'
import { SKILL_CATEGORIES } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="mx-auto w-[92%] max-w-[1150px]">
        <SectionHead
          eyebrow="What I Work With"
          title={
            <>
              Technical <span className="grad-text">Skills</span>
            </>
          }
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="rv rounded-2xl border border-white/10 bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-pri/50 hover:shadow-[0_18px_44px_rgba(0,0,0,.45)]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pri/25 to-pri/10 text-lg text-pri-2">
                <i className={cat.icon} aria-hidden="true" />
              </div>
              <h3 className="mb-3.5 font-sora text-[1.02rem] font-bold">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.tags.map(([icon, label]) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-card-2 px-3.5 py-1.5 text-[0.78rem] text-mut transition-colors duration-200 hover:border-pri-2/60 hover:text-white"
                  >
                    <i className={`${icon} w-3.5 text-center text-pri-2`} aria-hidden="true" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}