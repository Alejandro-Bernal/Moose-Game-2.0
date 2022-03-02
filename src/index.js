import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
// Libraries
import { GameEngine } from "react-game-engine";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";

// Components
import { Moose } from "./components/character-render/Moose";
import { MoveMoose } from "./components/character-system/MooseMovements";
import WalletConnection from "./components/wallet-connector/WalletConnection";
// Assets
import skyNight from "./assets/game-backgrounds/sky-night.jpg";

import "./index.css";

import reportWebVitals from "./reportWebVitals";

// Helper function
function getLibrary(provider) {
  return new Web3(provider);
}

export default class MooseFlight extends PureComponent {
  render() {
    return (
      <>
        <Web3ReactProvider getLibrary={getLibrary}>
          <WalletConnection />
        </Web3ReactProvider>
        <GameEngine
          style={{
            width: 800,
            height: 600,
            backgroundImage: `url(${skyNight})`,
            backgroundSize: "cover",
            margin: "auto",
          }}
          systems={[MoveMoose]}
          entities={{
            mainCharacter: { x: 0, y: 0, renderer: <Moose /> },
          }}
        ></GameEngine>
      </>
    );
  }
}

ReactDOM.render(<MooseFlight />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
