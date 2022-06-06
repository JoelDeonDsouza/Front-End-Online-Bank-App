import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { colors } from "../../Colors";
import { TextProps } from "../types";

const StyledText = styled.Text`
  font-size: 26px;
  color: ${colors.accent};
  text-align: left;
`;
const BigText: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children}</StyledText>;
};

export default BigText;
