import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  color: "primary" | "success" | "danger" | "warning" | "info";
  className?: string;
};
export const Button = ({
  color = "primary",
  className = "",
  children,
  ...args
}: ButtonProps) => {
  const colorVariants = {
    primary: "bg-primary-500 hover:bg-primary-600 active:bg-primary-700",
    success: "bg-success-500 hover:bg-success-600 active:bg-success-700",
    danger: "bg-danger-500 hover:bg-danger-600 active:bg-danger-700",
    warning: "bg-warning-500 hover:bg-warning-600 active:bg-warning-700",
    info: "bg-info-500 hover:bg-info-600 active:bg-info-700",
  };
  return (
    <button
      className={`${colorVariants[color]} transition-colors text-white rounded-3xl py-2 px-3 h-fit ${className}`}
      {...args}
    >
      {children}
    </button>
  );
};
