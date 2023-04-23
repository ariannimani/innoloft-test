import React from "react";
import { AiOutlineMessage, AiOutlineBell } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import Image from "../../assets/Profil-Picture.png";

const Header = () => {
  return (
    <div className="w-full h-14 bg-indigo-900 text-white flex justify-between p-3">
      <img
        src="https://img.innoloft.com/logo.svg"
        alt="logo"
        className="fill-white object-scale-down w-auto  h-8"
      />
      <input type="text" placeholder="search" className="w-96 p-4 rounded-md" />
      <div className="flex gap-3 items-center">
        <AiOutlineMessage />
        <span className="flex gap-1 items-center">
          EN <IoIosArrowDown />
        </span>
        <AiOutlineBell />
        <div className="flex gap-1 items-center">
          <img src={Image} alt="image2" className="h-8" />
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Header;
