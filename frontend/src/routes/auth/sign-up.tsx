import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CustomLink } from "@/components/ui/link";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/sign-up")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-full h-full p-4 sm:p-8 flex flex-col gap-2 sm:gap-4 justify-center items-center">
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>Sign up with email and password</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input placeholder="Enter your email" id="email" type="email" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                placeholder="Enter your password"
                id="password"
                type="password"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="password">Confirm Password</Label>
              <Input
                placeholder="Confirm your password"
                id="confirm-password"
                type="password"
              />
            </div>

            <Button type="submit">Sign Up</Button>
          </form>
        </CardContent>
        <CardFooter>
          <div className="w-full flex flex-col items-center gap-2 text-sm">
            <div>
              Already have an account?{" "}
              <CustomLink customtype="link" to="/auth">
                Sign In
              </CustomLink>
            </div>
          </div>
        </CardFooter>
      </Card>

      <CustomLink customtype="link" to="/">
        Back to Home
      </CustomLink>
    </div>
  );
}
