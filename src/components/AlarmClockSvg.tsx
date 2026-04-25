type AlarmClockSvgProps = {
  className?: string;
};

export function AlarmClockSvg({ className }: AlarmClockSvgProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Réveil"
    >
      <g className="alarm-bell alarm-bell-left">
        <path
          d="M41 69C25 55 23 34 36 22C50 9 74 12 91 29L41 69Z"
          fill="#FFE07A"
          stroke="#263044"
          strokeWidth="10"
          strokeLinejoin="round"
        />
        <path
          d="M47 58L76 34"
          stroke="#FFFFFF"
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.45"
        />
      </g>

      <g className="alarm-bell alarm-bell-right">
        <path
          d="M179 69C195 55 197 34 184 22C170 9 146 12 129 29L179 69Z"
          fill="#FFE07A"
          stroke="#263044"
          strokeWidth="10"
          strokeLinejoin="round"
        />
        <path
          d="M173 58L144 34"
          stroke="#FFFFFF"
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.45"
        />
      </g>

      <path
        d="M94 21H126V43H94V21Z"
        fill="#8BB9FF"
        stroke="#263044"
        strokeWidth="10"
        strokeLinejoin="round"
      />

      <path
        d="M66 172L48 203"
        stroke="#263044"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M154 172L172 203"
        stroke="#263044"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M58 197L39 202"
        stroke="#8BB9FF"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M162 197L181 202"
        stroke="#8BB9FF"
        strokeWidth="12"
        strokeLinecap="round"
      />

      <circle cx="110" cy="113" r="73" fill="#FF477E" stroke="#263044" strokeWidth="10" />
      <circle cx="110" cy="113" r="56" fill="#F7FBFF" stroke="#263044" strokeWidth="7" />
      <path
        d="M73 82C83 66 101 59 119 62"
        stroke="#FFFFFF"
        strokeWidth="9"
        strokeLinecap="round"
        opacity="0.55"
      />

      <path
        className="alarm-hand alarm-hand-minute"
        d="M110 113V70"
        stroke="#263044"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        className="alarm-hand alarm-hand-hour"
        d="M110 113H79"
        stroke="#263044"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <circle cx="110" cy="113" r="10" fill="#263044" />

      <path
        d="M110 57L103 73H117L110 57Z"
        fill="#F7FBFF"
        stroke="#263044"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path
        d="M65 113L81 106V120L65 113Z"
        fill="#F7FBFF"
        stroke="#263044"
        strokeWidth="5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
