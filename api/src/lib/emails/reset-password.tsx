import { Button, Html, Container, Link } from "@react-email/components";
import * as React from "react";

type ResetPasswordProps = {
  url: string;
};

export default function ResetPassword({ url }: ResetPasswordProps) {
  return (
    <Html>
      <Container>
        <h1>Reset Password</h1>
        <p>Click the button below to reset your password for react-bracket.</p>
        <Button
          href={url}
          style={{
            color: "white",
            backgroundColor: "black",
            padding: "10px 20px",
            borderRadius: "4px",
          }}
        >
          Reset Password
        </Button>

        <p>Or use the link below</p>
        <Link href={url}>{url}</Link>
      </Container>
    </Html>
  );
}
