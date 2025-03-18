import * as React from "react";
import { createLink, LinkComponent } from "@tanstack/react-router";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface BasicLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  customtype: "button" | "link";
}

const BasicLinkComponent = React.forwardRef<HTMLAnchorElement, BasicLinkProps>(
  (props, ref) => {
    return props.customtype === "button" ? (
      <Button asChild>
        <a ref={ref} {...props} />
      </Button>
    ) : (
      <a ref={ref} {...props} className={cn("underline", props.className)} />
    );
  }
);

const CreatedLinkComponent = createLink(BasicLinkComponent);

export const CustomLink: LinkComponent<typeof BasicLinkComponent> = (props) => {
  return <CreatedLinkComponent preload={"intent"} {...props} />;
};
