import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import wallPaper from "../../assets/LandingScreenImage/landingPage.png";

//custom styles
import { colors } from "../../Components/Colors";
import { screenContainer } from "../../Components/Shared";

const LandingScreenContainer = styled(screenContainer)`
  background-color: ${colors.secondary};
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

const LandingScreenTop = styled.View`
  width: 100%;
  flex: 1;
  max-height: 55%;
`;

const LandingScreenImage = styled.Image`
  width: 100%;
  height: 200%;
  resize-mode: stretch;
`;

const LandingScreenBottom = styled.View`
  width: 100%;
  flex: 1;
`;

const LandingScreen: FunctionComponent = () => {
  return (
    <>
      <StatusBar style="light" />
      <LandingScreenContainer>
        <LandingScreenTop>
          <LandingScreenImage source={wallPaper} />
        </LandingScreenTop>
        <LandingScreenBottom></LandingScreenBottom>
      </LandingScreenContainer>
    </>
  );
};

export default LandingScreen;
