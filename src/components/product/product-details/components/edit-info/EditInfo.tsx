import Input from "components/input/Input";
import Select from "components/select/Select";
import { useFetch } from "hooks/useFetch";
import { FC } from "react";
import { convertToCamelCase } from "utils";

export interface TrlProps {
  id: string;
  name: string;
  description: any;
}

interface TrlData {
  isLoading: boolean;
  error: Error | null;
  data: TrlProps[] | null;
}

interface EditInfoProps {
  elements: any;
  setValue: any;
}

const EditInfo: FC<EditInfoProps> = ({ elements, setValue }) => {
  const { data, error, isLoading }: TrlData = useFetch(
    `${process.env.REACT_APP_DOMAIN}/trl/`
  );

  return (
    <div className="grid grid-cols-2 mt-2">
      {elements.map((element: any) => {
        return (
          <div className="flex flex-col w-96 mt-4">
            <span className="font-semibold">{element.name}</span>
            {element.input === "select" ? (
              <Select
                options={data}
                onChange={(e) => {
                  setValue(convertToCamelCase(element.name), e.target.value);
                }}
                className="h-10"
              />
            ) : (
              <Input
                type={element.input}
                placeholder={`Add ${element.name} here...`}
                className="h-10"
                name={element.name}
                onChange={(e) => {
                  setValue(convertToCamelCase(element.name), e.target.value);
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
