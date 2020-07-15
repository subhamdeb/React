import React, { Component } from "react";

class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 1
    };
    this.changingState = this.changingState.bind(this);
    this.tripleKill = this.tripleKill.bind(this);
  }

  changingState() {
    this.setState({ score: this.state.score + 1 });
  }
  tripleKill() {
    this.setState(st => {
      return { score: st.score + 1 };
    });
    this.setState(st => {
      return { score: st.score + 1 };
    });
    this.setState(st => {
      return { score: st.score + 1 };
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.score}</p>
        <button onClick={this.changingState}>
          {" "}
          click here to increase one
        </button>
        <button onClick={this.tripleKill}>Kill Three</button>
      </div>
    );
  }
}

export default Score;
