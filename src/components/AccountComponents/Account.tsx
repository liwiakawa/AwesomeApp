import React, { FC } from "react";
import { StyleSheet, ScrollView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import styled from "styled-components/native";

import Colors from "../../constans/Colors";

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});


const Gallery = styled.Image`
  height: ${hp("50%")};
  width: ${wp("100%")};
  margin-top: ${hp("5%")};
`;

const Paintings = styled.ScrollView`
  height: ${hp("19.5%")};
  width: ${wp("24.5%")};
  background: ${Colors.primary};
  position: absolute;
  top: ${hp("14.25%")};
  left: ${wp("37%")};
`;

const Picture = styled.Image`
  height: ${hp("19.5%")};
  width: ${wp("24.5%")};
  resize-mode: cover;
`;

const Title = styled.Text`
  text-align: center;
  margin-top: ${hp("4%")};
  margin-bottom: ${hp("2%")};
  font-weight: bold;
  color: ${Colors.darkgreen};
  font-size: ${hp("4%")};
`;

const Description = styled.Text`
  text-align: justify;
  color: ${Colors.darkgreen};
  width: ${wp("80%")};
  margin-top: ${hp("2%")};
  left: ${wp("10%")};
  font-size: ${hp("2.5%")};
  margin-bottom: ${hp("2%")};
`;

const Article = styled.Text`
  width: ${wp("40%")};
  text-align: right;
  color: ${Colors.darkgreen};
  font-size: ${hp("2.5%")};
  position: absolute;
  margin-top: ${hp("122.5%")};
  right: ${wp("10%")};
`;

const LearningGirl = styled.Image`
  height: ${hp("40%")};
  width: ${wp("50%")};
`;

const Frame = styled.View`
  height: ${hp("50%")};
  width: ${wp("100%")};
`;


const GalleryWithPeople = styled.Image`
  height: ${hp("50%")};
  width: ${wp("200%")};
`;


const ScrollGallery = styled.ScrollView`
  height: ${hp("100%")};
  width: ${wp("100%")};
`;

const HideBtn = styled.TouchableOpacity`
  position: absolute;
  right: ${wp("11%")};
  margin-top: ${hp("12.5%")};
`;

const BtnImg = styled.Image`
  height: ${hp("11.5%")};
  width: ${wp("20%")};
`;

const Account: FC<{ switchView(formView: boolean) }> = (props) => {
  const goToForm = () => {
    props.switchView(true);
  };
  return (
    <ScrollView style={styles.Container} showsVerticalScrollIndicator={false}>
      <Gallery source={require("../../assets/art.jpg")} />
      <Paintings
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      >
        <Picture source={require("../../assets/japan1.jpg")} />
        <Picture source={require("../../assets/japan2.jpg")} />
        <Picture source={require("../../assets/japan3.jpg")} />
        <Picture source={require("../../assets/japan4.jpg")} />
        <Picture source={require("../../assets/japan5.jpg")} />
        <Picture source={require("../../assets/japan6.jpg")} />
      </Paintings>
      <Title>How to be creative?</Title>
      <Description>
        You donʼt know if your idea is any good the moment itʼs created. Neither
        does anyone else. The most you can hope for is a strong gut feeling that
        it is. And trusting your feelings is not as easy as the optimists say it
        is. Thereʼs a reason why feelings scare us. And asking close friends
        never works quite as well as you hope, either. Itʼs not that they
        deliberately want to be unhelpful. Itʼs just they donʼt know your world
        one millionth as well as you know your world, no matter how hard they
        try, no matter how hard you try to explain.
      </Description>
      <Title>Ignore everybody.</Title>
      <LearningGirl source={require("../../assets/learn.png")} />
      <Article>
        Big idea will change you. Your friends may love you, but they donʼt want
        you to change. If you change, then their dynamic with you also changes.
        They like things the way they are, thatʼs how they love you—the way you
        are, not the way you may become
      </Article>
      <Title>And look around you...</Title>
      <Frame>
        <ScrollGallery
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEnabled
        >
          <GalleryWithPeople source={require("../../assets/gallery.jpg")} />
          <HideBtn onPress={goToForm}>
            <BtnImg
              source={require("../../assets/bulb.png")}
              onPress={goToForm}
            />
          </HideBtn>
        </ScrollGallery>
      </Frame>
    </ScrollView>
  );
};

export default Account;
