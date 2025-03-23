import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/app")({
  component: RouteComponent,
  beforeLoad: ({ context }) => {
    const { session } = context;
    if (!session.data?.user) {
      throw redirect({
        to: "/auth/sign-in",
      });
    }
  },
});

function RouteComponent() {
  // todo this layout will almost certainly change
  return (
    <div className="w-full h-full p-4 sm:p-8 flex flex-col gap-2 sm:gap-4 justify-center items-center">
      <Outlet />
    </div>
  );
}
