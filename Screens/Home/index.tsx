import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { screenContainer } from "../../Components/Shared";
import { colors } from "../../Components/Colors";
import VirtualCards from "../../Components/Cards";
import logo from "../../assets/cardsImg/logo.jpeg";
import UseageSection from "../../Components/Useage/useageSection";
import UsersAccounts from "../../Components/UsersAccounts";

//UsersAccounts Img
import user1 from "../../assets/Users/user1.png";
import user2 from "../../assets/Users/user2.png";
import user3 from "../../assets/Users/user3.png";
import user4 from "../../assets/Users/user4.png";

const HomeContainer = styled(screenContainer)`
  background-color: ${colors.light};
  width: 100%;
  flex: 1;
`;

//Navigation
import { NavigationRoot } from "../../Navigation";
import { StackScreenProps } from "@react-navigation/stack";
export type Props = StackScreenProps<NavigationRoot, "HomeScreen">;

const HomeScreen: FunctionComponent<Props> = () => {
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

  const userAccountData = [
    {
      id: 1,
      amount: "250",
      name: "Coby",
      background: colors.primary,
      img: user1,
    },
    {
      id: 2,
      amount: "50",
      name: "Doby",
      background: colors.secondary,
      img: user2,
    },
    {
      id: 3,
      amount: "100",
      name: "Cory",
      background: colors.primary,
      img: user3,
    },
    {
      id: 4,
      amount: "400",
      name: "Olga",
      background: colors.secondary,
      img: user4,
    },
  ];

  return (
    <HomeContainer>
      <StatusBar style="dark" />
      <VirtualCards data={cardsData} />
      <UseageSection data={useageData} />
      <UsersAccounts data={userAccountData} />
    </HomeContainer>
  );
};

export default HomeScreen;
