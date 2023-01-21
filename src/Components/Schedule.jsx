import React from "react";
import Icon from "./Icon";
// import styled from "@emotion/styled";
import {Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../Styling/CustomTabsStyling.css';
import SCHEDULE from '../Data/Schedule.json';
import FeatureFlags from '../Data/FeatureFlags.json';
function Schedule(props) {
  /* ============== STYLING (for Window Content) ============= */

  return (
    <>
      {/* ================== WINDOW & ICON PROPERTIES ================== */}
      <Icon
        // --- Icon Properties ---
        icoSrc={require("../Assets/Icons/Schedule-Icon.png")} // Icon image path
        icoAlt="Schedule Icon" // Image alt message
        icoCap="SCHEDULE" // Icon caption
        icoCapColor="black" // Icon caption text color
        icoX={10} // Starting X position of icon
        icoY={600} // Starting Y position of icon
        icoSize={80} // Icon size, both height and width
        // --- Window Properties ---
        winDefaultOpen={false} // True = Window open by default, False = it's not
        winTitle="Schedule" // Window title
        winX={400} // Starting X position of window
        winY={200} // Starting Y position of window
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
        winYMobile={805} // Starting Y position of window in mobile mode
      >
        {/* ================== WINDOW CONTENT ======================== */}
        <div>
          { !FeatureFlags.schedule?
            <div className="locked">
              <img className="lock-icon" src={require("../Assets/Icons/lock.png")} alt="Content Locked"/>
              <div className="blurred"><img alt="Schedule Locked" src={require("../Assets/Locked/Schedule.jpg")}/> </div>
            </div>
          :          
          <Tabs>
            <TabList>
              <Tab>Mon</Tab>
              <Tab>Tue</Tab>
              <Tab>Wed</Tab>
              <Tab>Thur</Tab>
              <Tab>Fri</Tab>
              <Tab>Sat</Tab>
              <Tab>Sun</Tab>
            </TabList>

            {
              SCHEDULE.map((day, index)=>{
                return<TabPanel>
                        <div className="notepad">
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

export default Schedule;
