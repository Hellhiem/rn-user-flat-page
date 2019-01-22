// @flow
import React from "react";
import styled from "styled-components";

type PropsType = $Exact<{
  pageNumber: number,
  indicatorTitle: string
}>;

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px 10px 20px;
  border-color: grey;
  border-top-width: 1px;
  border-bottom-width: 1px;
`;

const IndicatorText = styled.Text`
  color: black;
  font-weight: bold;
  font-size: 24px;
`;

const PageIndicator = ({ pageNumber, indicatorTitle }: PropsType) => {
  return (
    <Container>
      <IndicatorText>{indicatorTitle}</IndicatorText>
      <IndicatorText>{pageNumber}</IndicatorText>
    </Container>
  );
};

export default PageIndicator;
