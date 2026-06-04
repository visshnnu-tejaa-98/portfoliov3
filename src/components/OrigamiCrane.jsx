export default function OrigamiCrane({ size = 200, color = 'currentColor' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      aria-hidden="true"
    >
      {/* Left wing */}
      <polygon points="0,90 90,55 90,90" opacity="0.95" />
      {/* Right wing */}
      <polygon points="200,90 110,55 110,90" opacity="0.72" />
      {/* Upper body */}
      <polygon points="90,55 100,22 110,55 100,72" opacity="0.88" />
      {/* Lower body */}
      <polygon points="68,118 100,72 132,118" opacity="0.82" />
      {/* Belly left */}
      <polygon points="90,90 100,72 68,118" opacity="0.55" />
      {/* Belly right */}
      <polygon points="110,90 100,72 132,118" opacity="0.65" />
      {/* Tail left */}
      <polygon points="68,118 78,162 100,132" opacity="0.72" />
      {/* Tail right */}
      <polygon points="132,118 122,162 100,132" opacity="0.58" />
      {/* Head/beak */}
      <polygon points="100,22 114,8 107,28" opacity="0.9" />
    </svg>
  )
}
