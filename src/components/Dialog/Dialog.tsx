import * as RadixDialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

interface DialogProps {
  open?: boolean;
  setOpen?: (open: boolean) => void;
  trigger?: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

export const Dialog = ({
  trigger,
  title,
  children,
  open,
  setOpen,
}: DialogProps) => {
  return (
    <RadixDialog.Root open={open} onOpenChange={setOpen}>
      <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className="z-50 data-[state=open]:animate-overlayShow fixed inset-0 bg-black bg-opacity-60" />
        <RadixDialog.Content className="z-[60] data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md w-[90vw] max-h-[85vh] overflow-scroll max-w-[650px] p-6 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
          <RadixDialog.Title className="font-bold text-3xl mb-5">
            {title}
          </RadixDialog.Title>
          {children}
          <RadixDialog.Close asChild>
            <button
              className="cursor-pointer absolute top-6 right-6 h-7 w-7 "
              aria-label="Close"
            >
              <Cross2Icon width="28" height="28" />
            </button>
          </RadixDialog.Close>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};
