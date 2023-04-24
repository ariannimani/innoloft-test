import { FC } from "react";

interface UserInfoProps {
  image: string;
  name: string;
  company: string;
}

const UserInfo: FC<UserInfoProps> = ({ image, name, company }) => {
  return (
    <div className="flex gap-2 items-center mt-4">
      <img
        src={image}
        alt={name}
        width={60}
        height={60}
        className="rounded-full"
      />
      <div>
        <h6 className="font-bold whitespace-nowrap">{name}</h6>
        <h6 className="whitespace-nowrap">{company}</h6>
      </div>
    </div>
  );
};

export default UserInfo;
