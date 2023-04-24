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
    <div className="w-full">
      <div className="font-bold">{title}</div>
      <div
        className={`grid ${
          items.length === 1 ? "grid-cols-1" : "grid-cols-2 md:grid-cols-2"
        } gap-2 text-xs mt-2 w-full`}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-gray-200 px-4 py-1 rounded-full w-fit"
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCard;
