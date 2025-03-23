import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../db";
import { user, verification, session, account } from "../db/schema";
import { config } from "dotenv";
import { resend } from "./resend";
import ResetPassword from "./emails/reset-password";

config({ path: ".env" });

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user, url }) => {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL!,
        to: user.email,
        subject: "react-bracket: Reset your password",
        react: ResetPassword({ url }),
      });
    },
  },
  database: drizzleAdapter(db, {
    provider: "sqlite",
    schema: {
      user: user,
      session: session,
      verification: verification,
      account: account,
    },
  }),
  trustedOrigins: process.env.ALLOWED_ORIGINS!.split(","),
});
