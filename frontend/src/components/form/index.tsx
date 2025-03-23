import { SubscribeButton } from "@/components/form/subscribe-button";
import { TextField } from "@/components/form/text-field";
import { createFormHookContexts, createFormHook } from "@tanstack/react-form";

export const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts();

const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    InputField: TextField,
  },
  formComponents: {
    SubscribeButton,
  },
});

export { useAppForm };
