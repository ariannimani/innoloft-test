import { TrlProps } from "components/product/product-details/components/edit-info/EditInfo";
import React, { ChangeEvent } from "react";

interface SelectProps {
  options: TrlProps[] | null;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}

const Select: React.FC<SelectProps> = ({ options, onChange, className }) => {
  if (!options) return <></>;

  return (
    <select
      onChange={onChange}
      className={`border rounded px-4 py-2 focus:outline-none focus:border-blue-500 ${className}`}
    >
      {options.map((option) => (
        <option key={option.id} value={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
