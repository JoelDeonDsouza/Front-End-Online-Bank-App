import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { VirtualCardsSectionProps } from "./cardTypes";
import CardItems from "./cardItems";

const VirtualCardList = styled.FlatList`
  width: 100%;
  flex: 1;
  padding-left: 25px;
  padding-bottom: 15px;
`;

const VirtualCards: FunctionComponent<VirtualCardsSectionProps> = (props) => {
  return (
    <VirtualCardList
      data={props.data}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingRight: 25,
        alignItems: "center",
      }}
      keyExtractor={({ id }: any) => id.toString()}
      renderItem={({ item }: any) => <CardItems {...item} />}
    />
  );
};

export default VirtualCards;
