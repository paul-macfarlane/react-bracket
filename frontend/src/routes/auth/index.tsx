import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CustomLink } from "@/components/ui/link";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/")({
  component: RouteComponent,
});

function RouteComponent() {
  // todo use form composition
  return (
    <div className="w-full h-full p-4 sm:p-8 flex flex-col gap-2 sm:gap-4 justify-center items-center">
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Login with your email and password</CardDescription>
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
              <CustomLink
                customtype="link"
                to="/auth/forgot-password"
                className="text-sm"
              >
                Forgot Password
              </CustomLink>
            </div>

            <Button type="submit">Login</Button>
          </form>
        </CardContent>
        <CardFooter>
          <div className="w-full flex flex-col items-center gap-2 text-sm">
            <div>
              Don't have an account?{" "}
              <CustomLink customtype="link" to="/auth/sign-up">
                Sign Up
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
