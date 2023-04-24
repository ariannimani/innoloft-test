import { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type: "button" | "submit" | "reset";
}
const Button: FC<ButtonProps> = ({ children, onClick, type, className }) => {
  return (
    <button
      type={type}
      className={`px-4 rounded-md  ${className}`}
      onClick={onClick ? onClick : () => {}}
    >
      {children}
    </button>
  );
};

export default Button;
