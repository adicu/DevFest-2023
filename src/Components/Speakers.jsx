import React from "react";
import Icon from "./Icon";
// import styled from "@emotion/styled";
import {Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../Styling/CustomTabsStyling.css';
import SPEAKERS from '../Data/Speakers.json';
import images from '../Assets/Speakers/index';
import FeatureFlags from '../Data/FeatureFlags.json';

function Speakers(props) {
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

  // Paragraph component
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
        icoSrc={require("../Assets/Icons/Speakers-Icon.png")} // Icon image path
        icoAlt="Speakers Icon" // Image alt message
        icoCap="SPEAKERS" // Icon caption
        icoCapColor="black" // Icon caption text color
        icoX={120} // Starting X position of icon
        icoY={620} // Starting Y position of icon
        icoSize={80} // Icon size, both height and width
        // --- Window Properties ---
        winDefaultOpen={false} // True = Window open by default, False = it's not
        winTitle="Speakers" // Window title
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
        winYMobile={1275} // Starting Y position of window in mobile mode
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
                  SPEAKERS.map((speaker, index)=>{
                    let name = speaker.name.split(" ").pop();
                    return <Tab>{name}</Tab>
                  })
                }              
              </TabList>

              {SPEAKERS.map((speaker, index) => {
                return (
                  <TabPanel>
                    <div className="profile">
                      <div className="profile-image-bio">
                        <div className="profile-image">
                          <img
                            src={images[speaker.name.split(" ").pop()]}
                            alt={speaker.name}
                          />
                        </div>
                        <div className="profile-bio"><div className="bio-notepad">{speaker.bio}<span className="cursor">|</span><br/><br/></div></div>
                      </div>
                      <div className="profile-label">
                        <p>
                          {speaker.name}
                          <span className="label-icons">
                            {speaker.linkedin? <a rel="noreferrer" target="_blank" href={speaker.linkedin}><img src={require("../Assets/Icons/linkedin.png")} alt="linkedin"/></a> : <></>}
                            {speaker.website? <a rel="noreferrer" target="_blank" href={speaker.website}><img src={require("../Assets/Icons/internet.png")} alt="internet"/></a> : <></>}
                            {speaker.twitter? <a rel="noreferrer" target="_blank" href={speaker.twitter}><img src={require("../Assets/Icons/twitter-sign.png")} alt="twitter"/></a> : <></>}
                          </span>
                          <br/>
                          <a rel="noreferrer" target="_blank" href={speaker.event} style={{ fontSize: "1em"}}><img src={require("../Assets/Icons/Schedule-Icon.png")} style={{ marginTop: "10px"}} alt="event"/></a>
                        </p>
                      </div>
                    </div>
                  </TabPanel>
                );
              })}
            </Tabs>
          } 
        </div>
      </Icon>
    </>
  );
}

export default Speakers;
