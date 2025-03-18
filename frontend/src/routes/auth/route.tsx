import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/auth")({
  component: RouteComponent,
  // todo add before load that checks if the user is logged in
});

function RouteComponent() {
  // todo create auth layout
  return <Outlet />;
}
