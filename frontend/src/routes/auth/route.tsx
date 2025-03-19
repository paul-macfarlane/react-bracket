import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/auth")({
  component: RouteComponent,
  // todo add before load that checks if the user is logged in
});

function RouteComponent() {
  return (
    <div className="w-full h-full p-4 sm:p-8 flex flex-col gap-2 sm:gap-4 justify-center items-center">
      <Outlet />
    </div>
  );
}
