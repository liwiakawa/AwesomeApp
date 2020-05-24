import React, { FC, useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native";

import { IState } from "../../reducers";
import { ItodoListReducer } from "../../reducers/todoListReducer";
import { setNewTasktodoList } from "../../actions/todoListActions";
import { ITask } from "../../entities/task";
import Colors from "../../constans/Colors";

const Header = styled.Image`
resize-mode: stretch;
height: ${hp("15%")};
width: ${wp("100%")};
`
const HeaderTxt = styled.Text`
  position: absolute;
  top: ${hp("4%")};
  color: ${Colors.white};
  height: ${hp("10%")};
  width: ${wp("70%")};
  font-size: ${hp("3.5%")};
  text-align: center;
`;

const Title = styled.Text`
color: ${Colors.primary};
text-align: left;
margin-top: ${hp("7%")};
height: ${hp("6%")};
width: ${wp("90%")};
left: ${hp("2.5%")};
font-size: ${hp("3.5%")};
`;

const TitleInput = styled.TextInput`
background: ${Colors.tertiary};
  text-align: center;
  margin-top: ${hp("3%")};
  height: ${hp("6%")};
  width: ${wp("90%")};
  left: ${hp("2.5%")};
  font-size: ${hp("2.5%")};
  border-top-left-radius: ${hp("7%")};
  border-bottom-right-radius: ${hp("7%")};
`;

const DescriptionInput = styled.TextInput`
background: ${Colors.tertiary};
  text-align: center;
  margin-top: ${hp("3%")};
  height: ${hp("20%")};
  width: ${wp("90%")};
  left: ${hp("2.5%")};
  font-size: ${hp("2.5%")};
  border-top-left-radius: ${hp("7%")};
  border-bottom-right-radius: ${hp("7%")};
`;

const AddButton = styled.TouchableOpacity`
  background: ${Colors.primary};
  text-align: center;
  margin-top: ${hp("7%")};
  height: ${hp("6%")};
  width: ${wp("90%")};
  left: ${hp("2.5%")};
`;

const TxtAddBtn = styled.Text`
  font-size: ${hp("2.5%")};
  text-align: center;
  margin-top: ${hp("1.5%")};
  color: ${Colors.white};
`;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

type SetNewTasktodoList = ReturnType<typeof setNewTasktodoList>;

const Form: FC<{ switchView(formView: boolean) }> = (props) => {
  const dispatch = useDispatch();
  const [nameInput, setNameInput] = useState<string>("");
  const [descInput, setDescInput] = useState<string>("");

  const nameValueChange = (txt) => {
    setNameInput(txt.nativeEvent.text);
  };

  const descriptionValueChange = (txt) => {
    setDescInput(txt.nativeEvent.text);
  };

  const saveData = () => {
    dispatch<SetNewTasktodoList>(
      setNewTasktodoList({
        id: Date.now(),
        name: nameInput,
        description: descInput,
      } as ITask)
    );
    props.switchView(false);
  };

  return (
    <View style={styles.Container}>
      <Header source={require("../../assets/wave.jpg")} ></Header>
      <HeaderTxt>Let's make something awesome</HeaderTxt>
      <Title>Title</Title>
  
      <TitleInput
        value={nameInput}
        onChange={nameValueChange}
        placeholder="Title"
        placeholderTextColor={Colors.primary}
        maxLength={20}
      />
      <Title>Description</Title>
      <DescriptionInput
        value={descInput}
        onChange={descriptionValueChange}
        placeholder="Description"
        placeholderTextColor={Colors.primary}
        multiline={true}
        blurOnSubmit={true}
      />
      <AddButton onPress={saveData}>
        <TxtAddBtn>Let's go!</TxtAddBtn>
      </AddButton>
    </View>
  );
};

export default Form;
