import React, { useState } from "react";
import Window from "./Window";

let Draggable = require("react-draggable");

/**
 * Icon component
 * -----------------------
 * The Icon component is a generalized component that is intended to be used
 * indirectly by the passing of props.
 * Unless you know what you're doing or are attempting to implement functionality
 * not yet implemented, you should not have to edit this component directly or
 * copy its source code in order to create a new Icon/Window.
 * For an example of how to use this component, see the "DefaultWindow" component.
 * @param props
 */
function Icon(props) {
  const [visibleWindow, setVisibleWindow] = useState(props.winDefaultOpen);

  const closeWindow = () => {
    setVisibleWindow(false);
  };

  const openWindow = () => {
    setVisibleWindow(true);
  };

  let isDragging = false;

  return props.mobile ? (
    <Window
      closeWindow={closeWindow}
      mobile={props.mobile}
      winX={props.winX}
      winY={props.winY}
      winTitle={props.winTitle}
      winHeight={props.winHeight}
      winWidth={props.winWidth}
      winBGimg={props.winBGimg}
      winBGcol={props.winBGcol}
      winBGsize={props.winBGsize}
      winBGrepeat={props.winBGrepeat}
    >
      {props.children}
    </Window>
  ) : (
    <>
      <style jsx>{`
        .draggable-icon {
          cursor: move;
          width: ${props.icoSize}px;
          height: ${props.icoSize}px;
        }
      `}</style>
      <Draggable
        handle=".draggable-icon"
        defaultPosition={{ x: props.icoX, y: props.icoY }}
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
            height={props.icoSize}
            width={props.icoSize}
            src={props.icoSrc}
            alt={props.icoAlt}
            draggable={false}
          />
          <figcaption>{props.icoCap}</figcaption>
        </div>
      </Draggable>

      {visibleWindow ? (
        <>
          <Window
            closeWindow={closeWindow}
            mobile={props.mobile}
            winX={props.winX}
            winY={props.winY}
            winTitle={props.winTitle}
            winHeight={props.winHeight}
            winWidth={props.winWidth}
            winBGimg={props.winBGimg}
            winBGcol={props.winBGcol}
            winBGsize={props.winBGsize}
            winBGrepeat={props.winBGrepeat}
          >
            {props.children}
          </Window>
        </>
      ) : null}
    </>
  );
}

export default Icon;
