import { useEffect, useState } from 'react'

export function useTypewriter(words, { typeMs = 70, delMs = 38, holdMs = 1600, gapMs = 350 } = {}) {
  const [text, setText] = useState('')

  useEffect(() => {
    let i = 0
    let j = 0
    let deleting = false
    let timer

    const step = () => {
      const word = words[i]
      const next = deleting ? word.slice(0, --j) : word.slice(0, ++j)
      setText(next)

      if (!deleting && j === word.length) {
        deleting = true
        timer = setTimeout(step, holdMs)
      } else if (deleting && j === 0) {
        deleting = false
        i = (i + 1) % words.length
        timer = setTimeout(step, gapMs)
      } else {
        timer = setTimeout(step, deleting ? delMs : typeMs)
      }
    }

    step()
    return () => clearTimeout(timer)
  }, [words, typeMs, delMs, holdMs, gapMs])

  return text
}