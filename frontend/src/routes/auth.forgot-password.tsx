import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CustomLink } from "@/components/ui/link";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/forgot-password")({
  component: RouteComponent,
});

function RouteComponent() {
  // todo integrate form with tanstack form, handle submit to backend
  return (
    <>
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Forgot Password</CardTitle>
          <CardDescription>
            Enter your email to reset your password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input placeholder="Enter your email" id="email" type="email" />
            </div>

            <Button type="submit">Send Reset Link</Button>
          </form>
        </CardContent>
      </Card>

      <CustomLink customtype="link" to="/auth/sign-in">
        Back to Login
      </CustomLink>
    </>
  );
}
