import { useSession } from "@/lib/auth-client";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

interface MyRouterContext {
  session: ReturnType<typeof useSession>;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
