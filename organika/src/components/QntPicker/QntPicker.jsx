import React, { Component } from "react";
import "./QntPicker.css";

class QntPicker extends Component {
  render() {
    return (
      <div className="QntPicker">
        <div>
          <button>-</button>
          <label>1</label>
          <button>+</button>
        </div>
      </div>
    );
  }
}

export default QntPicker;
