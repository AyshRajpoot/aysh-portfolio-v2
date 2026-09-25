import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.rv'))
    const revealed = new Set()

    const reveal = (el) => {
      if (revealed.has(el)) return
      revealed.add(el)
      el.classList.add('show')
    }

    const inView = (el) => {
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight || document.documentElement.clientHeight
      return r.top < vh * 0.96 && r.bottom > 0
    }

    let observer = null
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              reveal(entry.target)
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.08 },
      )
      els.forEach((el) => observer.observe(el))
    } else {
      els.forEach(reveal)
    }

    const checkNow = () => els.forEach((el) => inView(el) && reveal(el))

    let raf = requestAnimationFrame(checkNow)
    const t1 = setTimeout(checkNow, 150)
    const t2 = setTimeout(checkNow, 600)
    const t3 = setTimeout(checkNow, 1500)

    const onScrollOrResize = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(checkNow)
    }
    addEventListener('scroll', onScrollOrResize, { passive: true })
    addEventListener('resize', onScrollOrResize, { passive: true })

    return () => {
      if (observer) observer.disconnect()
      cancelAnimationFrame(raf)
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      removeEventListener('scroll', onScrollOrResize)
      removeEventListener('resize', onScrollOrResize)
    }
  }, [])
}