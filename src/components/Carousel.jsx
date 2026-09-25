import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

export default function Carousel({ slides }) {
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)
  const [lightbox, setLightbox] = useState(false)
  const len = slides.length
  const single = len <= 1
  const startX = useRef(0)

  useEffect(() => {
    if (single || paused || lightbox) return
    const timer = setTimeout(() => setIdx((i) => (i + 1) % len), 4500)
    return () => clearTimeout(timer)
  }, [idx, paused, single, len, lightbox])

  const prev = useCallback(() => setIdx((i) => (i - 1 + len) % len), [len])
  const next = useCallback(() => setIdx((i) => (i + 1) % len), [len])

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(false)
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox, prev, next])

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
              <button
                type="button"
                onClick={() => {
                  setIdx(n)
                  setLightbox(true)
                }}
                aria-label={`Open slide ${n + 1} fullscreen`}
                className="block w-full cursor-zoom-in bg-[#0d0b18] p-0"
              >
                <img
                  src={slide.img}
                  alt={slide.cap}
                  loading="lazy"
                  className="block h-auto max-h-[600px] w-full bg-[#0d0b18] object-contain"
                  draggable="false"
                />
              </button>
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

      {lightbox && slides[idx]?.img &&
        createPortal(
          <Lightbox
            slides={slides}
            idx={idx}
            onPrev={prev}
            onNext={next}
            onClose={() => setLightbox(false)}
          />,
          document.body,
        )}
    </div>
  )
}

function Lightbox({ slides, idx, onPrev, onNext, onClose }) {
  const len = slides.length
  const startX = useRef(0)
  const isSingle = len <= 1

  return (
    <div
      className="fixed inset-0 z-[100] flex h-[100dvh] w-screen flex-col bg-ink/95 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Slide fullscreen"
      onTouchStart={(e) => {
        startX.current = e.touches[0].clientX
      }}
      onTouchEnd={(e) => {
        if (isSingle) return
        const dx = e.changedTouches[0].clientX - startX.current
        if (Math.abs(dx) > 40) {
          if (dx < 0) onNext()
          else onPrev()
        }
      }}
    >
      <div className="flex shrink-0 items-center justify-between px-4 py-3 sm:px-6">
        <span className="font-sora text-sm font-bold text-[#cfc9ea]">
          {String(idx + 1).padStart(2, '0')}{' '}
          <span className="text-mut">/ {String(len).padStart(2, '0')}</span>
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close fullscreen"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-pri to-pri-2 text-white shadow-[0_8px_24px_rgba(139,92,246,.5)] transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <i className="fa-solid fa-xmark text-xl" aria-hidden="true" />
        </button>
      </div>

      <div
        className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-6"
        onClick={onClose}
      >
        {!isSingle && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onPrev()
            }}
            aria-label="Previous slide"
            className="absolute left-2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-card/90 text-white transition-all duration-200 hover:border-pri sm:left-5"
          >
            <i className="fa-solid fa-chevron-left" aria-hidden="true" />
          </button>
        )}

        <img
          key={idx}
          src={slides[idx].img}
          alt={slides[idx].cap}
          onClick={(e) => e.stopPropagation()}
          className="pane-in max-h-full max-w-[92%] rounded-2xl object-contain shadow-[0_30px_80px_rgba(0,0,0,.6)] sm:max-w-[85%]"
          draggable="false"
        />

        {!isSingle && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onNext()
            }}
            aria-label="Next slide"
            className="absolute right-2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-card/90 text-white transition-all duration-200 hover:border-pri sm:right-5"
          >
            <i className="fa-solid fa-chevron-right" aria-hidden="true" />
          </button>
        )}
      </div>

      {!isSingle && (
        <div className="flex shrink-0 items-center justify-center gap-1.5 pb-4">
          {slides.map((_, n) => (
            <span
              key={n}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                n === idx ? 'w-5 bg-pri-2' : 'w-1.5 bg-white/30'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}