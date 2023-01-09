import React, { useRef, useState } from "react";
let Draggable = require("react-draggable");

function DefaultWindow(props) {
  return (
    <>
      <Draggable
        handle=".window-titlebar"
        defaultPosition={{ x: 150, y: 100 }}
        position={null}
        grid={[25, 25]}
        scale={1}
        disabled={props.mobile}
      >
        <div>
          <div className="window">
            <div className="window-titlebar">
              <div className="window-title">DevFest 23</div>
              <div className="window-controls">
                <button onClick={props.closeWindow}>X</button>
              </div>
            </div>
            <div className="window-content">
              <h1>DEVFEST IS BACK!</h1>
              <p>Text goes here: blah blah blah</p>
              {/* PLACE ALL OF THE DEFAULT WINDOW CONTENT HERE */}
            </div>
          </div>
        </div>
      </Draggable>
    </>
  );
}

export default DefaultWindow;
