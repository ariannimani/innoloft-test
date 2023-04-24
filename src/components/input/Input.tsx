import { FC, InputHTMLAttributes, forwardRef } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  register?: UseFormRegister<FieldValues>;
  className: string;
  name: string;
}

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ type, placeholder, className, register, name, ...rest }) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className={`rounded-md pl-2 border-solid border-2 border-gray-200 bg-white ${className}`}
        {...(register && { ...register(name) })}
        {...rest}
      />
    );
  }
);

export default Input;
