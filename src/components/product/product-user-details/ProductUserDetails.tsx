import { IoLocationOutline } from "react-icons/io5";

import { UserInfo } from "components/user";
import { Map } from "components";
import { useProduct } from "hooks";

const ProductUserDetails = () => {
  const {
    product: {
      company,
      user: { profilePicture: image, firstName, lastName },
    },
  } = useProduct();

  const address = `${company.address.street}, ${company.address.city.name} ${company.address.zipCode}, ${company.address.country.name}`;
  const coordinates = {
    lat: company.address.latitude,
    lng: company.address.longitude,
  };

  const userFullName = `${firstName} ${lastName}`;

  return (
    <div className="border-l p-5 md:p-10 md:w-4/12">
      <span className="font-bold">Offered By</span>
      <img
        src={company.logo}
        alt={company.name}
        className="fill-white object-scale-down w-auto h-8 mt-4 md:mt-6"
      />
      <UserInfo image={image} name={userFullName} company={company.name} />

      <span className="flex gap-1 mt-4 md:mt-6">
        <IoLocationOutline />
        {address}
      </span>
      {coordinates && <Map coordinates={coordinates} />}
    </div>
  );
};

export default ProductUserDetails;
