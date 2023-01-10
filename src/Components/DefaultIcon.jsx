import styled from "@emotion/styled";
import React, { useState } from "react";
import DefaultWindow from "./DefaultWindow";

let Draggable = require("react-draggable");

function DefaultIcon(props) {
  const iconImage = require("../Assets/DevFest-Logo-128px.png");

  const [visibleWindow, setVisibleWindow] = useState(true);

  const closeWindow = () => {
    setVisibleWindow(false);
  };

  const openWindow = () => {
    setVisibleWindow(true);
  };

  const DivDraggable = styled.div`
    cursor: move;
  `;

  return props.mobile ? (
    <DefaultWindow closeWindow={null} mobile={true} />
  ) : (
    <>
      <Draggable
        handle=".draggable-icon"
        defaultPosition={{ x: 10, y: 150 }}
        position={null}
        grid={[50, 50]}
        scale={1}
        disabled={false}
      >
        <DivDraggable className="draggable-icon" onClick={openWindow}>
          <img
            height={100}
            src={iconImage}
            alt="DevFest 23 Icon"
            draggable={false}
          />
          <figcaption>DEVFEST 23</figcaption>
        </DivDraggable>
      </Draggable>

      {visibleWindow ? (
        <DefaultWindow closeWindow={closeWindow} mobile={false} />
      ) : null}
    </>
  );
}

export default DefaultIcon;
