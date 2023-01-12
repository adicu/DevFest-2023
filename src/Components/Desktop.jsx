import { isMobile } from "react-device-detect";

import WindowDefault from "./WindowDefault";
import WindowTest from "./WindowTest";

const Desktop = () => {
  return (
    <>
      <div className="desktop">
        {/* Add custom components like DefaultWindow here */}
        <WindowDefault mobile={isMobile} />
        <WindowTest mobile={isMobile} />
      </div>
    </>
  );
};

export default Desktop;
