import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./select.module.scss";

interface Props extends React.HTMLAttributes<HTMLSelectElement> {
  disabled?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, Props>(
  ({ className, disabled, ...props }, ref) => {
    return (
      <select
        {...props}
        className={clsx(styles["select"], className)}
        disabled={disabled}
        ref={ref}
      />
    );
  }
);
