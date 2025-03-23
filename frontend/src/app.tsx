import { RouterProvider } from "@tanstack/react-router";
import { useSession } from "./lib/auth-client";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { Toaster } from "@/components/ui/sonner";

const router = createRouter({
  routeTree,
  context: {
    session: undefined!,
  },
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export function App() {
  const session = useSession();
  if (session.isPending) {
    // session is used to determine routing, so need to block until it is loaded before rendering the router
    return <></>;
  }

  return (
    <>
      <RouterProvider router={router} context={{ session }} />;
      <Toaster />
    </>
  );
}
