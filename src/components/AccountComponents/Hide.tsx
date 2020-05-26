import React, { FC } from "react";
import { StyleSheet, ScrollView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import styled from "styled-components/native";
import { AntDesign } from "react-native-vector-icons";

import Colors from "../../constans/Colors";

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

const BackButton = styled(AntDesign)`
  font-size: ${wp("10%")};
  color: ${Colors.primary};
  right: ${wp("10%")};
  position: absolute;
  bottom: 0;
`;

const Title = styled.Text`
  text-align: center;
  margin-bottom: ${hp("2%")};
  font-weight: bold;
  color: ${Colors.primary};
  font-size: ${hp("4%")};
`;

const Description = styled.Text`
  text-align: justify;
  color: ${Colors.primary};
  width: ${wp("80%")};
  left: ${wp("10%")};
  font-size: ${hp("2.5%")};
  margin-bottom: ${hp("4%")};
`;

const Image = styled.Image`
  height: ${hp("50%")};
  width: ${wp("100%")};
  margin-top: ${hp("5%")};
`;

const Hide: FC<{ switchView(formView: boolean) }> = (props) => {
  const goToForm = () => {
    props.switchView(false);
  };

  return (
    <ScrollView style={styles.Container}>
      <Image source={require("../../assets/time.jpg")} />
      <Title>Put the hours in.</Title>
      <Description>
        90% of what separates successful people and failed people is time,
        effort and stamina. I get asked a lot “Your business card format is very
        simple. Arenʼt you worried about somebody ripping it off?” Standard
        Answer : Only if they can draw more of them than me, better than me.
        What gives the work its edge is the simple fact that Iʼve spent years
        drawing them. Iʼve drawn thousands. Tens of thousands of man-hours.
      </Description>
      <BackButton name="back" onPress={goToForm}></BackButton>
    </ScrollView>
  );
};

export default Hide;
