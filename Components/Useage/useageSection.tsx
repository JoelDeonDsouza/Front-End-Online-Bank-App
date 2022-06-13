import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { UsageSectionProps } from "./types";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "../../Components/Colors";
import MediumText from "../../Components/Texts/mediumText";
import SmallText from "../../Components/Texts/smallText";

import UseageItems from "./useageItem";

const UseageSectionBackground = styled.View`
  width: 100%;
  padding-horizontal: 25px;
  padding-top: 5px;
  flex: 2;
`;
const UseageSectionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const UseageSectionList = styled.FlatList`
  width: 100%;
`;

const UseageSection: FunctionComponent<UsageSectionProps> = (props) => {
  return (
    <UseageSectionBackground>
      <UseageSectionRow style={{ marginBottom: 25 }}>
        <MediumText textStyles={{ fontSize: 25, color: colors.primary }}>
          Card Usage
        </MediumText>
        <SmallText textStyles={{ fontSize: 18, color: colors.secondary }}>
          Recent transfers
          <Ionicons name="caret-down" size={14} color={colors.accent} />
        </SmallText>
      </UseageSectionRow>
      <UseageSectionList
        data={props.data}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 25,
        }}
        keyExtractor={({ id }: any) => id.toString()}
        renderItem={({ item }: any) => <UseageItems {...item} />}
      />
    </UseageSectionBackground>
  );
};

export default UseageSection;
