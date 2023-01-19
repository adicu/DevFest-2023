import React from "react";
import Icon from "./Icon";
import styled from "@emotion/styled";
import {Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../Styling/CustomTabsStyling.css';
import FAQ from '../Data/FAQ.json';
function WindowTabs(props) {
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
        icoSrc={require("../Assets/Icons/FAQ Icon.png")} // Icon image path
        icoAlt="DevFest 23 Icon" // Image alt message
        icoCap="FAQs" // Icon caption
        icoCapColor="black" // Icon caption text color
        icoX={10} // Starting X position of icon
        icoY={450} // Starting Y position of icon
        icoSize={100} // Icon size, both height and width
        // --- Window Properties ---
        winDefaultOpen={true} // True = Window open by default, False = it's not
        winTitle="FAQ" // Window title
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
        winWidthMobile="90vw" // Window width on mobile
        winHeightMobile="400px" // Window height on mobile
        winXMobile={10} // Starting X position of window in mobile mode
        winYMobile={420} // Starting Y position of window in mobile mode
      >
        {/* ================== WINDOW CONTENT ======================== */}
        <div>
          <Tabs>
            <TabList>
              <Tab>FAQ.2.final.txt</Tab>
              {/* <Tab>Title 2</Tab> */}
            </TabList>

            <TabPanel>
              <div className="notepad">
                {
                  FAQ.map((faq, index)=>{
                    return <span><p className="q">{faq.question}</p><p className="a">{faq.answer}{(FAQ.length-1) === (index) ? <span className="cursor">|</span> : <span></span>}</p></span>
                  })
                }
                
              </div>
            </TabPanel>
            {/* <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel> */}
          </Tabs> 
        </div>
      </Icon>
    </>
  );
}

export default WindowTabs;
