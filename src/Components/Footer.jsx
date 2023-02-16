import React from "react";
import Icon from "./Icon";
// import styled from "@emotion/styled";
import {Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../Styling/CustomTabsStyling.css';
function Footer(props) {
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
        icoSrc={require("../Assets/Icons/ADI-Logo.png")} // Icon image path
        icoAlt="ADI Icon" // Image alt message
        icoCap="ADI" // Icon caption
        icoCapColor="black" // Icon caption text color
        icoX={20} // Starting X position of icon
        icoY={700} // Starting Y position of icon
        icoSize={80} // Icon size, both height and width
        // --- Window Properties ---
        winDefaultOpen={false} // True = Window open by default, False = it's not
        winTitle="Presented By" // Window title
        winX={900} // Starting X position of window
        winY={60} // Starting Y position of window
        winWidth="" // Window width ("" = default width in App.css)
        winHeight="250px" // Window height ("" = default height in App.css)
        winBGcol="" // Window background color (default("") = color in App.css)
        winBGimg="" // Window background image (default("") = no background image)
        winBGrepeat="" // Window background-repeat property (options: 'repeat' or 'no-repeat')
        winBGsize="" // Window background size (options: 'cover', 'contain', etc.)
        // --- Mobile-Specific Window Properties ---
        mobile={props.mobile} // (Inherited Prop; Don't change)
        winWidthMobile="95vw" // Window width on mobile
        winHeightMobile="280px" // Window height on mobile
        winXMobile={10} // Starting X position of window in mobile mode
        winYMobile={2880} // Starting Y position of window in mobile mode
      >
        {/* ================== WINDOW CONTENT ======================== */}
        <div>
          <Tabs>
            <TabList>
              <Tab>Team.txt</Tab>
              {/* <Tab>Title 2</Tab> */}
            </TabList>

            <TabPanel>
              <div className="notepad">
                <br/> 
                <p className="a">DevFest is presented by <a href="https://www.adicu.com/">ADI</a></p>
                <p className="a"><a href="https://discord.gg/fEax3gQeWW">Discord</a></p>
                <p className="a"><a href="https://www.instagram.com/adicolumbia/">Instagram</a></p>
                <p className="a"><a href="https://www.facebook.com/adicu/">Facebook<span className="cursor">|</span></a></p>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>    
              </div>
            </TabPanel>
          </Tabs> 
        </div>
      </Icon>
    </>
  );
}

export default Footer;
