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

  let isDragging = false;

  return props.mobile ? (
    <DefaultWindow closeWindow={null} mobile={true} />
  ) : (
    <>
      <style jsx>{`
        .draggable-icon {
          cursor: move;
        }
      `}</style>
      <Draggable
        handle=".draggable-icon"
        defaultPosition={{ x: 10, y: 150 }}
        position={null}
        grid={[25, 25]}
        scale={1}
        disabled={false}
        onDrag={() => (isDragging = true)}
        onStop={() => {
          if (!isDragging) {
            openWindow();
          }
          isDragging = false;
        }}
      >
        <div className="draggable-icon">
          <img
            height={100}
            src={iconImage}
            alt="DevFest 23 Icon"
            draggable={false}
          />
          <figcaption>DEVFEST 23</figcaption>
        </div>
      </Draggable>

      {visibleWindow ? (
        <DefaultWindow closeWindow={closeWindow} mobile={false} />
      ) : null}
    </>
  );
}

export default DefaultIcon;
