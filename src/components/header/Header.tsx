import { FC } from "react";
import { AiOutlineMessage, AiOutlineBell } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { ReactSVG } from "react-svg";

import Image from "../../assets/Profil-Picture.png";
import { Input } from "components";
import { ConfigData } from "App";

interface HeaderProps {
  data: ConfigData | null;
}

const Header: FC<HeaderProps> = ({ data }) => {
  return (
    <div
      className="w-full h-14 text-white flex justify-between p-3"
      style={{ backgroundColor: data ? data.mainColor : "" }}
    >
      {data && (
        <ReactSVG
          src={data.logo}
          className="object-scale-down w-48  h-8"
          color="#fff"
          fill="#fff"
        />
      )}
      <Input
        type="text"
        placeholder="Search Here..."
        className="w-96 hidden md:block"
        name="search"
      />
      <div className="hidden md:flex gap-3 items-center">
        {data?.hasUserSection && (
          <>
            <AiOutlineMessage />
            <span className="flex gap-1 items-center">
              EN <IoIosArrowDown />
            </span>
            <AiOutlineBell />
            <div className="flex gap-1 items-center">
              <img src={Image} alt="image2" className="h-8" />
              <IoIosArrowDown />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
