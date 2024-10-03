import * as RadixSelect from "@radix-ui/react-select";
import * as Label from "@radix-ui/react-label";
import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import React from "react";

const SelectItem = React.forwardRef<
  HTMLDivElement,
  { children: string; className?: string; value: string }
>(({ children, className, value, ...props }, forwardedRef) => {
  return (
    <RadixSelect.Item
      className={`relative rounded-sm flex items-center pr-9 pl-6 select-none data-[disabled]:text-slate-300 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-primary-500 data-[highlighted]:text-white ${className}`}
      value={value}
      {...props}
      ref={forwardedRef}
    >
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      <RadixSelect.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
        <CheckIcon />
      </RadixSelect.ItemIndicator>
    </RadixSelect.Item>
  );
});
type option = {
  text: string;
  value: string;
};

interface SelectProps {
  label: string;
  options: option[];
  placeholder: string;
  name: string;
  className?: string;
}

export const Select = ({
  label,
  options,
  placeholder,
  className,
  name,
}: SelectProps) => {
  const id = crypto.randomUUID();
  return (
    <div className={className}>
      <Label.Root className="block mb-1 font-semibold" htmlFor={id}>
        {label}
      </Label.Root>
      <RadixSelect.Root defaultValue={options[0].value} name={name}>
        <RadixSelect.Trigger
          id={id}
          className="w-full inline-flex items-center justify-center py-1 pl-2 border-b-2 border-slate-200 gap-2 bg-white hover:bg-slate-50 data-[placeholder]:text-slate-400 focus:shadow-black"
        >
          <RadixSelect.Value placeholder={placeholder} />
          <RadixSelect.Icon>
            <ChevronDownIcon />
          </RadixSelect.Icon>
        </RadixSelect.Trigger>
        <RadixSelect.Portal>
          <RadixSelect.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
            <RadixSelect.Viewport className="p-2">
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.text}
                </SelectItem>
              ))}
            </RadixSelect.Viewport>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
    </div>
  );
};
