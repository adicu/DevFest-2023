import React from "react";
import Icon from "./Icon";

function DefaultWindow(props) {
  return (
    <>
      {/* ================== WINDOW & ICON PROPERTIES ================== */}
      <Icon
        // --- Icon Properties ---
        icoSrc={require("../Assets/DevFest-Logo-128px.png")} // Icon image path
        icoAlt="DevFest 23 Icon" // Image alt message
        icoCap="DEVFEST 23" // Icon caption
        icoX={10} // Starting X position of icon
        icoY={150} // Starting Y position of icon
        icoSize={100} // Icon size, both height and width
        // --- Window Properties ---
        winDefaultOpen={true} // True = Window open by default, False = it's not
        winTitle="DevFest 23" // Window title
        winX={150} // Starting X position of window
        winY={100} // Starting Y position of window
        winWidth="" // Window width ("" = default width in App.css)
        winHeight="500px" // Window height ("" = default height in App.css)
        winBGcol="" // Window background color (default("") = color in App.css)
        winBGimg="" // Window background image (default("") = no background image)
        winBGrepeat="" // Window background-repeat property (options: 'repeat' or 'no-repeat')
        winBGsize="" // Window background size (options: 'cover', 'contain', etc.)
        // --- Mobile-Specific Window Properties ---
        mobile={props.mobile} // (Inherited Prop; Don't change)
        winWidthMobile="90vw" // Window width on mobile
        winHeightMobile="400px" // Window height on mobile
        winXMobile={10} // Starting X position of window in mobile mode
        winYMobile={10} // Starting Y position of window in mobile mode
      >
        {/* ============== STYLING (for Window Content) ============= */}
        {props.mobile ? (
          // mobile styling
          <style jsx>{`
            h1 {
              margin-top: 0;
              font-size: 22px;
            }
            p {
              font-size: 15px;
            }
            .window-register button {
              font-size: 18px;
              margin-bottom: 0;
            }
          `}</style>
        ) : (
          // desktop styling (currently doesn't overwrite anything in App.css)
          <style jsx>{``}</style>
        )}

        {/* ================== WINDOW CONTENT ======================== */}
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
