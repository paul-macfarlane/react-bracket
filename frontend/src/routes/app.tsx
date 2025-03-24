import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

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
  return (
    <SidebarProvider className="w-full h-full">
      <AppSidebar />
      <SidebarTrigger />
      <main className="w-full h-full p-4 sm:p-8 flex flex-col gap-2 sm:gap-4 justify-center items-center">
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
