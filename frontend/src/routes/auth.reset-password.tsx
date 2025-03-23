import { useAppForm } from "@/components/form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { CustomLink } from "@/components/ui/link";
import { resetPassword } from "@/lib/auth-client";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { zodValidator } from "@tanstack/zod-adapter";

const resetPasswordSearchSchema = z.object({
  token: z.string().trim().min(1).catch(""),
});

export const Route = createFileRoute("/auth/reset-password")({
  component: RouteComponent,
  validateSearch: zodValidator(resetPasswordSearchSchema),
});

const resetPasswordSchema = z
  .object({
    newPassword: z
      .string()
      .trim()
      .min(8, "Must be at least 8 characters")
      .max(32, "Must be at most 32 characters"),
    confirmNewPassword: z.string().trim(),
  })
  .refine((val) => val.newPassword === val.confirmNewPassword, {
    message: "Passwords must match.",
    path: ["confirmNewPassword"],
  });

function RouteComponent() {
  const { token } = Route.useSearch();

  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const form = useAppForm({
    validators: {
      onSubmit: resetPasswordSchema,
    },
    onSubmit: async ({ value }) => {
      const { error } = await resetPassword({
        newPassword: value.newPassword,
        token,
      });
      if (error?.message) {
        setSubmitError(error.message);
        return;
      }

      setSubmitted(true);
    },
    defaultValues: {
      newPassword: "",
      confirmNewPassword: "",
    } as z.infer<typeof resetPasswordSchema>,
  });

  return (
    <>
      <Card className="w-96">
        <CardHeader>
          <CardTitle>
            {submitted ? "Password Reset" : "Forgot Password"}
          </CardTitle>
          <CardDescription>
            {submitted
              ? "Your password has been reset."
              : "Enter a new password for your account."}
          </CardDescription>
        </CardHeader>

        {token.length === 0 && (
          <CardContent>
            <p className="text-destructive text-sm">
              Invalid or missings token in url.
            </p>
          </CardContent>
        )}

        {!submitted && token.length > 0 && (
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
                name="newPassword"
                children={(field) => (
                  <field.InputField
                    inputProps={{
                      id: "new-password",
                      type: "password",
                      placeholder: "Enter your new password",
                    }}
                    labelProps={{
                      htmlFor: "new-password",
                      children: "New Password",
                    }}
                  />
                )}
              />
              <form.AppField
                name="confirmNewPassword"
                children={(field) => (
                  <field.InputField
                    inputProps={{
                      id: "confirm-new-password",
                      type: "password",
                      placeholder: "Confirm your new password",
                    }}
                    labelProps={{
                      htmlFor: "confirm-new-password",
                      children: "Confirm New Password",
                    }}
                  />
                )}
              />

              <form.AppForm>
                <form.SubscribeButton
                  children="Submit"
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
