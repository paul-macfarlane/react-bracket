import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth-client";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { toast } from "sonner";

export const Route = createFileRoute("/app/")({
  component: RouteComponent,
});

function RouteComponent() {
  const router = useRouter();
  const onSignOut = async () => {
    const { error } = await signOut();
    if (error?.message) {
      toast.error(`Unable to sign out: ${error.message}`);
      return;
    }

    router.navigate({
      to: "/auth/sign-in",
      reloadDocument: true, // force reload to clear auth session
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl">Dashboard</h2>
      <Button onClick={onSignOut}>Logout</Button>
    </div>
  );
}
