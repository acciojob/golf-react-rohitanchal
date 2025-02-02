import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      posi: 0,
      ballPosition: { left: "0px" },
    };
    this.renderChoice = this.renderBallOrButton.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }

  // Handler for start button click
  buttonClickHandler() {
    this.setState({
      renderBall: true,
    });
  }

  // Function to render either the start button or the ball
  renderBallOrButton() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else {
      return <button className="start" onClick={this.buttonClickHandler}>Start</button>;
    }
  }

  // Component lifecycle method for adding event listener
  componentDidMount() {
    // Listen for keydown event
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  // Handler for the Right Arrow keydown event
  handleKeyDown(event) {
    if (event.key === "ArrowRight" || event.keyCode === 39) {
      this.moveBall();
    }
  }

  // Move ball to the right by 5px
  moveBall() {
    this.setState((prevState) => {
      const newPosition = prevState.posi + 5; // Increase position by 5px
      return {
        posi: newPosition,
        ballPosition: { left: `${newPosition}px` },
      };
    });
  }

  render() {
    return (
      <div className="playground">
        {this.renderBallOrButton()}
      </div>
    );
  }
}

export default App;
