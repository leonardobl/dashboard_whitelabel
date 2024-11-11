import { ComponentProps } from "react";

interface IInputProps extends ComponentProps<"input"> {
  label?: string;
}

export const Input = (props: IInputProps) => {
  return <input {...props} />;
};
