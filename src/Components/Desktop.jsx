import { useEffect, useState } from "react";

import WindowDefault from "./WindowDefault";
import WindowTest from "./WindowTest";
import WindowTabs from "./WindowTabs";

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
        <WindowTabs mobile={mobile} winTitle="FAQs"/>
        <WindowDefault mobile={mobile} />
        {/* <WindowTest mobile={mobile} /> */}
      </div>
    </>
  );
};

export default Desktop;
