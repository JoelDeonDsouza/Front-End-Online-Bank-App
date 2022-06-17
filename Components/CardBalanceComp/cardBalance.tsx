import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { VirtualCardAmountProps } from "./types";
import { colors } from "../../Components/Colors";
import MediumText from "../Texts/mediumText";
import SmallText from "../Texts/smallText";

const VirtualCardBalanceBackground = styled.View`
  flex: 1;
  width: 100%;
  padding-top: 5px;
  align-items: center;
`;

const VirtualCardBalance: FunctionComponent<VirtualCardAmountProps> = (
  props
) => {
  return (
    <VirtualCardBalanceBackground>
      <SmallText textStyles={{ color: colors.secondary, marginBottom: 15 }}>
        Your Total Balance
      </SmallText>
      <MediumText textStyles={{ color: colors.secondary, fontSize: 26 }}>
        €{props.balance}
      </MediumText>
    </VirtualCardBalanceBackground>
  );
};

export default VirtualCardBalance;
