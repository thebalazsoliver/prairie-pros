// Decorative arc + droplets, echoing the pressure-washer spray on the truck logo.
export default function SpraySplash({ className = '', variant = 'light' }) {
  const stroke = variant === 'light' ? '#7EC8E3' : '#22417A'
  const drop = variant === 'light' ? '#F0B429' : '#F0B429'
  return (
    <svg
      className={`spray-splash ${className}`}
      viewBox="0 0 320 160"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="spray-splash__arc"
        d="M10 140C60 40 180 10 300 30"
        stroke={stroke}
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="6 10"
      />
      <circle className="spray-splash__drop" cx="300" cy="30" r="6" fill={drop} />
      <circle className="spray-splash__drop spray-splash__drop--2" cx="265" cy="18" r="4" fill={drop} />
      <circle className="spray-splash__drop spray-splash__drop--3" cx="230" cy="46" r="3.5" fill={stroke} />
    </svg>
  )
}
