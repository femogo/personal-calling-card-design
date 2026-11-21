'use client'

import { useEffect, useState } from 'react'

export function Typewriter({ text }: { text: string }) {
  const [shown, setShown] = useState(text)
  const [pending, setPending] = useState(true)
  const [done, setDone] = useState(false)
  const [caretHidden, setCaretHidden] = useState(false)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setPending(false)
      setCaretHidden(true)
      return
    }

    setShown('')
    setPending(false)
    let i = 0
    let timer: ReturnType<typeof setTimeout>
    const tick = () => {
      i += 1
      setShown(text.slice(0, i))
      if (i < text.length) timer = setTimeout(tick, 45)
      else setDone(true)
    }
    timer = setTimeout(tick, 500)
    return () => clearTimeout(timer)
  }, [text])

  return (
    <>
      <span className={pending ? 'typed pending' : 'typed'}>{shown}</span>
      {!caretHidden && <span className={done ? 'caret done' : 'caret'}></span>}
    </>
  )
}
