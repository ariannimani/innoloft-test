import { FC } from "react";

interface UserInfoProps {
  image: string;
  name: string;
  company: string;
}

const UserInfo: FC<UserInfoProps> = ({ image, name, company }) => {
  return (
    <div className="flex sm: flex-row md:flex-col xl:flex-row gap-2 items-center mt-4">
      <img
        src={image}
        alt={name}
        width={60}
        height={60}
        className="rounded-full"
      />
      <div className="md:w-auto">
        <h6 className="font-bold">{name}</h6>
        <h6 className="">{company}</h6>
      </div>
    </div>
  );
};

export default UserInfo;
