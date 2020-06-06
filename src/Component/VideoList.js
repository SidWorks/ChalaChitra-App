import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  // destructuring props.videos to videos
  const RenderList = videos.map((video) => {
    return <VideoItem key={video.id.videoId} video={video} />;
  });
  return <div className="ui relaxed divided list">{RenderList}</div>;
};

export default VideoList;
