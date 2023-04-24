import React, { FC } from "react";

interface ItemsProps {
  id: number;
  name: string;
}
interface InfoCardProps {
  title: string;
  items: ItemsProps[];
}

const InfoCard: FC<InfoCardProps> = ({ title, items }) => {
  return (
    <div className="w-fit">
      <div className="font-bold">{title}</div>
      <div className="grid grid-cols-3 gap-2 text-xs mt-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-gray-200 w-fit px-4 py-1 rounded-full"
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCard;
