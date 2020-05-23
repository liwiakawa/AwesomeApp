import React, { FC } from "react";
import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Container = styled.View`
  position: relative;
  width: ${wp("100%")};
  height: ${hp("5%")};
`;

const Gap: FC = () => {
  return <Container></Container>;
};

export default Gap;
