import React, { FunctionComponent, useRef } from "react";
import styled from "styled-components/native";
import BottomSheet from "reanimated-bottom-sheet";

import { colors } from "../Colors";
import MediumText from "../Texts/mediumText";
import SmallText from "../Texts/smallText";

const UsersBackground = styled.View`
  width: 100%;
  padding-top: 15px;
  background-color: ${colors.white};
`;
const UsersRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-horizontal: 25px;
`;
const UsersList = styled.FlatList`
  width: 100%;
  flex: auto;
  min-height: 80%;
  padding-horizontal: 25px;
`;
const PressBTN = styled.TouchableOpacity``;

import { UserSectionProps } from "./types";
import UsersContainer from "./userContainer";

const UsersAccounts: FunctionComponent<UserSectionProps> = (props) => {
  const bottomRef = useRef<BottomSheet>(null);
  const renderData = () => {
    return (
      <UsersBackground>
        <UsersRow style={{ marginBottom: 25 }}>
          <MediumText textStyles={{ fontSize: 16, color: colors.primary }}>
            Your attached Users
          </MediumText>
          <PressBTN onPress={() => alert("Added")}>
            <SmallText
              textStyles={{ fontWeight: "bold", color: colors.secondary }}
            >
              +Add
            </SmallText>
          </PressBTN>
        </UsersRow>
        <UsersList
          data={props.data}
          contentContainerStyle={{
            alignItems: "flex-start",
          }}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          keyExtractor={({ id }: any) => id.toString()}
          renderItem={({ item }: any) => <UsersContainer {...item} />}
        />
      </UsersBackground>
    );
  };
  return (
    <BottomSheet
      ref={bottomRef}
      snapPoints={[240, 85]}
      borderRadius={12}
      initialSnap={1}
      enabledContentTapInteraction={false}
      renderContent={renderData}
    />
  );
};

export default UsersAccounts;
