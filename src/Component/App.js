import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube, { baseParams } from "../apis/youtube";
import VideoList from "./VideoList";

class App extends Component {
  state = {
    videos: [],
  };

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        ...baseParams,
        q: term,
      },
    });
    this.setState({ videos: response.data.items });
  };

  render() {
    //ui container PUT SOME  MARGIN ON BOTH SIDES
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />

        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
