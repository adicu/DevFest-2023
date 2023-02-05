import { BarLoader } from "react-spinners";
import styled from "@emotion/styled";

const LoadingScreen = () => {
  const bgImage = require("../Assets/background.jpg");

  const LoadingDiv = styled.div`
    background-image: url(${bgImage});
    height: 100vh;
    width: 100vw;

    text-align: center;
    align-items: center;
  `;

  return (
    <>
      <LoadingDiv>
        <img
          height={400}
          src={require("../Assets/Loading-Lion.png")}
          alt="Loading lion"
          draggable={false}
        />

        <BarLoader
          color="#36d7b7"
          width="20vw"
          cssOverride={{
            marginLeft: "40vw",
            marginRight: "40vw",
          }}
        />
        <p>Some fun fact abt devfest... did you know that...?</p>
      </LoadingDiv>
    </>
  );
};

export default LoadingScreen;
