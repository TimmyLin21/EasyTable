import { Cross2Icon } from "@radix-ui/react-icons";
import * as RadixToast from "@radix-ui/react-toast";
import { createContext, useContext, useMemo, useState } from "react";
import { ReactNode } from "react";
interface ToastContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  setTitle: (title: string) => void;
  description: string;
  setDescription: (description: string) => void;
  theme: "success" | "danger" | "warning" | "info";
  setTheme: (theme: "success" | "danger" | "warning" | "info") => void;
}
export const ToastContext = createContext<ToastContextType>({
  open: false,
  setOpen: () => {},
  title: "",
  setTitle: () => {},
  description: "",
  setDescription: () => {},
  theme: "success",
  setTheme: () => {},
});

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [theme, setTheme] = useState<"success" | "danger" | "warning" | "info">(
    "success"
  );

  return (
    <ToastContext.Provider
      value={{
        open,
        setOpen,
        title,
        setTitle,
        description,
        setDescription,
        theme,
        setTheme,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export const Toast = () => {
  const { theme, open, setOpen, title, description } = useContext(ToastContext);

  const themeClass = useMemo(() => {
    const color = {
      success: "bg-success-500 text-white",
      danger: "bg-danger-500 text-white",
      warning: "bg-warning-500 text-white",
      info: "bg-info-500 text-white",
    };
    return color[theme];
  }, [theme]);
  return (
    <RadixToast.Provider swipeDirection="right">
      <RadixToast.Root
        open={open}
        onOpenChange={setOpen}
        className={`${themeClass} rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut`}
      >
        {title && (
          <RadixToast.Title className="[grid-area:_title] mb-[5px] font-medium text-xl">
            {title}
          </RadixToast.Title>
        )}
        {description && (
          <RadixToast.Description className="[grid-area:_description] m-0">
            {description}
          </RadixToast.Description>
        )}
        <RadixToast.Action
          asChild
          altText="Close"
          className="[grid-area:_action]"
        >
          <button className="cursor-pointer">
            <Cross2Icon />
          </button>
        </RadixToast.Action>
      </RadixToast.Root>
      <RadixToast.Viewport className="p-6 gap-3 fixed top-0 right-0 w-[400px] max-w-[100vw] list-none z-[2147483647] outline-none" />
    </RadixToast.Provider>
  );
};
