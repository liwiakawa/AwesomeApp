import React, { FC } from "react";
import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Octicons } from "react-native-vector-icons";

import Colors from "../../constans/Colors";
import Clean from "../Home/Sections/Clean";
import Tonic from "../Home/Sections/Tonic";
import Care from "../Home/Sections/Care";
import Materials from "../Home/Sections/Materials";
import Mits from "../Home/Sections/Mits";
import Routin from "../Home/Sections/Routin";
import Gap from "../../screens/Home/Sections/Components/Gap";

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
