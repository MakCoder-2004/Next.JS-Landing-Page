import React, { ButtonHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

const buttonClasses = cva(
  "border h-12 rounded-full px-6 font-medium transition duration-300",
  {
    variants: {
      variant: {
        primary: "bg-lime-400 text-neutral-900 border-lime-400 hover:bg-lime-500",
        secondary: "border-white bg-transparent text-white hover:bg-white hover:text-neutral-900 hover:border-white",
      },
      size: {
        default: "h-12",
        sm: "h-10 px-5 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

type ButtonProps = VariantProps<typeof buttonClasses> & 
  ButtonHTMLAttributes<HTMLButtonElement>;

const CustomButton = ({
  variant,
  size,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button 
      className={buttonClasses({ variant, size, className })} 
      {...rest} 
    />
  );
};

export default CustomButton;