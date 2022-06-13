import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { View } from "react-native";

import { colors } from "../../Components/Colors";
import MediumText from "../../Components/Texts/mediumText";
import SmallText from "../../Components/Texts/smallText";

import { UsageProps } from "./types";
import UsageAVI from "./usageAVI";

const UseageSectionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 25px;
`;

const LeftView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  height: 100%;
  align-items: center;
  flex: 2;
`;

const RightView = styled.View`
  flex: 1;
`;

const UseageItems: FunctionComponent<UsageProps> = (props) => {
  return (
    <UseageSectionRow>
      <LeftView>
        <UsageAVI background={props.art.background} icon={props.art.icon} />
        <View style={{ marginLeft: 10 }}>
          <MediumText
            textStyles={{
              color: colors.secondary,
              textAlign: "left",
              marginBottom: 5,
            }}
          >
            {props.title}
          </MediumText>
          <SmallText textStyles={{ textAlign: "left", color: colors.gray }}>
            {props.substitle}
          </SmallText>
        </View>
      </LeftView>
      <RightView>
        <MediumText
          textStyles={{
            color: colors.secondary,
            textAlign: "right",
            marginBottom: 5,
          }}
        >
          {props.amount}
        </MediumText>
        <SmallText textStyles={{ textAlign: "right", color: colors.gray }}>
          {props.date}
        </SmallText>
      </RightView>
    </UseageSectionRow>
  );
};

export default UseageItems;
