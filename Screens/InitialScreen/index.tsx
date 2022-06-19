import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import wallPaper from "../../assets/LandingScreenImage/landingPage.png";

//custom styles
import { colors } from "../../Components/Colors";
import { screenContainer } from "../../Components/Shared";
import BigText from "../../Components/Texts/bigText";
import SmallText from "../../Components/Texts/smallText";
import RegularBTN from "../../Components/BTN/regularBTN";

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
  height: 250%;
  resize-mode: stretch;
`;

const LandingScreenBottom = styled.View`
  padding: 25px;
  width: 100%;
  flex: 1;
  justify-content: flex-end;
`;

//Navigation
import { NavigationRoot } from "../../Navigation";
import { StackScreenProps } from "@react-navigation/stack";
type Props = StackScreenProps<NavigationRoot, "HomeScreen">;

const LandingScreen: FunctionComponent<Props> = ({ navigation }) => {
  return (
    <>
      <StatusBar style="light" />
      <LandingScreenContainer>
        <LandingScreenTop>
          <LandingScreenImage source={wallPaper} />
        </LandingScreenTop>
        <LandingScreenBottom>
          <BigText
            textStyles={{
              width: "75%",
              marginBottom: 25,
              fontWeight: "bold",
            }}
          >
            Track your Payment methodes Safe and Easy !
          </BigText>
          <SmallText
            textStyles={{
              width: "75%",
              marginBottom: 25,
            }}
          >
            Best way to store, use and monitor your day to day transfer.
          </SmallText>
          <RegularBTN
            onPress={() => {
              navigation.navigate("HomeScreen");
            }}
          >
            Get Started
          </RegularBTN>
        </LandingScreenBottom>
      </LandingScreenContainer>
    </>
  );
};

export default LandingScreen;
