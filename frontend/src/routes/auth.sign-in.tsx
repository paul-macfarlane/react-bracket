import { useAppForm } from "@/components/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CustomLink } from "@/components/ui/link";
import { signIn } from "@/lib/auth-client";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";

export const Route = createFileRoute("/auth/sign-in")({
  component: RouteComponent,
});

const signInSchema = z.object({
  email: z.string().email("Must be a valid email"),
  password: z.string().min(1, "Required"),
});

function RouteComponent() {
  const router = useRouter();

  const [submitError, setSubmitError] = useState("");
  const form = useAppForm({
    validators: {
      onSubmit: signInSchema,
    },
    onSubmit: async ({ value }) => {
      const { error } = await signIn.email({
        email: value.email,
        password: value.password,
      });
      if (error?.message) {
        setSubmitError(error.message);
        return;
      }

      router.navigate({
        to: "/app",
      });
    },
    defaultValues: {
      email: "",
      password: "",
    } as z.infer<typeof signInSchema>,
  });

  return (
    <>
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Login with your email and password</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitError("");
              form.handleSubmit();
            }}
            className="flex flex-col gap-4"
          >
            <form.AppField
              name="email"
              children={(field) => (
                <field.InputField
                  inputProps={{
                    id: "email",
                    type: "text",
                    placeholder: "Enter your email",
                  }}
                  labelProps={{ htmlFor: "email", children: "Email" }}
                />
              )}
            />
            <form.AppField
              name="password"
              children={(field) => (
                <field.InputField
                  inputProps={{
                    id: "password",
                    type: "password",
                    placeholder: "Enter your password",
                  }}
                  labelProps={{ htmlFor: "password", children: "Password" }}
                />
              )}
            />
            <CustomLink
              customtype="link"
              to="/auth/forgot-password"
              className="text-sm"
            >
              Forgot Password
            </CustomLink>

            <form.AppForm>
              <form.SubscribeButton
                children="Login"
                submitError={submitError}
              />
            </form.AppForm>
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
    </>
  );
}
