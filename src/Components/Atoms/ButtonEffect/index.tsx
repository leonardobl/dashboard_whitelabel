import { ComponentProps } from "react";

interface IButtonProps extends ComponentProps<"button"> {
  iconleft?: string;
}
export const ButtonEffect = (props: IButtonProps) => {
  return (
    <button
      {...props}
      className="bg-dark rounded-[20px] px-[18px] h-[42px] text-white flex items-center gap-[8px] justify-center buttonEffect"
    >
      <span>{props.children}</span>
      {props?.iconleft && <img src={props.iconleft} alt="icone" />}
    </button>
  );
};
