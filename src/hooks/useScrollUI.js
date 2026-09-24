import { useEffect, useState } from 'react'

export function useScrollUI() {
  const [progress, setProgress] = useState(0)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    let raf = false

    const onScroll = () => {
      if (raf) return
      raf = true
      requestAnimationFrame(() => {
        const h = document.documentElement
        const max = h.scrollHeight - h.clientHeight
        setProgress(max > 0 ? Math.min(100, (h.scrollTop / max) * 100) : 0)
        setShowTop(h.scrollTop > 500)
        raf = false
      })
    }

    onScroll()
    addEventListener('scroll', onScroll, { passive: true })
    return () => removeEventListener('scroll', onScroll)
  }, [])

  return { progress, showTop }
}