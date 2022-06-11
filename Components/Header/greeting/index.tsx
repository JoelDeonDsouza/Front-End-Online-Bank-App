import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { StyleProp, TextStyle } from "react-native";

import MediumText from "../../Texts/mediumText";
import SmallText from "../../Texts/smallText";
import { colors } from "../../Colors";

const StyledView = styled.View`
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;

interface GreetingProps {
  mainText: String;
  subText: String;
  mainTextStyles?: StyleProp<TextStyle>;
}

const WelcomeGreetong: FunctionComponent<GreetingProps> = (props) => {
  return (
    <StyledView>
      <MediumText
        textStyles={[
          { color: colors.primary, fontSize: 22 },
          props.mainTextStyles,
        ]}
      >
        {props.mainText}
      </MediumText>
      <SmallText textStyles={[{ color: colors.dark }, props.mainTextStyles]}>
        {props.subText}
      </SmallText>
    </StyledView>
  );
};

export default WelcomeGreetong;
