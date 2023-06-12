import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

function VideoContainer() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();

    setVideos(json.items);
  };
  return (
    <div className="grid grid-cols-3 list-none mx-4">
      {videos.map((video) => {
        return (
          <Link id={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
}

export default VideoContainer;
