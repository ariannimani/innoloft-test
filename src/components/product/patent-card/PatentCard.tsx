import { IoRibbonOutline } from "react-icons/io5";

const PatentCard = () => {
  return (
    <div className="bg-indigo-200 pr-2 w-fit flex gap-2 items-center rounded-tl-md rounded-br-md gray-700">
      <div className="bg-indigo-900 p-2 rounded-tl-md rounded-br-md w-fit text-gray-200 text-2xl">
        <IoRibbonOutline />
      </div>
      Patent
    </div>
  );
};

export default PatentCard;
