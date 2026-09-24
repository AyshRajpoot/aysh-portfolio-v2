import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../data/content'

export default function Navbar({ active }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(scrollY > 24)
    onScroll()
    addEventListener('scroll', onScroll, { passive: true })
    return () => removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    addEventListener('keydown', onKey)
    return () => removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[1001] border-b transition-all duration-300 ${
        scrolled
          ? 'border-white/10 bg-ink/85 shadow-[0_6px_30px_rgba(0,0,0,.45)] backdrop-blur-xl'
          : 'border-white/5 bg-ink/70 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-18 w-[92%] max-w-[1150px] items-center justify-between">
        <a href="#home" className="font-sora text-[1.3rem] font-extrabold tracking-tight">
          Ayesha<span className="grad-text">.dev</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? 'page' : undefined}
                className={`relative pb-1.5 text-sm font-medium tracking-wide transition-colors duration-200 ${
                  active === link.id ? 'text-white' : 'text-mut hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-gradient-to-r from-pri to-pri-2 transition-all duration-300 ${
                    active === link.id ? 'w-full' : 'w-0'
                  }`}
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-to-r from-pri to-pri-2 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_6px_22px_rgba(139,92,246,.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(236,72,153,.5)] lg:inline-flex"
          >
            Hire Me
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-card-2/60 text-lg text-white lg:hidden"
          >
            <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'}`} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile menu backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-ink/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={close}
        aria-hidden="true"
      />

      {/* Mobile menu panel */}
      <div
        className={`fixed right-0 top-18 z-50 flex h-[calc(100dvh-72px)] w-[min(290px,82vw)] flex-col justify-between border-l border-white/10 bg-ink-2 p-7 shadow-2xl transition-transform duration-300 lg:hidden ${
          open ? 'translate-x-0' : 'pointer-events-none translate-x-full'
        }`}
        aria-hidden={!open}
      >
        <div>
          <p className="mb-4 font-sora text-xs font-bold uppercase tracking-[0.2em] text-mut">
            Menu
          </p>
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link, i) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={close}
                  className={`flex items-center gap-3 rounded-xl px-3 py-3 text-[0.95rem] font-medium transition ${ 
                    active === link.id ? 'bg-card-2 text-white' : 'text-mut hover:bg-card hover:text-white'
                  }`}
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full transition-colors ${
                      active === link.id ? 'bg-pri-2' : 'bg-white/20'
                    }`}
                    aria-hidden="true"
                  />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={close}
            className="mt-6 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pri to-pri-2 px-6 py-3 text-sm font-semibold text-white shadow-[0_6px_22px_rgba(139,92,246,.4)]"
          >
            <i className="fa-solid fa-paper-plane" aria-hidden="true" />
            Hire Me
          </a>
        </div>

        <div className="rounded-2xl border border-white/10 bg-card p-4 text-center">
          <p className="mb-1 text-sm font-semibold text-white">Available for Work</p>
          <p className="text-xs text-mut">Backend roles & freelance projects</p>
        </div>
      </div>
    </nav>
  )
}