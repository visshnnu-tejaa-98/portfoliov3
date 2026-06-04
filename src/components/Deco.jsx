import { useEffect, useRef } from 'react'

// React wrapper for the window.Deco decoration library
export default function Deco({ name, size, color, id, style, className, ...opts }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const render = () => {
      if (!window.Deco) return
      const fn = name.startsWith('icon-')
        ? () => window.Deco.icon(name.slice(5), { size, ...opts })
        : window.Deco[name]
      if (fn) el.innerHTML = typeof fn === 'function' ? fn({ size, color, id, ...opts }) : ''
    }
    render()
    // if decorations.js hasn't loaded yet, retry
    if (!window.Deco) {
      const t = setInterval(() => { if (window.Deco) { render(); clearInterval(t) } }, 50)
      return () => clearInterval(t)
    }
  }, [name, size, color, id])

  return (
    <span
      ref={ref}
      className={className}
      style={{ display: 'inline-flex', alignItems: 'center', ...style }}
      aria-hidden="true"
    />
  )
}
