import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../Colors";
import MediumText from "../../Components/Texts/mediumText";
import SmallText from "../../Components/Texts/smallText";
import { View } from "react-native";
import { VirtualBalanceProps } from "./types";
import cardImg from "../../assets/cardsImg/cardImg.jpeg";

const VirtualCardImage = styled.ImageBackground`
  height: 100%;
  width: 100%;
  background-color: ${colors.gray};
  border-radius: 25px;
  overflow: hidden;
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
  height: 90%;
  resize-mode: contain;
  flex: 1;
`;

const BalanceCard: FunctionComponent<VirtualBalanceProps> = (props) => {
  return (
    <VirtualCardImage source={cardImg}>
      <TouchableView>
        <VirtualCardRow>
          <MediumText textStyles={{ color: colors.secondary }}>
            *****{props?.accountNO?.slice(6, 10)}
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
            <MediumText textStyles={{ fontSize: 20, color: colors.secondary }}>
              €{props.balance}
            </MediumText>
          </View>
          <VirtualCardLogo source={props.logo} />
        </VirtualCardRow>
      </TouchableView>
    </VirtualCardImage>
  );
};

export default BalanceCard;
