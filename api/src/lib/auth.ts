import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../db";
import { user, verification, session, account } from "../db/schema";
import { config } from "dotenv";

config({ path: ".env" });

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
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
