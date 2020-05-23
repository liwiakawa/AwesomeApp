import React, { FC } from "react";
import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Octicons } from "react-native-vector-icons";

import Colors from "../../constans/Colors";
import Clean from "../../components/HomeSections/Clean";
import Tonic from "../../components/HomeSections/Tonic";
import Care from "../../components/HomeSections/Care";
import Materials from "../../components/HomeSections/Materials";
import Mits from "../../components/HomeSections/Mits";
import Routin from "../../components/HomeSections/Routin";
import Gap from "../../components/HomeSections/Gap";

const Container = styled.ScrollView`
  background: #97ac9f;
`;

const Background = styled.Image`
  resize-mode: cover;
  position: absolute;
`;

const LightBulbContainer = styled.View`
  background: ${Colors.secondary};
  border-radius: ${hp("100%")};
  width: ${wp("20%")};
  height: ${wp("20%")};
  position: absolute;
  top: ${hp("20%")};
  left: ${wp("40%")};
  box-shadow: 10px 5px 5px grey;
`;

const LightBulb = styled(Octicons)`
  color: ${Colors.white};
  font-size: ${hp("8%")};
  top: ${hp("1.5%")};
  text-align: center;
`;

const Title = styled.Text`
  color: ${Colors.white};
  position: absolute;
  top: ${hp("40%")};
  font-size: ${hp("3%")};
  text-align: center;
  width: ${wp("84%")};
  left: ${wp("8%")};
  font-weight: bold;
`;

interface IHomeProps {}

const Home: FC<IHomeProps> = (props) => {
  return (
    <Container>
      <Background source={require("../../assets/forest.png")} />
      <LightBulbContainer>
        <LightBulb name="light-bulb"></LightBulb>
      </LightBulbContainer>
      <Title>
        Zostań specjalistą od pielęgnacji domowej. Jak dbać o skórę w tym
        trudnym czasie?
      </Title>
      <Clean />
      <Gap />
      <Tonic />
      <Gap />
      <Care />
      <Gap />
      <Materials />
      <Gap />
      <Routin />
      <Gap />
      <Mits />
    </Container>
  );
};

export default Home;
