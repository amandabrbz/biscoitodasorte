import React, { Component, Fragment } from "react";
import Botao from "./components/Botao";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: ""
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      "Siga os bons e aprenda com eles.",
      "O bom-senso vale mais do que muito conhecimento.",
      "O riso é a menor distância entre duas pessoas.",
      "Deixe de lado as preocupações e seja feliz.",
      "Realize o óbvio, pense no improvável e conquiste o impossível.",
      "Acredite em milagres, mas não dependa deles.",
      "A maior barreira para o sucesso é o medo do fracasso."
    ];
  }

  quebraBiscoito() {
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "';
    this.setState(state);
  }

  render() {
    return (
      <div className="container">
        <img
          src={require("./assets/biscoito.png")}
          alt="Biscoito da sorte"
          className="biscoito"
        />
        <br />
        <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito} />
        <h3 className="frase">{this.state.textoFrase}</h3>
      </div>
    );
  }
}

export default App;
