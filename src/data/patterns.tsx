export type PatternSvgProps = {
  color: string;
  strokeColor?: string;
  size?: number;
  className?: string;
};

function HeartSvg({
  color,
  strokeColor = "#263044",
  size = 64,
  className,
}: PatternSvgProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M50 80C50 80 10 56 10 29C10 15 20.5 7 33 7C41.5 7 47.2 11.8 50 18.2C52.8 11.8 58.5 7 67 7C79.5 7 90 15 90 29C90 56 50 80 50 80Z"
        fill={color}
        stroke={strokeColor}
        strokeWidth="7"
        strokeLinejoin="round"
      />
      <path
        d="M25 24C28 16 36 15 41 19"
        stroke="#FFFFFF"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.45"
      />
    </svg>
  );
}

function BearSvg({
  color,
  strokeColor = "#263044",
  size = 64,
  className,
}: PatternSvgProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="27" cy="28" r="16" fill={color} stroke={strokeColor} strokeWidth="6" />
      <circle cx="73" cy="28" r="16" fill={color} stroke={strokeColor} strokeWidth="6" />
      <circle cx="50" cy="56" r="34" fill={color} stroke={strokeColor} strokeWidth="6" />
      <circle cx="37" cy="49" r="4.5" fill={strokeColor} />
      <circle cx="63" cy="49" r="4.5" fill={strokeColor} />
      <ellipse cx="50" cy="64" rx="12" ry="9" fill="#FFFFFF" stroke={strokeColor} strokeWidth="5" />
      <circle cx="50" cy="60" r="3.5" fill={strokeColor} />
      <path d="M45 68C48 71 52 71 55 68" stroke={strokeColor} strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

function CandySvg({
  color,
  strokeColor = "#263044",
  size = 64,
  className,
}: PatternSvgProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 110 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M13 21L33 32L13 57V21Z"
        fill={color}
        stroke={strokeColor}
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <path
        d="M97 21L77 32L97 57V21Z"
        fill={color}
        stroke={strokeColor}
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <rect x="29" y="15" width="52" height="48" rx="21" fill={color} stroke={strokeColor} strokeWidth="6" />
      <path d="M48 18L61 60" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

function StarSvg({
  color,
  strokeColor = "#263044",
  size = 64,
  className,
}: PatternSvgProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M50 9L61.5 35.5L90 38.5L68.5 57.5L75 86L50 71.5L25 86L31.5 57.5L10 38.5L38.5 35.5L50 9Z"
        fill={color}
        stroke={strokeColor}
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <path d="M41 34L48 20" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" opacity="0.45" />
    </svg>
  );
}

function FlowerSvg({
  color,
  strokeColor = "#263044",
  size = 64,
  className,
}: PatternSvgProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="50" cy="23" r="16" fill={color} stroke={strokeColor} strokeWidth="5" />
      <circle cx="72" cy="42" r="16" fill={color} stroke={strokeColor} strokeWidth="5" />
      <circle cx="63" cy="70" r="16" fill={color} stroke={strokeColor} strokeWidth="5" />
      <circle cx="37" cy="70" r="16" fill={color} stroke={strokeColor} strokeWidth="5" />
      <circle cx="28" cy="42" r="16" fill={color} stroke={strokeColor} strokeWidth="5" />
      <circle cx="50" cy="50" r="13" fill="#FFE66D" stroke={strokeColor} strokeWidth="5" />
    </svg>
  );
}

function BalloonSvg({
  color,
  strokeColor = "#263044",
  size = 64,
  className,
}: PatternSvgProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 90 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <ellipse cx="45" cy="38" rx="31" ry="34" fill={color} stroke={strokeColor} strokeWidth="6" />
      <path d="M38 69L52 69L45 82L38 69Z" fill={color} stroke={strokeColor} strokeWidth="5" strokeLinejoin="round" />
      <path d="M45 83C37 91 54 95 45 105" stroke={strokeColor} strokeWidth="4" strokeLinecap="round" />
      <path d="M31 24C35 15 45 12 53 15" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" opacity="0.45" />
    </svg>
  );
}

export const patterns = [
  { id: "heart", label: "Cœurs", Component: HeartSvg },
  { id: "bear", label: "Nounours", Component: BearSvg },
  { id: "candy", label: "Bonbons", Component: CandySvg },
  { id: "star", label: "Étoiles", Component: StarSvg },
  { id: "flower", label: "Fleurs", Component: FlowerSvg },
  { id: "balloon", label: "Ballons", Component: BalloonSvg },
] as const;

export type PatternId = (typeof patterns)[number]["id"];

export function getPatternById(patternId: string) {
  return patterns.find((pattern) => pattern.id === patternId) ?? patterns[0];
}
