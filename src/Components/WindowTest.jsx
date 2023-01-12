import React from "react";
import Icon from "./Icon";
import styled from "@emotion/styled";

function WindowTest(props) {
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
        font-size: 25px;
      `
    : // desktop
      styled.p``;

  return (
    <>
      {/* ================== WINDOW & ICON PROPERTIES ================== */}
      <Icon
        // --- Icon Properties ---
        icoSrc={require("../Assets/DevFest-Logo-64px.png")} // Icon image path
        icoAlt="Test Icon" // Image alt message
        icoCap="TEST" // Icon caption
        icoCapColor="orange" // Icon caption text color
        icoX={50} // Starting X position of icon
        icoY={300} // Starting Y position of icon
        icoSize={50} // Icon size, both height and width
        // --- Window Properties ---
        winDefaultOpen={false} // True = Window open by default, False = it's not
        winTitle="Test Window" // Window title
        winX={400} // Starting X position of window
        winY={450} // Starting Y position of window
        winWidth="550px" // Window width ("" = default width in App.css)
        winHeight="400px" // Window height ("" = default height in App.css)
        winBGcol="lightgreen" // Window background color (default("") = color in App.css)
        winBGimg={require("../Assets/DevFest-Logo-256px.png")} // Window background image (default("") = no background image)
        winBGrepeat="no-repeat" // Window background-repeat property (options: 'repeat' or 'no-repeat')
        winBGsize="cover" // Window background size (options: 'cover', 'contain', etc.)
        // --- Mobile-Specific Window Properties ---
        mobile={props.mobile} // (Inherited Prop; Don't change)
        winWidthMobile="90vw" // Window width on mobile
        winHeightMobile="500px" // Window height on mobile
        winXMobile={20} // Starting X position of window in mobile mode
        winYMobile={430} // Starting Y position of window in mobile mode
      >
        {/* ================== WINDOW CONTENT ======================== */}
        <H1>Test Window</H1>
        <P>
          This is a test window for testing multiple windows. There's a lot of
          filler text for kicks.
        </P>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
          varius lacus, in venenatis elit. Curabitur elementum mollis gravida.
          Sed quis placerat erat. Vivamus non odio eu purus tempor malesuada sed
          id erat. Curabitur eget orci sed metus vestibulum venenatis sed id
          nibh. In nisi mi, sollicitudin nec imperdiet eget, lacinia vel nisl.
          Nunc non ex vel risus pellentesque vehicula id in enim. Suspendisse
          sollicitudin magna vitae mauris scelerisque ornare. Donec dapibus,
          elit nec ullamcorper tempus, purus nisi cursus nunc, sed convallis dui
          lacus at lacus. Nam blandit dictum dolor sed lacinia. Donec rhoncus
          odio tellus, et eleifend justo rhoncus ac. Cras ullamcorper risus
          urna, eu varius risus pellentesque euismod.
        </P>
        <P>
          Etiam imperdiet venenatis efficitur. Vestibulum vitae malesuada ipsum.
          Nullam lobortis nunc ac nulla rhoncus, sit amet egestas arcu
          fermentum. Suspendisse rhoncus, tellus at rhoncus dapibus, lectus odio
          ultricies nisi, sed vulputate odio sem nec dolor. Sed erat eros,
          consequat et maximus et, semper vitae dolor. Nulla facilisi. Sed eu
          velit nunc. Pellentesque sodales tortor nec libero consequat, eu
          pellentesque libero malesuada. Cras gravida nibh lorem, sit amet
          scelerisque eros cursus nec. Vivamus orci felis, lacinia tincidunt
          justo vitae, maximus dapibus justo. Pellentesque sed imperdiet est.
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Fusce mattis sed erat sit amet interdum.
        </P>
        <P>
          Cras rhoncus tortor id turpis tempus venenatis. Proin massa nisl,
          fringilla id malesuada ac, pretium eu purus. Sed blandit sem vitae
          quam sagittis faucibus. Vivamus scelerisque, tellus id aliquet
          porttitor, sapien elit tincidunt metus, ac scelerisque enim ex in
          neque. Vivamus accumsan vel nisl id viverra. Etiam non eros mi.
          Pellentesque et mi nec neque mattis hendrerit at ut ex. Aenean cursus,
          lectus non interdum tempor, dolor nibh ornare mi, a ornare lorem
          turpis in ipsum. Quisque placerat elit sapien, a ornare neque varius
          ac. Proin tempus sem sed accumsan aliquam. Vivamus ultricies felis at
          erat tristique lobortis. Donec sed nibh at mauris maximus ullamcorper.
        </P>
      </Icon>
    </>
  );
}

export default WindowTest;
