import React, { useRef, useState } from "react";
let Draggable = require("react-draggable");

function DefaultWindow() {

    const [visible, setVisible] = useState(true);

    const closeWindow = () => {
        console.log(`window closed ${visible}`);
        setVisible(!visible);
    }

  return (
    (visible) ?
    <>
      <Draggable
        handle=".window-titlebar"
        defaultPosition={{ x: 100, y: 100 }}
        position={null}
        grid={[25, 25]}
        scale={1}
        disabled={false}
      >
        <div>
          <div className="window">
            <div className="window-titlebar">
              <div className="window-title">DevFest 23</div>
              <div className="window-controls">
                <button onClick={closeWindow}>X</button>
              </div>
            </div>
            <div className="window-content">
              <h1>DevFest is Back</h1>

              {/* PLACE ALL OF THE DEFAULT WINDOW CONTENT HERE */}
            </div>
          </div>
        </div>
      </Draggable>
    </> :
    null
  );
}

export default DefaultWindow;
