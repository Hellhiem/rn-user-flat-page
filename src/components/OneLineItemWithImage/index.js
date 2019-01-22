// @flow
import React from "react";
import styled from "styled-components";
import FastImage from "react-native-fast-image";

type PropsType = $Exact<{
  imageSource: string,
  title: string
}>;

const Container = styled.View`
  padding: 15px 20px 15px 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Image = styled(FastImage)`
  width: 60px;
  height: 60px
  border-radius: 30px;
`;

const Title = styled.Text`
  color: black;
  font-weight: bold;
  font-size: 24px;
`;

const OneLineItemWithImage = ({ imageSource, title }: PropsType) => {
  return (
    <Container>
      <Image source={{ uri: imageSource }} />
      <Title>{title}</Title>
    </Container>
  );
};

export default OneLineItemWithImage;
