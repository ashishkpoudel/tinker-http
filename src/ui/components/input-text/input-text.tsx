import React, { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./input-text.module.scss";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  children?: string;
  disabled?: boolean;
}

export const InputText = forwardRef<HTMLInputElement, Props>(
  ({ className, children, disabled, ...props }, ref) => {
    return (
      <input
        {...props}
        className={clsx(styles["input"], className)}
        type="text"
        value={children}
        disabled={disabled}
        ref={ref}
      />
    );
  }
);
