import React, { useRef, useState } from 'react';
let Draggable = require('react-draggable');


class Window extends React.Component {
  render(){
    return (
      <>
      <Draggable 
      handle=".window-titlebar"
      defaultPosition={{x: 50, y: 100}}
      position={null}
      grid={[25, 25]}
      scale={1}
      disabled={false}>
      <div>
      <div className='window'>
            <div className='window-titlebar'>
              <div className='window-title'>DevFest 23</div>
              <div className="window-controls">
                <button>X</button>
              </div>                    
            </div>
            <div className="window-content">
              <h1>DevFest is Back</h1>
            </div>        
      </div>
      </div>      
      </Draggable>                    
    </>
    );
  }
}

export default Window;