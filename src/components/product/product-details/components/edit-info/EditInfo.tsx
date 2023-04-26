import { FC } from "react";
import { useFetch } from "hooks/useFetch";

import { convertToCamelCase } from "utils";
import { MyElement } from "utils/processProductDetails";

import { Input, Select, InputCustom } from "components";
import { TrlData, TrlProps } from "global";

interface EditInfoProps {
  elements: MyElement[];
  setValue: (name: string, value: string | TrlProps[]) => void;
}

const EditInfo: FC<EditInfoProps> = ({ elements, setValue }) => {
  const { data }: TrlData = useFetch(`${process.env.REACT_APP_DOMAIN}/trl/`);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
      {elements.map((element) => {
        return (
          <div className="flex flex-col mt-4" key={element.name}>
            <span className="font-semibold">{element.name}</span>
            {element.input === "select" ? (
              <Select
                options={data || []}
                onChange={(e) => {
                  setValue(
                    convertToCamelCase(element.name),
                    e.target.value as string
                  );
                }}
                className="h-10"
              />
            ) : element.input === "category" ? (
              <InputCustom
                placeholder={`Add ${element.name} here...`}
                className="h-10"
                name={element.name}
                setValue={setValue}
                value={element.items || []}
              />
            ) : (
              <Input
                type={element.input}
                defaultValue={element.items[0].name}
                placeholder={`Add ${element.name} here...`}
                className="h-10 "
                name={element.name}
                onChange={(e) => {
                  setValue(
                    convertToCamelCase(element.name),
                    e.target.value as string
                  );
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default EditInfo;
