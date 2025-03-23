import { useFormContext } from ".";
import { Button, ButtonProps } from "../ui/button";

type SubscribeButtonProps = ButtonProps & {
  submitError?: string;
};

export function SubscribeButton(props: SubscribeButtonProps) {
  const form = useFormContext();
  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => (
        <div className={"flex flex-col items-center gap-1.5"}>
          <Button type="submit" disabled={isSubmitting} {...props} />
          {props.submitError && (
            <div className="text-destructive text-sm">{props.submitError}</div>
          )}
        </div>
      )}
    </form.Subscribe>
  );
}
