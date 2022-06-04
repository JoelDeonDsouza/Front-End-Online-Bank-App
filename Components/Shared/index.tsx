import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { colors } from "../Colors";

export const ScreenWidth = Dimensions.get("screen").width;

export const ScreenHeight = Dimensions.get("screen").height;

export const screenContainer = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${colors.light};
`;
