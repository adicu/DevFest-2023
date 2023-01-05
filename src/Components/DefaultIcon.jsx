import styled from "@emotion/styled";
import React, { useRef, useState } from "react";
import DefaultWindow from "./DefaultWindow";

let Draggable = require("react-draggable");

function DefaultIcon(props) {
  const DivDraggable = styled.div`
    cursor: move;
  `;

  const [visible, setVisible] = useState(true);

  const closeWindow = () => {
    setVisible(false);
  };

  const openWindow = () => {
    setVisible(true);
  };

  return props.mobile ? (
    <DefaultWindow closeWindow={null} mobile={true} />
  ) : (
    <>
      <Draggable
        handle=".draggable-icon"
        defaultPosition={{ x: 10, y: 150 }}
        position={null}
        grid={[25, 25]}
        scale={1}
        disabled={false}
      >
        <DivDraggable className="draggable-icon">
          <a onClick={openWindow}>
            <img
              height={100}
              src={require("../Assets/DevFest-Logo.png")}
              alt="DevFest 23 Icon"
            />
            <figcaption>DEVFEST 23</figcaption>
          </a>
        </DivDraggable>
      </Draggable>

      {visible ? (
        <DefaultWindow closeWindow={closeWindow} mobile={false} />
      ) : null}
    </>
  );
}

export default DefaultIcon;
