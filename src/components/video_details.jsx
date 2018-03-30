import React from "react";

const VideoDetails = props => {
  if (!props.video) {
    return <div>Loading...</div>;
  }
  const videoId = props.video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="container" style={{ marginTop: "1%" }}>
      <div className="row">
        <div
          className="video-details col-md-8"
          style={{ borderRadius: "2px solid dark" }}
        >
          <div className="embed-responsive embed-responsive-21by9">
            <iframe className="embed-responsive-item" src={url} />
          </div>
        </div>
        <div className="video-details col-md-4">
          <div style={{ marginTop: "11%", fontSize: "21px " }}>
            <b>{props.video.snippet.title}</b>
            <br />
            <br />
          </div>
          <div>
            <i>{props.video.snippet.description}</i>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default VideoDetails;
