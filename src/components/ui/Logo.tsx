interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = '', showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Background circle with subtle gradient */}
        <circle cx="24" cy="24" r="23" fill="#2D5A3D" />

        {/* The letter B */}
        <path
          d="M16 12H24C26.5 12 28.5 12.8 30 14.3C31.5 15.8 32.2 17.7 32.2 20C32.2 21.8 31.7 23.3 30.7 24.5C30 25.3 29.1 25.9 28 26.3C29.4 26.6 30.6 27.3 31.5 28.4C32.6 29.7 33.2 31.3 33.2 33.2C33.2 35.8 32.3 37.9 30.5 39.5C28.7 41.1 26.4 42 23.5 42H16V12Z"
          fill="#FAF7F0"
        />
        <path
          d="M20.5 16V24H23.5C25 24 26.2 23.6 27.1 22.7C28 21.8 28.4 20.7 28.4 19.5C28.4 18.2 28 17.2 27.1 16.5C26.2 15.8 25 15.4 23.5 15.4H20.5V16Z"
          fill="#2D5A3D"
        />
        <path
          d="M20.5 28V38H23.8C25.5 38 26.9 37.5 27.9 36.5C28.9 35.5 29.4 34.2 29.4 32.6C29.4 31.1 28.9 29.9 27.9 28.9C26.9 28 25.6 27.5 24 27.5H20.5V28Z"
          fill="#2D5A3D"
        />

        {/* Abstract leaf element - subtle upward growth line */}
        <path
          d="M36 8C36 8 38 12 38 16C38 18 37 19.5 35.5 20"
          stroke="#C9A227"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Small leaf at top */}
        <path
          d="M36 6C37.5 7 39 9 39 11C38 10.5 36 10 35 11C35 9 35.5 7 36 6Z"
          fill="#C9A227"
        />

        {/* Gold accent dots */}
        <circle cx="38" cy="22" r="1.5" fill="#C9A227" />
        <circle cx="40" cy="18" r="1" fill="#C9A227" opacity="0.7" />
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span className="font-display text-xl md:text-2xl font-semibold text-forest leading-tight">
            Bloom
          </span>
          <span className="font-body text-xs md:text-sm text-forest-600 tracking-wide">
            with Gwendolyn
          </span>
        </div>
      )}
    </div>
  );
}
