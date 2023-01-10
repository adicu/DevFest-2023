import React from "react";
let Draggable = require("react-draggable");

/**
 * Window component
 * -----------------------
 * The Window component is intended to be used as a child of the Icon component.
 * Unless you know what you're doing or are attempting to implement functionality
 * not yet implemented, you should not have to edit this component directly or
 * copy its source code in order to create a new Icon/Window.
 * For an example of how to create a Window/Icon, see the "DefaultWindow" component.
 * @param props
 */
function Window(props) {
  return (
    <>
      <Draggable
        handle=".window-titlebar"
        defaultPosition={{ x: props.winX, y: props.winY }}
        position={null}
        grid={[25, 25]}
        scale={1}
        disabled={props.mobile}
      >
        <div>
          <style jsx>{`
            .window {
              width: ${props.winWidth};
              height: ${props.winHeight};
              background-color: ${props.winBGcol};
              background-image: url(${props.winBGimg});
              background-size: ${props.winBGsize};
              background-repeat: ${props.winBGrepeat};
              background-position: center;
            }
          `}</style>
          <div className="window">
            <div className="window-titlebar">
              <div className="window-title" draggable={false}>
                {props.winTitle}
              </div>
              <div className="window-controls" draggable={false}>
                <button onClick={props.closeWindow}>X</button>
              </div>
            </div>
            <div className="window-content" draggable={false}>
              {props.children}
            </div>
          </div>
        </div>
      </Draggable>
    </>
  );
}

export default Window;
