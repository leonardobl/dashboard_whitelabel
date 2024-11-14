import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ITextAreaProps extends ComponentProps<"textarea"> {
  label?: string;
  error?: string;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, ITextAreaProps>(
  (props: ITextAreaProps, ref) => {
    return (
      <div>
        <textarea
          className={twMerge(
            "resize-none border-blue border rounded-[20px] w-full h-52 outline-none p-4 focus:border-blue-light transition-all",
            props.className,
            props.error && "border-red focus:border-red",
            props.disabled && "border-gray"
          )}
          {...props}
          ref={ref}
        />

        {props?.error && <span id="error-message">{props.error}</span>}
      </div>
    );
  }
);
