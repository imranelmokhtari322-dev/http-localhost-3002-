interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 36, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Mortarboard flat board (diamond) */}
      <polygon points="18,2 33,9 18,16 3,9" fill="#1e3a5f" />

      {/* Hat cylinder body */}
      <path
        d="M11 11 L11 20 C11 23.5 14.5 25.5 18 25.5 C21.5 25.5 25 23.5 25 20 L25 11 Z"
        fill="#1e3a5f"
        opacity="0.82"
      />

      {/* Tassel string from right corner */}
      <line x1="33" y1="9" x2="33" y2="18" stroke="#1e3a5f" strokeWidth="2" strokeLinecap="round" />
      {/* Tassel bob */}
      <circle cx="33" cy="19.5" r="2" fill="#1e3a5f" />

      {/* Play triangle (white, inside hat body) */}
      <polygon points="15,15.5 15,24 24,19.75" fill="white" />
    </svg>
  );
}
