import { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type: "button" | "submit" | "reset";
}
const Button: FC<ButtonProps> = ({ children, onClick, type }) => {
  return (
    <button
      type={type}
      className="bg-indigo-900 text-white px-4 rounded-md hover:bg-indigo-700"
      onClick={onClick ? onClick : () => {}}
    >
      {children}
    </button>
  );
};

export default Button;
