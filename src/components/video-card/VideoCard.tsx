import React, { FC } from "react";
import ReactPlayer from "react-player";

interface VideoCardProps {
  video: string;
}
const VideoCard: FC<VideoCardProps> = ({ video }) => {
  return (
    <div className="border-solid border-2 border-gray-200 rounded-md w-full bg-white mt-6 p-6">
      <h1 className="font-bold">Video</h1>
      <ReactPlayer url={video} className="m-auto" />
    </div>
  );
};

export default VideoCard;
