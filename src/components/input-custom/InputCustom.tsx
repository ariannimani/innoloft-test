import { FC, useState, KeyboardEvent } from "react";

import { convertToCamelCase } from "utils";

import Button from "components/button/Button";
import Input from "components/input/Input";
import { TrlProps } from "components/product/product-details/components/edit-info/EditInfo";

interface InputCustomProps {
  placeholder: string;
  className?: string;
  name: string;
  value: TrlProps[];
  setValue: (name: string, value: TrlProps[]) => void;
}

const InputCustom: FC<InputCustomProps> = ({
  placeholder,
  className = "",
  name,
  value,
  setValue,
}) => {
  const [categories, setCategories] = useState<TrlProps[]>(value || []);
  const [inputValue, setInputValue] = useState("");

  const removeTag = (id: number) => {
    setCategories((prev) => prev.filter((tag) => tag.id !== id));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value.trim();

    if (e.key === "Enter" && val) {
      if (
        categories.find((tag) => tag.name.toLowerCase() === val.toLowerCase())
      ) {
        return;
      }

      const newCategory = {
        id: Math.max(...categories.map((tag) => tag.id), 0) + 1,
        name: val,
        description: "",
      };

      setCategories([...categories, newCategory]);
      setInputValue("");
      setValue(convertToCamelCase(name), [...categories, newCategory]);
    } else if (e.key === "Backspace" && !val && categories.length > 0) {
      removeTag(categories[categories.length - 1].id);
    }
  };

  return (
    <div className="w-full">
      <div>
        <ul className="">
          {categories.map((tag) => (
            <li key={tag.id}>
              <div className="flex justify-between mt-2">
                {tag.name}
                <Button
                  type="button"
                  onClick={() => {
                    removeTag(tag.id);
                    setValue(
                      convertToCamelCase(name),
                      categories.filter((c) => c.id !== tag.id)
                    );
                  }}
                  className="bg-red-500 text-white hover:opacity-70"
                >
                  <div className="transform rotate-45">+</div>
                </Button>
              </div>
            </li>
          ))}
          <li className="">
            <Input
              type="text"
              name={name}
              value={inputValue}
              className={`w-full mt-2 ${className}`}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InputCustom;
