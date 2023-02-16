import React from "react";
import Icon from "./Icon";
import styled from "@emotion/styled";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../Styling/CustomTabsStyling.css";
import JUDGES from "../Data/Judges.json";
import images from "../Assets/Judges/index";
import FeatureFlags from "../Data/FeatureFlags.json";

function Judges(props) {
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
        icoSrc={require("../Assets/Icons/JUDGES-Icon.png")} // Icon image path
        icoAlt="Judges Icon" // Image alt message
        icoCap="JUDGES" // Icon caption
        icoCapColor="black" // Icon caption text color
        icoX={10} // Starting X position of icon
        icoY={450} // Starting Y position of icon
        icoSize={80} // Icon size, both height and width
        // --- Window Properties ---
        winDefaultOpen={false} // True = Window open by default, False = it's not
        winTitle="Judges" // Window title
        winX={250} // Starting X position of window
        winY={50} // Starting Y position of window
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
        winYMobile={1695} // Starting Y position of window in mobile mode
      >
        {/* ================== WINDOW CONTENT ======================== */}
        <div>
          {!FeatureFlags.judges ? (
            <div className="locked">
              <img
                className="lock-icon"
                src={require("../Assets/Icons/lock.png")}
                alt="Content Locked"
              />
              <div className="blurred"></div>
            </div>
          ) : (
            <Tabs>
              <TabList>
                {JUDGES.map((judge, index) => {
                  let name = judge.name.split(" ")[0];
                  return <Tab>{name}</Tab>;
                })}
              </TabList>

              {JUDGES.map((judge, index) => {
                return (
                  <TabPanel>
                    <div className="profile">
                      <div className="profile-image-bio">
                        <div className="profile-image">
                          <img
                            src={images[judge.name.split(" ")[0]]}
                            alt={judge.name}
                          />
                        </div>
                        <div className="profile-bio"><div className="bio-notepad">{judge.bio}<span className="cursor">|</span></div></div>
                      </div>
                      <div className="profile-label">
                        <p>
                          {judge.name}
                          <span className="label-icons">
                            {judge.linkedin? <a href={judge.linkedin}><img src={require("../Assets/Icons/linkedin.png")} alt="linkedin"/></a> : <></>}
                            {judge.website? <a href={judge.website}><img src={require("../Assets/Icons/internet.png")} alt="internet"/></a> : <></>}
                            {judge.twitter? <a href={judge.twitter}><img src={require("../Assets/Icons/twitter-sign.png")} alt="twitter"/></a> : <></>}
                          </span>
                        </p>
                      </div>
                    </div>
                  </TabPanel>
                );
              })}
            </Tabs>
          )}
        </div>
      </Icon>
    </>
  );
}

export default Judges;
