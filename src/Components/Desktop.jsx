import DefaultWindow from "./DefaultWindow";
import { isMobile } from "react-device-detect";

const Desktop = () => {
  return (
    <>
      <div className="desktop">
        {/* Add custom components like DefaultWindow here */}
        <DefaultWindow mobile={isMobile} />
      </div>
    </>
  );
};

export default Desktop;
