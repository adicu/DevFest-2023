import { BarLoader } from "react-spinners";
import styled from "@emotion/styled";

const LoadingScreen = () => {
  const bgImage = require("../Assets/background.jpg");

  const LoadingDiv = styled.div`
    background-image: url(${bgImage});
    background-size: cover;
    background-repeat: none;
    background-position: center;
    height: 100vh;
    width: 100vw;

    text-align: center;
    align-items: center;
  `;

  const Text = styled.p`
    font-size: 1.5em;
    font-family: "DotGothic16", sans-serif;
  `;

  return (
    <>
      <LoadingDiv>
        <img
          height={400}
          src={require("../Assets/Loading-Lion.gif")}
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
        <Text>Some fun fact abt devfest... did you know that...?</Text>
      </LoadingDiv>
    </>
  );
};

export default LoadingScreen;
