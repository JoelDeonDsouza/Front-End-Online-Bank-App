import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

import { UsageAVIProps } from "./types";
import { colors } from "../Colors";

const StyleView = styled.View`
  height: 45px;
  width: 45px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const UsageAVI: FunctionComponent<UsageAVIProps> = (props) => {
  return (
    <StyleView style={{ backgroundColor: props.background }}>
      <Ionicons name={props.icon} size={26} color={colors.light} />
    </StyleView>
  );
};

export default UsageAVI;
