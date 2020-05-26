import React, { FC } from "react";
import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StyleSheet, ScrollView} from "react-native";

import Colors from "../../constans/Colors";
import CreativeThink from "../../components/HomeComponents/CreativeThink";
import Stereotypes from "../../components/HomeComponents/Stereotypes";
import Minimal from "../../components/HomeComponents/Minimal";
import Creativity from "../../components/HomeComponents/Creativity";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

const Image = styled.Image`
  resize-mode: contain;
  position: absolute;
  width: ${wp("100%")};
  height: ${hp("100%")};
  top: 0;
  z-index: -1;
`;

const Background = styled.View`
  position: absolute;
  background: #7ce3c6;
  width: ${wp("100%")};
  height: ${hp("200%")};
  top: ${hp("65%")};
`;

const Stripe = styled.View`
  position: absolute;
  background: ${Colors.darkgreen};
  width: ${wp("86%")};
  height: ${hp("200%")};
  left: ${wp("7%")};
`;
const Title = styled.Text`
  top: ${hp("38.75%")};
  height: ${hp("15%")};
  width: ${wp("37.5%")};
  right: ${wp("7%")};
  color: ${Colors.primary}
  position: absolute;
  font-size: ${hp("4%")};
  text-align: right;
  font-weight: 500;
`;

interface IHomeProps {}

const Home: FC<IHomeProps> = (props) => {
  return (
    <ScrollView style={styles.container}>
      <Image source={require("../../assets/bg.jpg")} />
      <Background>
        <Stripe />
      </Background>
      <Title>Become {"\n"} a creativity expert.</Title>
      <CreativeThink />
      <Minimal />
      <Creativity />
      <Stereotypes />
    </ScrollView>
  );
};

export default Home;
