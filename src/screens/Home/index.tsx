import React, { FC } from 'react';
import styled from 'styled-components/native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { Octicons, MaterialIcons } from "react-native-vector-icons";

import Colors from '../../constans/Colors';

const Container = styled.ScrollView`
    flex: 1;
    background: #97ac9f;
`;

const Background = styled.Image`
    resize-mode: cover;
`;

const LightBulbContainer = styled.View`
    background: ${Colors.secondary};
    border-radius: ${hp('100%')};
    width: ${wp("20%")};
    height: ${wp("20%")};
    position: absolute;
    top: ${hp('20%')};
    left: ${wp('40%')};
`;

const LightBulb = styled(Octicons)`
    color: ${Colors.white};
    font-size: ${hp("8%")};
    top:  ${hp('1.5%')};
    text-align: center;
`;

const Title  = styled.Text`
    color: ${Colors.white};
    position: absolute;
    top: ${hp('40%')};
    font-size: ${hp("3%")};
    text-align: center;
    width: ${wp("84%")};
    left: ${wp('8%')};
    font-weight: bold;
`;

const SectionTitleContainer = styled.View`
    background: ${Colors.secondary};
    position: absolute;
    width: ${wp("55%")};
    height: ${hp("5%")};
    margin-top: ${hp("55%")};
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
position: absolute;
marginTop: ${hp("60%")};
`;

const LeftArrowContainer = styled.View`
    margin-left: 0;
    width: ${wp("8%")};
    background: yellow;
`;
const RightArrowContainer = styled.View`
    margin-right: 0;
    width: ${wp("8%")};
    background: black;
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
borderTopLeftRadius: ${hp("3%")};
borderBottomLeftRadius: ${hp("3%")};
`;

interface IHomeProps { }

const Home: FC<IHomeProps> = (props) => {
    return (
        <Container>
            <Background
                source={require('../../assets/forest.png')}
            />
            <LightBulbContainer>
                <LightBulb name="light-bulb"></LightBulb>
            </LightBulbContainer>
            <Title>Zostań specjalistą od pielęgnacji domowej. Jak dbać o skórę w tym
        trudnym czasie?</Title>
        <SectionTitleContainer>
        <SectionTitle>Oczyszczanie</SectionTitle>
        </SectionTitleContainer>
        <SectionContainer
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}>
            <RightArrowContainer></RightArrowContainer>
            <Box>
            <CustomImage
                     source={require("../../assets/1.png")}
          ></CustomImage>
            </Box>
        </SectionContainer>
            </Container>
    );
};

export default Home;