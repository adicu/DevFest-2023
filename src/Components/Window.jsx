import React from "react";
import styled from "@emotion/styled";
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
  const xPos = props.mobile ? props.winXMobile : props.winX;
  const yPos = props.mobile ? props.winYMobile : props.winY;

  const width = props.mobile ? props.winWidthMobile : props.winWidth;
  const height = props.mobile ? props.winHeightMobile : props.winHeight;

  const Window = styled.div`
    width: 550px; // default width if no prop
    height: 460px; // default height if no prop
    width: ${width};
    height: ${height};
    background-color: ${props.winBGcol};
    background-image: url(${props.winBGimg});
    background-size: ${props.winBGsize};
    background-repeat: ${props.winBGrepeat};
    background-position: center;
  `;

  const WindowContent = styled.div`
    width: 95%;
    height: 410px; // default height if no prop
    height: calc(${height} - 50px);
  `;

  return (
    <>
      <Draggable
        handle=".window-titlebar"
        defaultPosition={{ x: xPos, y: yPos }}
        position={null}
        grid={[25, 25]}
        scale={1}
        disabled={props.mobile}
      >
        <Window className="window">
          <div className="window-titlebar">
            <div className="window-title" draggable={false}>
              {props.winTitle}
            </div>
            <div className="window-controls" draggable={false}>
              <button onClick={props.closeWindow}>X</button>
            </div>
          </div>
          <WindowContent className="window-content" draggable={false}>
            {props.children}
          </WindowContent>
        </Window>
      </Draggable>
    </>
  );
}

export default Window;
