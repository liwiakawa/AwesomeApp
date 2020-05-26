import React, { FC } from "react";
import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { View, StyleSheet } from "react-native";
import { Octicons, MaterialIcons } from "react-native-vector-icons";

import Colors from "../../constans/Colors";

const styles = StyleSheet.create({
  SectionTitleConatiner: {
    backgroundColor: Colors.secondary,
    width: wp("60%"),
    height: hp("5%"),
    borderTopRightRadius: hp("3%"),
    borderBottomRightRadius: hp("3%"),
    left: wp("5.5%"),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
});

const SectionTitle = styled.Text`
  color: ${Colors.primary};
  font-size: ${hp("4%")};
  left: ${wp("3%")};
`;

const SectionContainer = styled.ScrollView`
  height: ${hp("39%")};
  width: ${wp("100%")};
`;

const LeftArrowContainer = styled.View`
  margin-left: 0;
  width: ${wp("8%")};
`;
const RightArrowContainer = styled.View`
  margin-right: 0;
  width: ${wp("8%")};
`;
const LeftArrow = styled(MaterialIcons)`
  color: ${Colors.primary};
  font-size: ${hp("5%")};
  top: 40%;
`;
const RightArrow = styled(MaterialIcons)`
  color: ${Colors.primary};
  font-size: ${hp("5%")};
  top: 40%;
`;

const Box = styled.View`
  background: ${Colors.secondary};
  border-top-left-radius: ${hp("7%")};
  border-bottom-right-radius: ${hp("7%")};
  height: ${hp("33%")};
  width: ${wp("84%")};
  margin-left: 0;
  top: ${wp("5%")};
  margin-right: 0;
`;

const CustomImage = styled.Image`
  height: ${hp("15%")};
  width: ${wp("77%")};
  left: ${wp("3%")};
  top: ${hp("1.5%")};
  border-radius: ${hp("7%")};
`;

const BoxTitle = styled.Text`
  color: ${Colors.primary};
  left: ${wp("3%")};
  top: ${hp("17%")};
  width: ${wp("32%")};
  position: absolute;
  overflow: hidden;
  text-align: justify;
  font-size: ${hp("3%")};
`;

const Time = styled.Text`
  color: ${Colors.primary};
  left: ${wp("3%")};
  top: ${hp("21%")};
  width: ${wp("32%")};
  position: absolute;
  overflow: hidden;
  text-align: justify;
`;

const BoxTxt = styled.Text`
  color: ${Colors.primary};
  left: ${wp("3%")};
  top: ${hp("24%")};
  width: ${wp("75%")};
  position: absolute;
  overflow: hidden;
`;
const Stereotypes: FC = () => {
  return (
    <View style={{ flex: 1 }}>
        <View style={styles.SectionTitleConatiner}>
        <SectionTitle>Stereotypes</SectionTitle>
      </View>
      <SectionContainer
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      >
        <LeftArrowContainer />
        <Box>
          <CustomImage source={require("../../assets/4.jpg")} />
          <BoxTitle>Introduction</BoxTitle>
          <Time>3-5 min read</Time>
          <BoxTxt>
            The truth is that every single individual can be creative. You
            simply require the right environment, stimulus, and support.
          </BoxTxt>
        </Box>
        <RightArrowContainer>
          <RightArrow name="keyboard-arrow-right" />
        </RightArrowContainer>
        <LeftArrowContainer>
          <LeftArrow name="keyboard-arrow-left" />
        </LeftArrowContainer>
        <Box>
          <CustomImage source={require("../../assets/5.jpg")} />
          <BoxTitle>Introduction</BoxTitle>
          <Time>3-5 min read</Time>
          <BoxTxt>
            The truth is that every single individual can be creative. You
            simply require the right environment, stimulus, and support.
          </BoxTxt>
        </Box>
        <RightArrowContainer>
          <RightArrow name="keyboard-arrow-right" />
        </RightArrowContainer>
        <LeftArrowContainer>
          <LeftArrow name="keyboard-arrow-left" />
        </LeftArrowContainer>
        <Box>
          <CustomImage source={require("../../assets/6.jpg")} />
          <BoxTitle>Introduction</BoxTitle>
          <Time>3-5 min read</Time>
          <BoxTxt>
            The truth is that every single individual can be creative. You
            simply require the right environment, stimulus, and support.
          </BoxTxt>
        </Box>
        <RightArrowContainer></RightArrowContainer>
      </SectionContainer>
    </View>
  );
};

export default Stereotypes;
