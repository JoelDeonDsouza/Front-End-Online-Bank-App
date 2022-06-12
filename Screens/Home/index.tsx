import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { screenContainer } from "../../Components/Shared";
import { colors } from "../../Components/Colors";
import VirtualCards from "../../Components/Cards";
import logo from "../../assets/cardsImg/logo.jpeg";

const HomeContainer = styled(screenContainer)`
  background-color: ${colors.light};
  width: 100%;
  flex: 1;
`;

const HomeScreen: FunctionComponent = () => {
  const cardsData = [
    {
      id: 1,
      accountNO: "0001234568956",
      balance: 900,
      name: "WorldBank",
      ifFreature: "Debit",
      logo: logo,
    },
    {
      id: 2,
      accountNO: "4568956000123",
      balance: 2000,
      name: "DBBank",
      ifFreature: "Credit",
      logo: logo,
    },
  ];
  return (
    <HomeContainer>
      <StatusBar style="dark" />
      <VirtualCards data={cardsData} />
    </HomeContainer>
  );
};

export default HomeScreen;
