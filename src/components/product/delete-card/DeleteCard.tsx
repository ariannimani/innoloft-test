import React, { useState, FC } from "react";
import { HiOutlineTrash } from "react-icons/hi";

interface DeleteCardProps {
  onDelete: () => void;
}
const DeleteCard: FC<DeleteCardProps> = ({ onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = () => {
    onDelete();
    setIsOpen(false);
  };

  return (
    <>
      <div
        className="p-2 w-fit rounded-bl-md gray-700 border text-2xl -mt-px -mr-px hover:opacity-50 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <HiOutlineTrash className="m-auto" />
      </div>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div className="bg-white p-6 rounded shadow-lg w-96 max-w-full mx-auto">
              <h2 className="text-lg font-semibold mb-4">Delete Product</h2>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete this product? This action cannot
                be undone.
              </p>
              <div className="flex justify-end">
                <button
                  className="text-gray-500 hover:text-gray-700 mr-4 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded cursor-pointer"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteCard;
