import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../Colors";
import { ScreenWidth } from "../Shared";
import MediumText from "../../Components/Texts/mediumText";
import SmallText from "../../Components/Texts/smallText";
import { View } from "react-native";

import { VirtualCardsProps } from "./cardTypes";
import cardImg from "../../assets/cardsImg/cardImg.jpeg";

import { useNavigation } from "@react-navigation/native";
import { Props as HomeProps } from "../../Screens/Home";

const VirtualCardImage = styled.ImageBackground`
  height: 100%;
  width: ${ScreenWidth * 0.9}px;
  background-color: ${colors.gray};
  border-radius: 25px;
  margin-right: 25px;
  overflow: hidden;
`;
const VirtualCardTouchable = styled.TouchableHighlight`
  height: 100%;
  border-radius: 25px;
`;
const TouchableView = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  flex: 1;
`;
const VirtualCardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const VirtualCardLogo = styled.Image`
  width: 100%;
  height: 80%;
  resize-mode: contain;
  flex: 1;
`;

const CardItems: FunctionComponent<VirtualCardsProps> = (props) => {
  const navigation = useNavigation<HomeProps["navigation"]>();
  const handlePress = () => {
    navigation.navigate("CardBalance", { ...props });
  };

  return (
    <VirtualCardImage source={cardImg}>
      <VirtualCardTouchable underlayColor={colors.medium} onPress={handlePress}>
        <TouchableView>
          <VirtualCardRow>
            <MediumText textStyles={{ color: colors.secondary }}>
              *****{props.accountNO.slice(6, 10)}
            </MediumText>
          </VirtualCardRow>
          <MediumText textStyles={{ fontSize: 26, color: colors.gray }}>
            {props.name}
          </MediumText>
          <VirtualCardRow>
            <View style={{ flex: 3 }}>
              <SmallText
                textStyles={{
                  marginBottom: 5,
                  color: colors.light,
                  fontWeight: "bold",
                }}
              >
                Total Balance
              </SmallText>
              <MediumText
                textStyles={{ fontSize: 20, color: colors.secondary }}
              >
                €{props.balance}
              </MediumText>
            </View>
            <VirtualCardLogo source={props.logo} />
          </VirtualCardRow>
        </TouchableView>
      </VirtualCardTouchable>
    </VirtualCardImage>
  );
};

export default CardItems;
