import { SOCIALS } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 px-4 py-7 text-center">
      <div className="mb-4 flex justify-center gap-4">
        {SOCIALS.map((s) => (
          <a
            key={s.href}
            href={s.href}
            target={s.href.startsWith('http') ? '_blank' : undefined}
            rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            aria-label={s.href}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[0.9rem] text-mut transition-all duration-300 hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-pri hover:to-pri-2 hover:text-white"
          >
            <i className={s.icon} aria-hidden="true" />
          </a>
        ))}
      </div>
      <p className="text-[0.86rem] text-mut">
        &copy; {year} Ayesha — MERN Stack Developer. All rights reserved.
      </p>
    </footer>
  )
}