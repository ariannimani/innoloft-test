import { FC, forwardRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface RichTextProps {
  defaultValue: string;
  setValue: any;
  name: string;
}

const RichText: FC<RichTextProps> = forwardRef(
  ({ defaultValue, setValue, name, ...rest }) => {
    const handleQuillChange = (value: string) => {
      setValue(name, value);
    };

    return (
      <ReactQuill
        theme="snow"
        defaultValue={defaultValue}
        className="rounded"
        onChange={handleQuillChange}
        {...rest}
      />
    );
  }
);

export default RichText;
