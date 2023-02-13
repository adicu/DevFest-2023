import React from "react";
import Icon from "./Icon";
import styled from "@emotion/styled";
import links from "../Data/ExternalLinks.json"

function WindowDefault(props) {
  /* ============== STYLING (for Window Content) ============= */

  // Heading component
  const H1 = props.mobile
    ? // mobile
      styled.h1`
        margin-top: 0;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        font-size: 22px;
      `
    : // desktop
      styled.h1`
        font-family: Arial, Helvetica, sans-serif; 
        font-size: 40px;
        font-weight: bold;
      `;

  // Paragraph component
  const P = props.mobile
    ? // mobile
      styled.p`
      font-size: 20px;
      font-family: 'EB Garamond', serif;
      font-weight: 500;
      margin-top: 0px;
      margin-bottom: 0px;
      text-shadow: #f8ecd4 3px 0px 0px, #f8ecd4 2.83487px 0.981584px 0px, #f8ecd4 2.35766px 1.85511px 0px, #f8ecd4 1.62091px 2.52441px 0px, #f8ecd4 0.705713px 2.91581px 0px, #f8ecd4 -0.287171px 2.98622px 0px, #f8ecd4 -1.24844px 2.72789px 0px, #f8ecd4 -2.07227px 2.16926px 0px, #f8ecd4 -2.66798px 1.37182px 0px, #f8ecd4 -2.96998px 0.42336px 0px, #f8ecd4 2.88051px -0.838247px 0px;
      `
    : // desktop
      styled.p`
        font-family: 'EB Garamond', serif;
        font-size: 24px;
        font-weight: 500;
        margin-top: 0px;
        margin-bottom: 0px;
        text-shadow: #f8ecd4 3px 0px 0px, #f8ecd4 2.83487px 0.981584px 0px, #f8ecd4 2.35766px 1.85511px 0px, #f8ecd4 1.62091px 2.52441px 0px, #f8ecd4 0.705713px 2.91581px 0px, #f8ecd4 -0.287171px 2.98622px 0px, #f8ecd4 -1.24844px 2.72789px 0px, #f8ecd4 -2.07227px 2.16926px 0px, #f8ecd4 -2.66798px 1.37182px 0px, #f8ecd4 -2.96998px 0.42336px 0px, #f8ecd4 2.88051px -0.838247px 0px;        
        
      `;

  return (
    <>
      {/* ================== WINDOW & ICON PROPERTIES ================== */}
      <Icon
        // --- Icon Properties ---
        icoSrc={require("../Assets/DevFest-Logo-Outline-128.png")} // Icon image path
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
        winWidthMobile="95vw" // Window width on mobile
        winHeightMobile="450px" // Window height on mobile
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
        <P><span style={{color:"red"}}>REGISTRATION IS NOW CLOSED.</span></P>
        <div className="window-register">
          <button className="disabled-button" disabled={true}>Register</button>
        </div>
      </Icon>
    </>
  );
}

export default WindowDefault;
