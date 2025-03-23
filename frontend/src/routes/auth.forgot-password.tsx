import { useAppForm } from "@/components/form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { CustomLink } from "@/components/ui/link";
import { forgetPassword } from "@/lib/auth-client";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";

export const Route = createFileRoute("/auth/forgot-password")({
  component: RouteComponent,
});

const forgotPasswordSchema = z.object({
  email: z.string().email("Must be a valid email"),
});

function RouteComponent() {
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const form = useAppForm({
    validators: {
      onSubmit: forgotPasswordSchema,
    },
    onSubmit: async ({ value }) => {
      const { error } = await forgetPassword({
        email: value.email,
        redirectTo: "/auth/reset-password",
      });
      if (error?.message) {
        setSubmitError(error.message);
        return;
      }

      setSubmitted(true);
    },
    defaultValues: {
      email: "",
    } as z.infer<typeof forgotPasswordSchema>,
  });

  return (
    <>
      <Card className="w-96">
        <CardHeader>
          <CardTitle>{submitted ? "Email Sent" : "Forgot Password"}</CardTitle>
          <CardDescription>
            {submitted
              ? "A link to reset your password has been sent to your email"
              : "Enter your email to reset your password"}
          </CardDescription>
        </CardHeader>
        {!submitted && (
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

              <form.AppForm>
                <form.SubscribeButton
                  children="Send Reset Link"
                  submitError={submitError}
                />
              </form.AppForm>
            </form>
          </CardContent>
        )}
      </Card>

      <CustomLink customtype="link" to="/auth/sign-in">
        Back to Login
      </CustomLink>
    </>
  );
}
