import React from "react";
import Icon from "./Icon";
// import styled from "@emotion/styled";
import {Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../Styling/CustomTabsStyling.css';
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
        winTitle="Sponsors" // Window title
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
        winYMobile={2140} // Starting Y position of window in mobile mode
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
                <Tab>Thanks.txt</Tab>
                {/* <Tab>Title 2</Tab> */}
              </TabList>

              <TabPanel>
                <div className="notepad">
                  <p style={{ textAlign: "center" }}>Made Possible With The Help Of Our Sponsors</p>
                  <p style={{ textAlign: "center" }}>
                  <a href="https://www.algorand.com/"><img alt="algorand" className="t1" src={require("../Assets/Sponsors/algorand.png")}/></a>
                  <br/><br/>
                  <a rel="noreferrer" target="_blank" href="https://careers.imc.com/us/en"><img alt="imc-trading" className="t1" src={require("../Assets/Sponsors/imc.png")}/></a>
                  <br/><br/>
                  <a rel="noreferrer" target="_blank" href="https://console.echo3d.com/#/auth/register-promo?code=Jan32023_114"><img alt="echo3d" className="t1" src={require("../Assets/Sponsors/echo3d.png")}/></a><br/>
                  <br/>
                  <a rel="noreferrer" target="_blank" href="https://careers.bloomberg.com/job/search"><img alt="bloomberg" className="t2" src={require("../Assets/Sponsors/bloomberg.png")}/></a><br/><br/>
                  <a rel="noreferrer" target="_blank" href="https://www.lunchboxentertainment.com/"><img alt="lunchbox" className="t2" src={require("../Assets/Sponsors/lunchbox.png")}/></a><br/><br/>
                  <a rel="noreferrer" target="_blank" href="https://x-camp.academy/#/"><img alt="xcamp" className="t2" src={require("../Assets/Sponsors/xcamp.png")}/></a><br/>
                  <a rel="noreferrer" target="_blank" href="https://www.getfrich.com/"><img alt="frich" className="t2" src={require("../Assets/Sponsors/frich.png")}/></a>
                  </p>
                  
                  <br/>
                  <p style={{ textAlign: "center" }}>And Additional Support From</p>
                  <p style={{ textAlign: "center" }}>
                    <a rel="noreferrer" target="_blank" href="https://cloud.google.com/"><img alt="gcp" className="t3" src={require("../Assets/Sponsors/gcp.png")}/></a>
                    <a rel="noreferrer" target="_blank" href="https://www.figma.com/"><img alt="figma" className="t3" src={require("../Assets/Sponsors/figma.png")}/></a>
                    <span className="cursor">|</span> 
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>                   
                  </p>
                  
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
