import React, { FC } from "react";
import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialIcons } from "react-native-vector-icons";

import Colors from "../../../constans/Colors";

const Container = styled.View``;

const SectionTitleContainer = styled.View`
  background: ${Colors.secondary};
  position: absolute;
  margin-top: ${hp("55%")};
  width: ${wp("55%")};
  height: ${hp("5%")};
  border-top-right-radius: ${hp("3%")};
  border-bottom-right-radius: ${hp("3%")};
`;

const SectionTitle = styled.Text`
  color: ${Colors.white};
  font-size: ${hp("4%")};
  left: ${wp("2%")};
`;

const SectionContainer = styled.ScrollView`
  background: #ffffff30;
  height: ${hp("39%")};
  width: ${wp("100%")};
  margin-top: ${hp("60%")};
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
  color: #00000060;
  font-size: ${hp("5%")};
  top: 40%;
`;
const RightArrow = styled(MaterialIcons)`
  color: #00000060;
  font-size: ${hp("5%")};
  top: 40%;
`;

const Box = styled.View`
  background: ${Colors.secondary};
  border-radius: ${hp("3%")};
  height: ${hp("33%")};
  width: ${wp("84%")};
  margin-left: 0;
  top: ${wp("5%")};
  margin-right: 0;
`;
const CustomImage = styled.Image`
  height: ${hp("30%")};
  width: ${wp("45%")};
  left: ${wp("3%")};
  top: ${hp("1.5%")};
  border-top-left-radius: ${hp("3%")};
  border-bottom-left-radius: ${hp("3%")};
`;

const BoxTitle = styled.Text`
  color: ${Colors.white};
  right: ${wp("2%")};
  top: ${hp("1.5%")};
  width: ${wp("32%")};
  position: absolute;
  overflow: hidden;
  text-align: justify;
  font-size: ${hp("3%")};
`;

const Time = styled.Text`
  color: ${Colors.white};
  right: ${wp("2%")};
  top: ${hp("6%")};
  width: ${wp("32%")};
  position: absolute;
  overflow: hidden;
  text-align: justify;
`;

const BoxTxt = styled.Text`
  color: ${Colors.white};
  right: ${wp("2%")};
  top: ${hp("9%")};
  width: ${wp("32%")};
  position: absolute;
  overflow: hidden;
`;

const Clean: FC = () => {
  return (
    <Container>
      <SectionTitleContainer>
        <SectionTitle>Oczyszczanie</SectionTitle>
      </SectionTitleContainer>
      <SectionContainer
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      >
        <LeftArrowContainer />
        <Box>
          <CustomImage source={require("../../../assets/1.png")} />
          <BoxTitle>Wstęp</BoxTitle>
          <Time>3-5 min czytania</Time>
          <BoxTxt>
            Wcho­dzisz do dro­ge­rii, wi­dzisz pół­ki ugi­na­ją­ce się od mydeł,
            żeli, toników. Czym się kierować?
          </BoxTxt>
        </Box>
        <RightArrowContainer>
          <RightArrow name="keyboard-arrow-right" />
        </RightArrowContainer>
        <LeftArrowContainer>
          <LeftArrow name="keyboard-arrow-left" />
        </LeftArrowContainer>
        <Box>
          <CustomImage source={require("../../../assets/2.png")} />
          <BoxTitle>Wstęp</BoxTitle>
          <Time>3-5 min czytania</Time>
          <BoxTxt>
            Wcho­dzisz do dro­ge­rii, wi­dzisz pół­ki ugi­na­ją­ce się od mydeł,
            żeli, toników. Czym się kierować?
          </BoxTxt>
        </Box>
        <RightArrowContainer>
          <RightArrow name="keyboard-arrow-right" />
        </RightArrowContainer>
        <LeftArrowContainer>
          <LeftArrow name="keyboard-arrow-left" />
        </LeftArrowContainer>
        <Box>
          <CustomImage source={require("../../../assets/3.png")} />
          <BoxTitle>Wstęp</BoxTitle>
          <Time>3-5 min czytania</Time>
          <BoxTxt>
            Wcho­dzisz do dro­ge­rii, wi­dzisz pół­ki ugi­na­ją­ce się od mydeł,
            żeli, toników. Czym się kierować?
          </BoxTxt>
        </Box>
        <RightArrowContainer></RightArrowContainer>
      </SectionContainer>
    </Container>
  );
};

export default Clean;
