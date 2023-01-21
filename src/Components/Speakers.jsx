import React from "react";
import Icon from "./Icon";
import styled from "@emotion/styled";
import {Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../Styling/CustomTabsStyling.css';
import JUDGES from '../Data/Judges.json';
import images from '../Assets/Judges/index';
import FeatureFlags from '../Data/FeatureFlags.json';

function Speakers(props) {
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
        icoSrc={require("../Assets/Icons/Speakers-Icon.png")} // Icon image path
        icoAlt="Speakers Icon" // Image alt message
        icoCap="SPEAKERS" // Icon caption
        icoCapColor="black" // Icon caption text color
        icoX={10} // Starting X position of icon
        icoY={450} // Starting Y position of icon
        icoSize={80} // Icon size, both height and width
        // --- Window Properties ---
        winDefaultOpen={false} // True = Window open by default, False = it's not
        winTitle="SPEAKERS" // Window title
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
        winYMobile={1225} // Starting Y position of window in mobile mode
      >
        {/* ================== WINDOW CONTENT ======================== */}
        <div>
          { !FeatureFlags.speakers?
            <div className="locked">
              <img className="lock-icon" src={require("../Assets/Icons/lock.png")} alt="Content Locked"/>
              <div className="blurred"><img alt="Schedule Locked" src={require("../Assets/Locked/Speakers.jpg")}/> </div>
            </div>
          :
            <Tabs>
              <TabList>
                {
                  JUDGES.map((judge, index)=>{
                    let name = judge.name.split(" ")[0];
                    return <Tab>{name}</Tab>
                  })
                }              
              </TabList>

              {
                JUDGES.map((judge, index)=>{
                  return  <TabPanel>
                            <div className="profile">
                              <div className="profile-image-bio">
                                <div className="profile-image"><img src={images[judge.name.split(" ")[0]]} alt={judge.name}/></div>
                                <div className="profile-bio">{judge.bio}</div>
                              </div>
                              <div className="profile-label">
                                <H1>{judge.name}</H1>
                              </div> 
                            </div>
                          </TabPanel>
                })              
              }
            </Tabs>
          } 
        </div>
      </Icon>
    </>
  );
}

export default Speakers;
