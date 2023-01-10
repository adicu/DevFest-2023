import React from "react";
import Icon from "./Icon";

function DefaultWindow(props) {
  return (
    <>
      <Icon
        mobile={props.mobile}
        // ===== ICON Properties =========
        icoSrc={require("../Assets/DevFest-Logo-128px.png")}
        icoAlt="DevFest 23 Icon" // Image alt message
        icoCap="DEVFEST 23" // Icon caption
        icoX={10} // Starting X position of icon
        icoY={150} // Starting Y position of icon
        icoSize={100} // Icon size, both height and width
        // ===== Window Properties =======
        winTitle="DevFest 23" // Window title
        winX={150} // Starting X position of window
        winY={100} // Starting Y position of window
        winDefaultOpen={true} // True = Window open by default, False = it's not
        // ---- Uncomment the following lines to overwrite the default values ----
        // winWidth="200px" // Window width
        // winHeight="50vh" // Window height
        // winBGcol="red" // Window background color
        // winBGimg={require("../Assets/DevFest-Logo-128px.png")} // Window background image
        // winBGrepeat="no-repeat" // Window background-repeat property (options: 'repeat' or 'no-repeat')
        // winBGsize="cover" // Window background size (options: 'cover', 'contain', etc.)
      >
        <h1>DEVFEST IS BACK!</h1>
        <p>
          This week-long celebration of all things tech features workshops,
          speaker panels, and a hackathon to end all hackathons.
        </p>
        <p>
          Whether you're just getting started in the world of programming or
          you're a seasoned pro, DevFest has something for you.
        </p>
        <p>
          Come join us and learn new skills, discover cutting-edge technologies,
          and build amazing projects.
        </p>
        <p>Sign up now and be a part of history.</p>
        <div className="window-register">
          <button>Register</button>
        </div>
      </Icon>
    </>
  );
}

export default DefaultWindow;
