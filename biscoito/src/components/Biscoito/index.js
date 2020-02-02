import React, { Component, Fragment } from "react";

class Biscoito extends Component {
  render() {
    return (
      <Fragment>
        <img src={require("../assets/biscoito.png")} alt="Biscoito da sorte" />
      </Fragment>
    );
  }
}

export default Biscoito
