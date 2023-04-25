import { ChangeEvent, FC } from "react";

import { TrlProps } from "components/product/product-details/components/edit-info/EditInfo";

interface SelectProps {
  options: TrlProps[] | null;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}

const Select: FC<SelectProps> = ({ options, onChange, className }) => {
  if (!options) return <></>;

  return (
    <select
      onChange={onChange}
      className={`border rounded px-4 py-2 focus:outline-none focus:border-blue-500 ${className}`}
      style={{ maxWidth: "100%" }}
    >
      {options.map((option) => (
        <option
          key={option.id}
          value={option.name}
          className="max-w-full truncate"
        >
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
