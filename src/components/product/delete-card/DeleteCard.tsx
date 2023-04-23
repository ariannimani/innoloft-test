import React from "react";
import { HiOutlineTrash } from "react-icons/hi";

const DeleteCard = () => {
  return (
    <div className="p-2 w-fit rounded-bl-md gray-700 border text-2xl -mt-px -mr-px hover:opacity-50">
      <HiOutlineTrash className="m-auto" />
    </div>
  );
};

export default DeleteCard;
