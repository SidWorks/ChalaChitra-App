import React from "react";

const VideoItem = ({ video }) => {
  // destructuring props.videos to videos
  return (
    <div className="item">
      <img
        key={video.id.videoId}
        alt={video.snippet.description}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />

      {video.snippet.title}
    </div>
  );
};

export default VideoItem;
