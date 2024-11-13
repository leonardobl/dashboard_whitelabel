import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import {
  ButtonTW,
  ButtonTWBlue,
  ButtonTWBlueLight,
  ButtonTWGray,
  ButtonTWText,
} from "./styles";

interface IButtonProps extends ComponentProps<"button"> {
  iconleft?: string;
  iconright?: string;
  theme: "blue-light" | "blue" | "outline" | "text" | "gray";
}
export const Button = (props: IButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(
        ButtonTW,
        props.theme === "blue" && ButtonTWBlue,
        props.theme === "text" && ButtonTWText,
        props.theme === "blue-light" && ButtonTWBlueLight,
        props.theme === "gray" && ButtonTWGray,
        props.className
      )}
    >
      {props?.iconright && <img src={props.iconright} alt="icone" />}
      {props.children}
      {props?.iconleft && <img src={props.iconleft} alt="icone" />}
    </button>
  );
};
