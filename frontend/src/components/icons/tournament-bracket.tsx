export interface TournamentBracketProps {
  className?: string;
  pathClassName?: string;
}

export default function TournamentBracket({
  className = "",
  pathClassName = "fill-current",
}: TournamentBracketProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9 2H2v2h5v4H2v2h7V7h5v10H9v-3H2v2h5v4H2v2h7v-3h7v-6h6v-2h-6V5H9V2z"
        className={pathClassName}
      />
    </svg>
  );
}
