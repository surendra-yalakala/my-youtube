import React from "react";
import { count } from "../utils/helper";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { thumbnails, channelTitle, title } = snippet;

  return (
    <div className="h-1/3 mx-2 my-2 max-w-screen-sm rounded-lg">
      <img
        className="rounded-t-lg w-full"
        alt="thumbnail"
        src={thumbnails.medium.url}
      />
      <ul>
        <li className="pt-1 px-1 line-clamp-2 max-h-14 font-medium">{title}</li>
        <li className="pt-1 px-1 font-sans text-sm">{channelTitle}</li>
        <li className="px-1 pt-1 pb-2 font-sans text-xs">
          {count(statistics.viewCount)} Views
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
