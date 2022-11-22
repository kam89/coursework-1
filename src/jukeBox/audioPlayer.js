import { Component } from 'react';

export default class AudioPlayer extends Component {
  state = {
    status: "paused",
  };

  componentDidMount() {
    this.audioElement = new Audio(this.props.audioURL);
    this.audioElement.autoplay = true;
  }

  componentDidUpdate() {
    if (this.audioElement.src.substring(21) !== this.props.audioURL) {
      this.audioElement.pause();
      this.audioElement = new Audio(this.props.audioURL);
      return this.audioElement.play();
    }
  }

  handleOnPause = () => {
    if (this.state.status === "paused") {
      this.audioElement.play();
      return this.setState({ status: "played" });
    }
    this.audioElement.pause();
    return this.setState({ status: "paused" });
  };

  render() {
    return (
      <div>
        <p>Playing {this.props.audioURL}</p>
        <button onClick={() => this.handleOnPause()}>{this.state.status === "paused" ? "Pause" : "Play"}</button>
      </div>
    );
  }
}