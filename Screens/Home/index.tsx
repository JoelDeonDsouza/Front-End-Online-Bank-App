import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { screenContainer } from "../../Components/Shared";
import { colors } from "../../Components/Colors";

const HomeContainer = styled(screenContainer)`
  background-color: ${colors.light};
  width: 100%;
  flex: 1;
`;

const HomeScreen: FunctionComponent = () => {
  return (
    <HomeContainer>
      <StatusBar style="dark" />
    </HomeContainer>
  );
};

export default HomeScreen;
