import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import BalanceCard from "./balanceCard";

import { VirtualBalanceProps } from "./types";

const VirtualCardBackgroud = styled.View`
  width: 100%;
  align-items: center;
  flex: 2;
`;

const VirtualCard: FunctionComponent<VirtualBalanceProps> = (props) => {
  return (
    <VirtualCardBackgroud>
      <BalanceCard {...props} />
    </VirtualCardBackgroud>
  );
};

export default VirtualCard;
