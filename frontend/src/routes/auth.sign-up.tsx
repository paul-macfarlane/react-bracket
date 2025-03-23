import { useAppForm } from "@/components/form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { CustomLink } from "@/components/ui/link";
import { signUp } from "@/lib/auth-client";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";

export const Route = createFileRoute("/auth/sign-up")({
  component: RouteComponent,
});

const signUpSchema = z
  .object({
    firstName: z.string().trim().min(1, "Required"),
    lastName: z.string().trim().min(1, "Required"),
    email: z.string().trim().email("Must be a valid email"),
    password: z
      .string()
      .trim()
      .min(8, "Must be at least 8 characters")
      .max(32, "Must be at most 32 characters"),
    confirmPassword: z.string().trim(),
  })
  .refine((val) => val.password === val.confirmPassword, {
    message: "Passwords must match.",
    path: ["confirmPassword"],
  });

function RouteComponent() {
  const router = useRouter();

  const [submitError, setSubmitError] = useState("");
  const form = useAppForm({
    validators: {
      onSubmit: signUpSchema,
    },
    onSubmit: async ({ value }) => {
      const { error } = await signUp.email({
        email: value.email,
        password: value.password,
        name: `${value.firstName} ${value.lastName}`,
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
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    } as z.infer<typeof signUpSchema>,
  });

  return (
    <>
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>Sign up with email and password</CardDescription>
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
              name="firstName"
              children={(field) => (
                <field.InputField
                  inputProps={{
                    id: "firstName",
                    type: "text",
                    placeholder: "Enter your first name",
                  }}
                  labelProps={{ htmlFor: "firstName", children: "First Name" }}
                />
              )}
            />
            <form.AppField
              name="lastName"
              children={(field) => (
                <field.InputField
                  inputProps={{
                    id: "lastName",
                    type: "text",
                    placeholder: "Enter your last name",
                  }}
                  labelProps={{ htmlFor: "lastName", children: "Last Name" }}
                />
              )}
            />
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
            <form.AppField
              name="confirmPassword"
              children={(field) => (
                <field.InputField
                  inputProps={{
                    id: "confirm-password",
                    type: "password",
                    placeholder: "Confirm your password",
                  }}
                  labelProps={{
                    htmlFor: "confirm-password",
                    children: "Confirm Password",
                  }}
                />
              )}
            />

            <form.AppForm>
              <form.SubscribeButton
                children="Sign Up"
                submitError={submitError}
              />
            </form.AppForm>
          </form>
        </CardContent>

        <CardFooter>
          <div className="w-full flex flex-col items-center gap-2 text-sm">
            <div>
              Already have an account?{" "}
              <CustomLink customtype="link" to="/auth/sign-in">
                Sign In
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
