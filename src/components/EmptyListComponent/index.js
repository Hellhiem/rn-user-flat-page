// @flow
import React from "react";
import styled from "styled-components";

type PropsType = $Exact<{
  noItemsText: string
}>;

const Container = styled.View`
  margin-top: 25px;
  align-items: center;
`;

const Title = styled.Text`
  color: black;
  font-weight: bold;
  font-size: 24px;
`;

const EmptyListComponent = ({ noItemsText }: PropsType) => {
  return (
    <Container>
      <Title>{noItemsText}</Title>
    </Container>
  );
};

export default EmptyListComponent;
