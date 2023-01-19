import React from "react";
import Icon from "./Icon";
import styled from "@emotion/styled";

function WindowDefault(props) {
  /* ============== STYLING (for Window Content) ============= */

  // Heading component
  const H1 = props.mobile
    ? // mobile
      styled.h1`
        margin-top: 0;
        font-size: 22px;
      `
    : // desktop
      styled.h1``;

  // Paragraph component
  const P = props.mobile
    ? // mobile
      styled.p`
        font-size: 15px;
      `
    : // desktop
      styled.p``;

  return (
    <>
      {/* ================== WINDOW & ICON PROPERTIES ================== */}
      <Icon
        // --- Icon Properties ---
        icoSrc={require("../Assets/DevFest-Logo-128px.png")} // Icon image path
        icoAlt="DevFest 23 Icon" // Image alt message
        icoCap="DEVFEST 23" // Icon caption
        icoCapColor="black" // Icon caption text color
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
        winBGimg={require("../Assets/MainWindow.png")} // Window background image (default("") = no background image)
        winBGrepeat="no-repeat" // Window background-repeat property (options: 'repeat' or 'no-repeat')
        winBGsize="cover" // Window background size (options: 'cover', 'contain', etc.)
        // --- Mobile-Specific Window Properties ---
        mobile={props.mobile} // (Inherited Prop; Don't change)
        winWidthMobile="90vw" // Window width on mobile
        winHeightMobile="400px" // Window height on mobile
        winXMobile={10} // Starting X position of window in mobile mode
        winYMobile={10} // Starting Y position of window in mobile mode
      >
        {/* ================== WINDOW CONTENT ======================== */}
        <H1>DEVFEST IS BACK!</H1>
        <P>
          This week-long celebration of all things tech features workshops,
          speaker panels, and a hackathon to end all hackathons.
        </P>
        <P>
          Whether you're just getting started in the world of programming or
          you're a seasoned pro, DevFest has something for you.
        </P>
        <P>
          Come join us and learn new skills, discover cutting-edge technologies,
          and build amazing projects.
        </P>
        <P>Sign up now and be a part of history.</P>
        <div className="window-register">
          <button>Register</button>
        </div>
      </Icon>
    </>
  );
}

export default WindowDefault;
