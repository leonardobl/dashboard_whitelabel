import React, { ComponentProps, useState } from "react";

interface IInputProps extends ComponentProps<"input"> {
  label?: string;
  iconright?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  (props: IInputProps, ref) => {
    const [eyeOpen, setEyeOpen] = useState(false);

    function handleTypeChange() {
      setEyeOpen((prev) => !prev);
    }

    return (
      <label className="input-label">
        {props?.label && (
          <p>
            {props?.label}
            {props?.required && <span id="asterisk">*</span>}
          </p>
        )}
        <div className="container-input">
          {props.type === "password" ? (
            eyeOpen ? (
              <img
                src="/assets/svg/icon-eye-open.svg"
                alt="icone olho"
                className="icon-eye"
                onClick={handleTypeChange}
              />
            ) : (
              <img
                src="/assets/svg/icon-eye-close.svg"
                alt="icone olho"
                className="icon-eye"
                onClick={handleTypeChange}
              />
            )
          ) : null}
          <input
            {...props}
            className={`input ${
              (props?.iconright || props.type === "password") && "pr-[40px]"
            } ${props?.error && "error"}`}
            type={eyeOpen ? "text" : props.type}
            ref={ref}
            onWheel={(event) => event.currentTarget.blur()}
          />
          {props?.iconright && (
            <img src={props?.iconright} alt="icon" id="icon-right" />
          )}
        </div>
        {props?.error && <span id="error-message">{props.error}</span>}
      </label>
    );
  }
);
