import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/my-brackets")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/app/my-brackets"!</div>;
}
