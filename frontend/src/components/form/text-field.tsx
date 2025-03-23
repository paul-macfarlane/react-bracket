import { Input, InputProps } from "@/components/ui/input";
import { Label, LabelProps } from "@/components/ui/label";
import { useFieldContext } from ".";

type TextFieldProps = {
  inputProps: InputProps;
  labelProps: LabelProps;
};

export function TextField({ inputProps, labelProps }: TextFieldProps) {
  const field = useFieldContext<string>();
  return (
    <div className={"grid w-full max-w-sm items-center gap-1.5"}>
      <Label {...labelProps} />
      <Input
        {...inputProps}
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
      />
      {field.state.meta.errors.length > 0 && (
        <div className="text-destructive text-sm">
          {field.state.meta.errors.map((error) => error.message).join(", ")}
        </div>
      )}
    </div>
  );
}
