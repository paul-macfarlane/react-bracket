export interface StandingsProps {
  className?: string;
  pathClassName?: string;
}

export default function Standings({
  className = "",
  pathClassName = "",
}: StandingsProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="48" height="48" fill="white" fillOpacity="0.01" />
      <rect
        x="4"
        y="18"
        width="13"
        height="24"
        stroke="#000000"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
      <rect
        x="17"
        y="6"
        width="13"
        height="36"
        stroke="#000000"
        strokeWidth="4"
        strokeLinejoin="round"
        className={pathClassName}
      />
      <rect
        x="30"
        y="26"
        width="13"
        height="16"
        stroke="#000000"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
    </svg>
  );
}
