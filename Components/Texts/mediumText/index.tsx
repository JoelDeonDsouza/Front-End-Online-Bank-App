import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { colors } from "../../Colors";
import { TextProps } from "../types";

const StyledText = styled.Text`
  font-size: 18px;
  color: ${colors.medium};
  text-align: left;
  font-weight: bold;
`;
const MediumText: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children}</StyledText>;
};

export default MediumText;
