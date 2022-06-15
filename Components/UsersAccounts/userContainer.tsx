import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { ScreenWidth } from "../Shared";

import { UserAccountProps } from "./types";
import Profile from "../Header/profile";
import { colors } from "../Colors";
import MediumText from "../Texts/mediumText";
import SmallText from "../Texts/smallText";

const UserContainerComponent = styled.TouchableHighlight`
  height: 130px;
  width: ${ScreenWidth * 0.27}px;
  padding: 10px;
  justify-content: space-around;
  border-radius: 15px;
  margin: 0px 10px 10px 0px;
`;

const UsersContainer: FunctionComponent<UserAccountProps> = (props) => {
  return (
    <UserContainerComponent
      underlayColor={colors.white}
      style={{ backgroundColor: props.background }}
      onPress={() => {
        alert("send Money");
      }}
    >
      <>
        <Profile img={props.img} imgContainerStyle={{ marginBottom: 10 }} />
        <SmallText
          textStyles={{ textAlign: "left", color: colors.white, fontSize: 14 }}
        >
          {props.name}
        </SmallText>
        <MediumText
          textStyles={{ color: colors.white, textAlign: "left", fontSize: 18 }}
        >
          €{props.amount}
        </MediumText>
      </>
    </UserContainerComponent>
  );
};

export default UsersContainer;
