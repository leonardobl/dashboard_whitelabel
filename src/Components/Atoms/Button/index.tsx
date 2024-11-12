import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { ButtonTW, ButtonTWBlue, ButtonTWBlueLight } from "./styles";

interface IButtonProps extends ComponentProps<"button"> {
  iconleft?: string;
  theme: "blue-light" | "blue" | "outline" | "text";
}
export const Button = (props: IButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(
        ButtonTW,
        props.theme === "blue" && ButtonTWBlue,
        props.theme === "blue-light" && ButtonTWBlueLight,
        props.className
      )}
    >
      {props.children}
      {props?.iconleft && <img src={props.iconleft} alt="icone" />}
    </button>
  );
};
