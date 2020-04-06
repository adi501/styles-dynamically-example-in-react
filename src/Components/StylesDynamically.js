import React, { Component } from "react";

class StylesDynamically extends Component {
  state = {
    showDiv: false
  };

  toggleDivHandler = () => {
    const doesShow = this.state.showDiv;

    this.setState({ showDiv: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "green",

      color: "white",

      font: "inherit",

      border: "1px solid blue",

      padding: "8px",

      cursor: "pointer",

      ":hover": {
        backgroundColor: "lightgreen",

        color: "black"
      }
    };

    let divData = null;

    if (this.state.showDiv) {
      divData = <div>My Data</div>;

      style.backgroundColor = "red";

      style[":hover"] = {
        backgroundColor: "salmon",

        color: "black"
      };
    }

    return (
      <div className="App">
        <h1>Styles Dynamically</h1>

        <button style={style} onClick={this.toggleDivHandler}>
          Toggle Div
        </button>

        {divData}
      </div>
    );
  }
}

export default StylesDynamically;
