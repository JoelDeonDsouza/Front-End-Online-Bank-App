import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { screenContainer } from "../../Components/Shared";
import { colors } from "../../Components/Colors";
import VirtualCards from "../../Components/Cards";
import logo from "../../assets/cardsImg/logo.jpeg";
import UseageSection from "../../Components/Useage/useageSection";

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

  const useageData = [
    {
      id: 1,
      amount: "-€50",
      date: "10 Apr 2022",
      title: "Taxi",
      subtitle: "Uber Ride",
      art: {
        icon: "car",
        background: colors.dark,
      },
    },
    {
      id: 2,
      amount: "-€10",
      date: "15 Apr 2022",
      title: "Food",
      subtitle: "Flink",
      art: {
        icon: "cart",
        background: colors.dark,
      },
    },
    {
      id: 3,
      amount: "-€100",
      date: "20 Apr 2022",
      title: "Shopping",
      subtitle: "Media Mart",
      art: {
        icon: "cart",
        background: colors.dark,
      },
    },
    {
      id: 4,
      amount: "-€80",
      date: "30 Apr 2022",
      title: "Food",
      subtitle: "Uber Eats",
      art: {
        icon: "cart",
        background: colors.dark,
      },
    },
  ];

  return (
    <HomeContainer>
      <StatusBar style="dark" />
      <VirtualCards data={cardsData} />
      <UseageSection data={useageData} />
    </HomeContainer>
  );
};

export default HomeScreen;
