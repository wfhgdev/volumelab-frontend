type LogoProps = {
  size?: number
}

export function Logo({ size = 102 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      className="text-white/30"
      role="img"
      aria-label="Logotipo de VolumeLab"
    >
      <circle cx="12" cy="12" r="10.5" />
      <circle cx="12" cy="9.5" r="3.5" />
      <path d="M5.5 19c1.2-3 3.7-4.5 6.5-4.5s5.3 1.5 6.5 4.5" />
    </svg>
  )
}
