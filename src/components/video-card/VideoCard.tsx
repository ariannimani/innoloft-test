import React, { FC, ReactNode } from "react";

interface VideoCardProps {
  children: ReactNode;
}
const VideoCard: FC<VideoCardProps> = ({ children }) => {
  return (
    <div className="border-solid border-2 border-gray-200 rounded-md w-full bg-white mt-6 p-6">
      <h1 className="font-bold">Video</h1>
      {children}
    </div>
  );
};

export default VideoCard;
