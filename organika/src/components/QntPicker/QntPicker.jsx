import React, { Component } from "react";
import "./QntPicker.css";

class QntPicker extends Component {
  state = {
    qnty: 1,
  };
  render() {
    return (
      <div className="QntPicker">
        <h6>{this.state.name}</h6>

        <div>
          <button onClick={this.decrease}>-</button>
          <label>{this.state.qnty}</label>
          <button onClick={this.increase}>+</button>
        </div>
      </div>
    );
  }
  increase = () => {
    var current = this.state.qnty;
    current += 1;
    this.setState({ qnty: current });
  };

  decrease = () => {
    //var current = this.state.qnty;
    //This is Nathan's code
    //current -= 1 && current > 1;
    var current = this.state.qnty - 1;
    if (current > 0) {
      this.setState({ qnty: current });
    }
  };
}

export default QntPicker;
