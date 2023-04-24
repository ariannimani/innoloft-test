import React, { FC } from "react";
import { IoLocationOutline } from "react-icons/io5";

import { UserInfo } from "components/user";
import { Map } from "components";

interface ProductUserDetailsProps {
  companyName: string;
  companyLogo: string;
  name: string;
  profileImage: string;
  address: string;
}

const ProductUserDetails: FC<ProductUserDetailsProps> = ({
  companyName,
  companyLogo,
  name,
  profileImage,
  address,
}) => {
  return (
    <div className="border-l p-5 md:p-10 md:w-4/12">
      <span className="font-bold">Offered By</span>
      <img
        src={companyLogo}
        alt={companyName}
        className="fill-white object-scale-down w-auto h-8 mt-4 md:mt-6"
      />
      <UserInfo image={profileImage} name={name} company={companyName} />

      <span className="flex gap-1 mt-4 md:mt-6">
        <IoLocationOutline />
        {address}
      </span>
      <Map />
    </div>
  );
};

export default ProductUserDetails;
