import { useEffect, useRef, useState } from 'react'

export default function Carousel({ slides }) {
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)
  const len = slides.length
  const single = len <= 1
  const startX = useRef(0)

  useEffect(() => {
    if (single || paused) return
    const timer = setTimeout(() => setIdx((i) => (i + 1) % len), 4500)
    return () => clearTimeout(timer)
  }, [idx, paused, single, len])

  const prev = () => setIdx((i) => (i - 1 + len) % len)
  const next = () => setIdx((i) => (i + 1) % len)

  return (
    <div
      className="car relative select-none overflow-hidden rounded-2xl border border-white/10 bg-[#0d0b18] shadow-[0_16px_40px_rgba(0,0,0,.45)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex [touch-action:pan-y] transition-transform duration-700 ease-[cubic-bezier(.4,0,.2,1)]"
        style={{ transform: `translateX(-${idx * 100}%)` }}
        onTouchStart={(e) => {
          startX.current = e.touches[0].clientX
          setPaused(true)
        }}
        onTouchEnd={(e) => {
          if (single) return
          const dx = e.changedTouches[0].clientX - startX.current
          if (Math.abs(dx) > 40) {
            if (dx < 0) next()
            else prev()
          }
          setPaused(false)
        }}
      >
        {slides.map((slide, n) => (
          <div
            key={n}
            className="flex min-w-full flex-col bg-[#0d0b18]"
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${n + 1} of ${len}`}
          >
            {slide.img ? (
              <img
                src={slide.img}
                alt={slide.cap}
                loading="lazy"
                className="block h-auto max-h-[600px] w-full bg-[#0d0b18] object-contain"
              />
            ) : (
              <div
                className="flex min-h-56 flex-1 flex-col items-center justify-center gap-3 px-4 text-center text-mut sm:min-h-80"
                style={{
                  background:
                    'radial-gradient(circle at 30% 25%,rgba(139,92,246,.14),transparent 60%),#100e1e',
                }}
              >
                <i className={`${slide.icon} text-5xl text-pri opacity-90`} aria-hidden="true" />
                <span className="text-sm">{slide.label}</span>
              </div>
            )}
            <div className="border-t border-white/10 bg-[#15122a] px-4 pb-8 pt-2.5 text-center text-xs text-[#cfc9ea]">
              {slide.cap}
            </div>
          </div>
        ))}
      </div>

      {!single && (
        <>
          <span className="absolute right-3 top-3 z-10 rounded-full bg-ink/80 px-3 py-0.5 text-[0.7rem] text-[#cfc9ea] backdrop-blur-sm">
            {idx + 1} / {len}
          </span>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-2.5 top-[42%] z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-ink/75 text-sm text-white backdrop-blur-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-pri hover:to-pri-2 sm:h-[42px] sm:w-[42px]"
          >
            <i className="fa-solid fa-chevron-left" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="absolute right-2.5 top-[42%] z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-ink/75 text-sm text-white backdrop-blur-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-pri hover:to-pri-2 sm:h-[42px] sm:w-[42px]"
          >
            <i className="fa-solid fa-chevron-right" aria-hidden="true" />
          </button>

          <div className="absolute bottom-2.5 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {slides.map((_, n) => (
              <button
                key={n}
                type="button"
                onClick={() => setIdx(n)}
                aria-label={`Go to slide ${n + 1}`}
                aria-current={n === idx}
                className={`h-2 rounded-full transition-all duration-300 ${
                  n === idx ? 'w-6 bg-pri-2' : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}