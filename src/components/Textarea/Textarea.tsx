import * as Label from "@radix-ui/react-label";
import { ComponentPropsWithoutRef } from "react";

interface TextareaProps {
  label: string;
  required?: boolean;
  className?: string;
}

export const Textarea = ({
  label,
  required = false,
  className,
  ...rest
}: TextareaProps & ComponentPropsWithoutRef<"textarea">) => {
  const id = crypto.randomUUID();
  return (
    <div className={className}>
      <Label.Root className="block mb-1 font-semibold" htmlFor={id}>
        {label} {required && <span className="text-red-500">*</span>}
      </Label.Root>
      <textarea
        id={id}
        {...rest}
        className={`border border-gray-300 rounded-md p-2 w-full`}
      ></textarea>
    </div>
  );
};
