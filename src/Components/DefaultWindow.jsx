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
              <p>This week-long celebration of all things tech features workshops, speaker panels, and a hackathon to end all hackathons.</p>
              <p>Whether you're just getting started in the world of programming or you're a seasoned pro, DevFest has something for you.</p>
              <p>Come join us and learn new skills, discover cutting-edge technologies, and build amazing projects.</p>
              <p>Sign up now and be a part of history.</p>
            </div>
          </div>
        </div>
      </Draggable>
    </>
  );
}

export default DefaultWindow;
