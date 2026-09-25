import { useEffect, useState } from 'react'
import { CHIPS, HERO_IMG, ROLES, STATS } from '../data/content'
import { useTypewriter } from '../hooks/useTypewriter'

function FloatingChip({ items, position, ci }) {
  const [k, setK] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setK((prev) => (prev + 1) % items.length)
        setFading(false)
      }, 380)
    }, 2800 + ci * 500)
    return () => clearInterval(id)
  }, [items.length, ci])

  const [icon, label] = items[k]

  return (
    <div
      className={`fchip floaty ${position} ${fading ? 'fade' : ''}`}
      style={{ animationDelay: ci === 0 ? '0s' : `${ci * 1.2}s` }}
    >
      <i className={icon} aria-hidden="true" />
      {label}
    </div>
  )
}

export default function Hero() {
  const text = useTypewriter(ROLES)
  const [imgOk, setImgOk] = useState(true)

  return (
    <header id="home" className="hero-bg relative flex min-h-screen items-center overflow-x-clip pb-14 pt-24">
      <div className="mx-auto grid w-[92%] max-w-[1150px] items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-pri/40 bg-pri/10 px-4 py-2 text-[0.8rem] font-semibold tracking-wide text-lilac">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            Available for Work
          </span>

          <h1 className="mt-5 text-[clamp(2.4rem,5vw,3.5rem)] font-extrabold leading-[1.15] tracking-tight">
            Hi, I&apos;m <span className="grad-text">Ayesha</span>
          </h1>

          <div className="mt-3 min-h-[2.1em] font-sora text-[clamp(1.05rem,2.3vw,1.45rem)] font-semibold text-lilac">
            {text}
            <span className="caret" aria-hidden="true" />
          </div>

          <p className="mx-auto mt-5 max-w-[560px] text-mut lg:mx-0">
            Motivated <b className="text-white">MERN Stack Developer</b> building scalable APIs, AI-powered
            platforms &amp; e-commerce systems — with live projects like{' '}
            <b className="text-white">Petronas</b> and <b className="text-white">Create A Button</b>.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-pri to-pri-2 px-8 py-3.5 text-[0.94rem] font-semibold text-white shadow-[0_8px_26px_rgba(139,92,246,.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(236,72,153,.5)]"
            >
              <i className="fa-solid fa-rocket" aria-hidden="true" />
              View Projects
            </a>
            <a
              href="/cv/Ayesha_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.02] px-8 py-3.5 text-[0.94rem] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-pri hover:text-lilac"
            >
              <i className="fa-solid fa-download" aria-hidden="true" />
              Download CV
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:justify-start">
            {STATS.map((stat) => (
              <div key={stat.l} className="relative">
                <b className="block font-sora text-[1.6rem] font-bold leading-none grad-text">
                  {stat.n}
                </b>
                <span className="mt-1 block text-[0.83rem] text-mut">{stat.l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[400px]">
          <div
            className="pointer-events-none absolute -right-5 -top-5 z-0 h-2/3 w-2/3"
            style={{
              background: 'radial-gradient(circle,rgba(139,92,246,.28),transparent 70%)',
              filter: 'blur(30px)',
            }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-6 -left-6 z-0 h-3/5 w-3/5"
            style={{
              background: 'radial-gradient(circle,rgba(236,72,153,.22),transparent 70%)',
              filter: 'blur(30px)',
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 overflow-hidden rounded-3xl border border-pri/35 bg-card-2 shadow-[0_30px_70px_rgba(0,0,0,.55),0_0_0_6px_rgba(139,92,246,.07)]">
            {imgOk ? (
              <img
                src={HERO_IMG}
                alt="Ayesha — MERN Stack Developer"
                loading="eager"
                onError={() => setImgOk(false)}
                className="block h-auto max-h-[560px] w-full object-contain"
              />
            ) : (
              <div className="flex aspect-[3/4] min-h-[300px] w-full flex-col items-center justify-center gap-3 text-mut">
                <i className="fa-solid fa-user text-5xl text-pri" aria-hidden="true" />
                <span className="text-sm">Photo</span>
              </div>
            )}
          </div>

          <div className="mt-4 flex items-center gap-3 text-left">
            <span
              className="h-[3px] w-9 shrink-0 rounded-full bg-gradient-to-r from-pri to-pri-2"
              aria-hidden="true"
            />
            <div>
              <b className="block font-sora text-[1.05rem] font-bold leading-tight">MERN Stack Developer</b>
              <span className="block text-[0.8rem] text-lilac">Building scalable APIs &amp; AI-powered platforms</span>
            </div>
          </div>

          <div className="fchip-row mt-4 flex flex-wrap justify-center gap-2.5 sm:mt-0 sm:contents">
            <FloatingChip items={CHIPS[0]} ci={0} position="-left-[6%] top-[6%] lg:-left-[14%]" />
            <FloatingChip items={CHIPS[1]} ci={1} position="-right-[6%] bottom-[22%] lg:-right-[13%]" />
            <FloatingChip items={CHIPS[2]} ci={2} position="bottom-[-4%] left-[6%]" />
          </div>
        </div>
      </div>
    </header>
  )
}