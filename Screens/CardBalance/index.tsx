import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { colors } from "../../Components/Colors";
import { screenContainer } from "../../Components/Shared";
import VirtualCardBalance from "../../Components/CardBalanceComp/cardBalance";
import VirtualCard from "../../Components/CardBalanceComp/virtualBalanceCard";
import VirtualCardBTN from "../../Components/CardBalanceComp/btn";

const CardBalanceContainer = styled(screenContainer)`
background-color:${colors.dark}
width:100%;
padding:25px;
flex:1;
`;

import { RootStackNavigation } from "../../Navigation";
import { StackScreenProps } from "@react-navigation/stack";
type Props = StackScreenProps<RootStackNavigation, "CardBalance">;
const CardBalance: FunctionComponent<Props> = ({ route }) => {
  return (
    <CardBalanceContainer>
      <StatusBar style="dark" />
      <VirtualCardBalance balance={route?.params?.ifFreature} />
      <VirtualCard {...route?.params} />
      <VirtualCardBTN />
    </CardBalanceContainer>
  );
};

export default CardBalance;
