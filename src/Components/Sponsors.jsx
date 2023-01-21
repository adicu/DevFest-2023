import React from "react";
import Icon from "./Icon";
// import styled from "@emotion/styled";
import {Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../Styling/CustomTabsStyling.css';
import FAQ from '../Data/FAQ.json';
import FeatureFlags from '../Data/FeatureFlags.json';

function Sponsors(props) {
  /* ============== STYLING (for Window Content) ============= */

  // Heading component
  // const H1 = props.mobile
  //   ? // mobile
  //     styled.h1`
  //       margin-top: 0;
  //       font-size: 22px;
  //     `
  //   : // desktop
  //     styled.h1``;

  // // Paragraph component
  // const P = props.mobile
  //   ? // mobile
  //     styled.p`
  //       font-size: 15px;
  //     `
  //   : // desktop
  //     styled.p``;

  return (
    <>
      {/* ================== WINDOW & ICON PROPERTIES ================== */}
      <Icon
        // --- Icon Properties ---
        icoSrc={require("../Assets/Icons/Sponsors-Icon.png")} // Icon image path
        icoAlt="Sponsors Icon" // Image alt message
        icoCap="Sponsors" // Icon caption
        icoCapColor="black" // Icon caption text color
        icoX={120} // Starting X position of icon
        icoY={20} // Starting Y position of icon
        icoSize={100} // Icon size, both height and width
        // --- Window Properties ---
        winDefaultOpen={false} // True = Window open by default, False = it's not
        winTitle="SPONSORS" // Window title
        winX={300} // Starting X position of window
        winY={100} // Starting Y position of window
        winWidth="" // Window width ("" = default width in App.css)
        winHeight="500px" // Window height ("" = default height in App.css)
        winBGcol="" // Window background color (default("") = color in App.css)
        winBGimg="" // Window background image (default("") = no background image)
        winBGrepeat="" // Window background-repeat property (options: 'repeat' or 'no-repeat')
        winBGsize="" // Window background size (options: 'cover', 'contain', etc.)
        // --- Mobile-Specific Window Properties ---
        mobile={props.mobile} // (Inherited Prop; Don't change)
        winWidthMobile="95vw" // Window width on mobile
        winHeightMobile="400px" // Window height on mobile
        winXMobile={10} // Starting X position of window in mobile mode
        winYMobile={2070} // Starting Y position of window in mobile mode
      >
        {/* ================== WINDOW CONTENT ======================== */}
        <div>
          { !FeatureFlags.sponsors?
            <div className="locked">
              <img className="lock-icon" src={require("../Assets/Icons/lock.png")} alt="Content Locked"/>
              <div className="blurred"><img alt="Schedule Locked" src={require("../Assets/Locked/Sponsors.jpg")}/> </div>
            </div>
          :          
            <Tabs>
              <TabList>
                <Tab>FAQ.2.final.txt</Tab>
                {/* <Tab>Title 2</Tab> */}
              </TabList>

              <TabPanel>
                <div className="notepad">
                  
                </div>
              </TabPanel>
            </Tabs>
          } 
        </div>
      </Icon>
    </>
  );
}

export default Sponsors;
