import React, { FC, ReactNode } from "react";

interface VideoCardProps {
  children: ReactNode;
}

const VideoCard: FC<VideoCardProps> = ({ children }) => {
  return (
    <div className="border-solid border-2 border-gray-200 rounded-md bg-white mt-6 p-6 overflow-x-auto ">
      <h1 className="font-bold">Video</h1>
      <div className="mt-4 sm:mt-6 md:px-4 xl:px-24">{children}</div>
    </div>
  );
};

export default VideoCard;
