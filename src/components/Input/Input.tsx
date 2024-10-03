import * as Label from "@radix-ui/react-label";
import { ComponentPropsWithoutRef } from "react";

interface InputProps {
  label: string;
  required?: boolean;
}

export const Input = ({
  label,
  required = false,
  ...rest
}: InputProps & ComponentPropsWithoutRef<"input">) => {
  const id = crypto.randomUUID();
  return (
    <div>
      <Label.Root className="block mb-1 font-semibold" htmlFor={id}>
        {label} {required && <span className="text-red-500">*</span>}
      </Label.Root>
      <input
        id={id}
        {...rest}
        className="border border-gray-300 rounded-md p-2 w-full"
        required={required}
      />
    </div>
  );
};
