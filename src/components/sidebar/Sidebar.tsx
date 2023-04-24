import { BiHomeAlt2 } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { RiOrganizationChart } from "react-icons/ri";

import UserInfo from "components/user/user-info/UserInfo";
import Image from "../../assets/Profil-Picture.png";

const Sidebar = () => {
  return (
    <div className="mt-8 mr-4 hidden md:block">
      <UserInfo image={Image} name={"Arian Nimani"} company={"Innoloft GmbH"} />
      <div>
        <ul className="mt-10 cursor-pointer">
          <li className="flex gap-1 p-4 hover:bg-indigo-200 rounded">
            <BiHomeAlt2 />
            Home
          </li>
          <li className="flex gap-1 p-4 hover:bg-indigo-200 rounded">
            <FiUsers />
            Members
          </li>
          <li className="flex gap-1 p-4 hover:bg-indigo-200 rounded">
            <RiOrganizationChart />
            Organizations
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
