import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  render() {
    return <div>HELLO WORLD REACT</div>;
  }
}

render(<App />, document.getElementById("root"));
