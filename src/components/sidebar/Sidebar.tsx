import React from "react";
import { BiHomeAlt2 } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { RiOrganizationChart } from "react-icons/ri";
import Image from "../../assets/Profil-Picture.png";
import UserInfo from "../user/user-info/UserInfo";

const Sidebar = () => {
  return (
    <div>
      <UserInfo image={Image} name={"testName"} company={"testCompany"} />
      <div>
        <ul className="mt-10 cursor-pointer">
          <li className="flex gap-1 p-4 hover:bg-sky-700 rounded">
            <BiHomeAlt2 />
            Home
          </li>
          <li className="flex gap-1 p-4 hover:bg-sky-700 rounded">
            <FiUsers />
            Members
          </li>
          <li className="flex gap-1 p-4 hover:bg-sky-700 rounded">
            <RiOrganizationChart />
            Organizations
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
