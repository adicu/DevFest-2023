import React from "react";
import Icon from "./Icon";
// import styled from "@emotion/styled";

function Tracks(props) {
  /* ============== STYLING (for Window Content) ============= */

  return (
    <>
      {/* ================== WINDOW & ICON PROPERTIES ================== */}
      <Icon
        // --- Icon Properties ---
        icoSrc={require("../Assets/Icons/Tracks-Icon.png")} // Icon image path
        icoAlt="Tracks Icon" // Image alt message
        icoCap="TRACKS" // Icon caption
        icoCapColor="black" // Icon caption text color
        icoX={10} // Starting X position of icon
        icoY={300} // Starting Y position of icon
        icoSize={80} // Icon size, both height and width
        // --- Window Properties ---
        winDefaultOpen={false} // True = Window open by default, False = it's not
        winTitle="Tracks" // Window title
        winX={300} // Starting X position of window
        winY={300} // Starting Y position of window
        winWidth="" // Window width ("" = default width in App.css)
        winHeight="355px" // Window height ("" = default height in App.css)
        winBGcol="#4E4E4E" // Window background color (default("") = color in App.css)
        winBGimg="" // Window background image (default("") = no background image)
        winBGrepeat="no-repeat" // Window background-repeat property (options: 'repeat' or 'no-repeat')
        winBGsize="cover" // Window background size (options: 'cover', 'contain', etc.)
        // --- Mobile-Specific Window Properties ---
        mobile={props.mobile} // (Inherited Prop; Don't change)
        winWidthMobile="95vw" // Window width on mobile
        winHeightMobile="355px" // Window height on mobile
        winXMobile={10} // Starting X position of window in mobile mode
        winYMobile={430} // Starting Y position of window in mobile mode
      >
        {/* ================== WINDOW CONTENT ======================== */}
        <div className="tracks-wrapper">
          <div className="track" id="ai-data">AI&Big Data</div>
          <div className="track" id="design">Design</div>
          <div className="track" id="ar-vr">AR&VR</div>
        </div>
      </Icon>
    </>
  );
}

export default Tracks;
