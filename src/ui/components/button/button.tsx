import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./button.module.scss";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children?: string;
  disabled?: boolean;
  varient: "primary";
}

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, children, disabled, varient, ...props }, ref) => {
    const classNames = clsx(styles["button"], {
      [styles["button-primary"]]: varient === "primary",
    });

    return (
      <button {...props} className={classNames} disabled={disabled} ref={ref}>
        {children}
      </button>
    );
  }
);
