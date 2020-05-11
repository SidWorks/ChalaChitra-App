import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const RenderList = videos.map((video) => {
    return <VideoItem video={video} />;
  });
  return <div className="ui relaxed divided list">{RenderList}</div>;
};

export default VideoList;
