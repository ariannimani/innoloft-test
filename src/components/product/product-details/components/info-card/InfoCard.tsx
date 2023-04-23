import React, { FC } from "react";

interface InfoCardProps {
  title: string;
  elements: string[];
}

const InfoCard: FC<InfoCardProps> = ({ title, elements }) => {
  const elements1 = ["sss", "ddd", "sss", "ddd", "sss", "ddd", "sss", "ddd"];
  return (
    <div className="w-fit">
      <div className="font-bold">{title}</div>
      <div className="grid grid-cols-3 gap-2">
        {elements1.map((element) => (
          <div className="bg-gray-200 w-fit px-4 py-1 rounded-full ">
            {element}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCard;
