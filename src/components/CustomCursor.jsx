import { useEffect, useRef } from 'react'

const INTERACTIVE = 'a,button,.slide,.tag,.cc,.scat,.feat,.fchip,.dots'

export default function CustomCursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    const d = dot.current
    const r = ring.current
    if (!d || !r) return

    const target = { x: innerWidth / 2, y: innerHeight / 2 }
    const pos = { x: target.x, y: target.y }
    let raf = 0

    const move = (e) => {
      target.x = e.clientX
      target.y = e.clientY
      d.style.left = `${target.x}px`
      d.style.top = `${target.y}px`
    }

    const loop = () => {
      pos.x += (target.x - pos.x) * 0.15
      pos.y += (target.y - pos.y) * 0.15
      r.style.left = `${pos.x}px`
      r.style.top = `${pos.y}px`
      raf = requestAnimationFrame(loop)
    }

    const over = (e) => {
      if (e.target.closest(INTERACTIVE)) r.classList.add('big')
    }
    const out = (e) => {
      if (e.target.closest(INTERACTIVE)) r.classList.remove('big')
    }

    addEventListener('mousemove', move, { passive: true })
    addEventListener('mouseover', over)
    addEventListener('mouseout', out)
    raf = requestAnimationFrame(loop)

    return () => {
      removeEventListener('mousemove', move)
      removeEventListener('mouseover', over)
      removeEventListener('mouseout', out)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div id="cdot" ref={dot} className="cursor-dot" aria-hidden="true" />
      <div id="cring" ref={ring} className="cursor-ring" aria-hidden="true" />
    </>
  )
}