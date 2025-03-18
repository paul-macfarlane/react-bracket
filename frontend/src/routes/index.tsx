import { CustomLink } from "@/components/ui/link";
import { createFileRoute } from "@tanstack/react-router";
import { LogIn } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="w-full h-full p-4 sm:p-8 flex flex-col gap-2 sm:gap-4 justify-center items-center">
      <h1 className="text-4xl">React Bracket</h1>
      <p className="text-lg">
        A March Madness Bracket App built with React and TanStack Router!
      </p>
      <CustomLink customtype="button" to="/auth">
        <LogIn className="w-4 h-4" /> Login
      </CustomLink>
    </div>
  );
}
