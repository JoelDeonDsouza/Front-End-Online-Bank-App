import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import RegularBTN from "../BTN/regularBTN";
import { colors } from "../Colors";
import { Ionicons } from "@expo/vector-icons";

const VirtualCardBTNBackground = styled.View`
  width: 100%;
  align-items: center;
  flex: 1;
`;

const VirtualCardBTN: FunctionComponent = () => {
  return (
    <VirtualCardBTNBackground>
      <RegularBTN
        btnStyles={{ width: "50%", marginTop: 20 }}
        onPress={() => {}}
      >
        Cancel <Ionicons name="card" size={18} color={colors.light} />
      </RegularBTN>
    </VirtualCardBTNBackground>
  );
};

export default VirtualCardBTN;
