import React, { Component, Fragment } from "react";

class Botao extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </Fragment>
    );
  }
}

export default Botao;
