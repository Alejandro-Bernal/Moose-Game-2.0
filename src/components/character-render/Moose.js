import React, { PureComponent } from "react";
// asset
import moose from "../../assets/main-character/moose.png";

export class Moose extends PureComponent {
  render() {
    const size = 100;
    const posX = this.props.x - size / 2;
    const posY = this.props.y - size / 2;

    console.log(posX, posY);

    return (
      <img
        src={moose}
        alt="an actual moose"
        style={{
          position: "relative",
          width: size,
          height: size,
          margin: "auto",
          top: posY,
          left: posX,
        }}
      />
    );
  }
}
