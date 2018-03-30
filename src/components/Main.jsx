import _ from "lodash";
import React, { Component } from "react";
import { render } from "react-dom";
import Header from "./header";
import Footer from "./footer";
import VideoDetails from "./video_details";
import VideoList from "./video_list";
import YTSearch from "youtube-api-search";
import "bootstrap/dist/css/bootstrap.min.css";

const API_KEY = "AIzaSyByK7tBmX6VhDTjlT1fBO6xFwYVfxAnt74";

const styles = {
  fontFamily: "sans-serif",
  height: "100vh"
};

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [], selectedVideo: null };
    this.videoSearch("raspberry pi3");
  }

  videoSearch = term => {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({ videos: videos, selectedVideo: videos[1] });
      console.log(videos);
    });
  };

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 700);

    return (
      <div style={styles}>
        <Header onSearchTerm={videoSearch} />
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
