import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
// Libraries
import { GameEngine } from "react-game-engine";
// Components
import { Moose } from "./components/character-render/Moose";
import { MoveMoose } from "./components/character-system/MooseMovements";
// Assets
import skyNight from "./assets/game-backgrounds/sky-night.jpg";

import "./index.css";

import reportWebVitals from "./reportWebVitals";

export default class MooseFlight extends PureComponent {
  render() {
    return (
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
          mainCharacter: { x: 500, y: 100, renderer: <Moose /> },
        }}
      ></GameEngine>
    );
  }
}

ReactDOM.render(<MooseFlight />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
