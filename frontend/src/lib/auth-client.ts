import { createAuthClient } from "better-auth/react";
export const {
  signUp,
  signIn,
  signOut,
  useSession,
  forgetPassword,
  resetPassword,
} = createAuthClient({
  baseURL: import.meta.env.VITE_API_URL,
});
