import React, { Component } from "react";
// import "./App.css";
import "./style.css";
import myImage from "./imageInSrc.jpg";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div
          className="div"
          style={{ border: "solid 1px black", maxWidth: "100vw" }}
        >
          <h1 className="title red">Your name here</h1>

          <br />

          <img className="srcimage" src={myImage} alt="srcimage" />

          <br />

          <img
            className="publicimage"
            src="/imageInPublic.jpg"
            alt="publicimage"
          />
        </div>

        <video
          className="video-container"
          style={{ width: "320px", height: "240px" }}
          controls
        >
          <source
            src={
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            }
            type="video/mp4"
          />
        </video>
      </div>
    );
  }
}

export default App;
