import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";

import { colors } from "../../Colors";
import MediumText from "../../Texts/mediumText";

const ButtonView = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.primary};
  width: 100%;
  padding: 20px;
  border-radius: 12px;
`;

//types
interface ButtonProps {
  btnStyles?: StyleProp<ViewStyle>;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  textStyles?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

const RegularBTN: FunctionComponent<ButtonProps> = (props) => {
  return (
    <ButtonView onPress={props.onPress} style={props.btnStyles}>
      <MediumText textStyles={props.textStyles}>{props.children}</MediumText>
    </ButtonView>
  );
};

export default RegularBTN;
