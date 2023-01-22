import { useEffect, useState } from "react";

import WindowDefault from "./WindowDefault";
// import WindowTest from "./WindowTest";
import WindowTabs from "./WindowTabs";
import Tracks from "./Tracks";
import Judges from "./Judges";
import Schedule from "./Schedule";
import Speakers from "./Speakers";
import Sponsors from "./Sponsors";
import Footer from "./Footer";

const Desktop = () => {
  const mobileWidth = "850px";

  const isClientMobile = () => {
    return typeof window !== "undefined" &&
      window.matchMedia(`(max-width: ${mobileWidth})`).matches
      ? true
      : false;
  };
  const [mobile, setMobile] = useState(isClientMobile());
  const [width, setWidth] = useState(mobileWidth);

  useEffect(() => {
    function handleResize() {
      setMobile(isClientMobile());
      setWidth(mobileWidth);
    }

    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      <style jsx>
        {`
          @media (max-width: ${width}) {
            .desktop {
              overflow: auto;
            }
          }
        `}
      </style>
      <div className="desktop">
        {/* Add custom components like DefaultWindow here */}
        <WindowDefault mobile={mobile}/>
        <Footer mobile={mobile}/>
        <Tracks mobile={mobile}/>
        <Judges mobile={mobile}/>
        <Schedule mobile={mobile}/>
        <Speakers mobile={mobile}/>
        <Sponsors mobile={mobile}/>            
        {/* <WindowTest mobile={mobile} /> */}
        <WindowTabs mobile={mobile}/>        
      </div>
    </>
  );
};

export default Desktop;
