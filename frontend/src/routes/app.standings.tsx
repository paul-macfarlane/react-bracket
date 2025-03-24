import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/standings")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/app/standings"!</div>;
}
