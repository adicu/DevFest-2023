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

  const LoadingImg = styled.img`
    margin-top: 5em;
  `;

  return (
    <>
      <LoadingDiv>
        <LoadingImg
          height={400}
          src={require("../Assets/Loading-Lion.gif")}
          alt="Loading lion"
          draggable={false}
        />

        <br />

        <BarLoader
          color="white"
          width="300px"
          height="12px"
          cssOverride={{
            borderStyle: "solid",
            borderColor: "#625A43",
            backgroundColor: "#625A43",
            display: "inline-block",
          }}
        />
      </LoadingDiv>
    </>
  );
};

export default LoadingScreen;
