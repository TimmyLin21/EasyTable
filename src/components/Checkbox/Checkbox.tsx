import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

export const Checkbox = ({
  label,
  className,
}: {
  label: string | React.ReactNode;
  className: string;
}) => {
  const id = crypto.randomUUID();
  return (
    <div className={`flex items-center gap-x-4 ${className}`}>
      <RadixCheckbox.Root
        id={id}
        className="h-4 w-4 border-black border bg-white flex items-center justify-center rounded-sm"
      >
        <RadixCheckbox.Indicator>
          <CheckIcon />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
