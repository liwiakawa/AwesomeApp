import React, { FC, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";
import { MaterialIcons } from "react-native-vector-icons";

import { setNewTasktodoList } from "../../actions/todoListActions";
import { ITask } from "../../entities/task";
import Colors from "../../constans/Colors";

const Header = styled.Image`
  resize-mode: stretch;
  height: ${hp("15%")};
  width: ${wp("100%")};
`;

const HeaderTxt = styled.Text`
  position: absolute;
  top: ${hp("4%")};
  color: ${Colors.white};
  height: ${hp("10%")};
  width: ${wp("70%")};
  font-size: ${hp("3.5%")};
  text-align: center;
`;

const TitleInput = styled.TextInput`
  background: ${Colors.secondary};
  text-align: center;
  margin-top: ${hp("4%")};
  height: ${hp("6%")};
  width: ${wp("90%")};
  left: ${hp("2.5%")};
  font-size: ${hp("2.5%")};
`;

const DescriptionInput = styled.TextInput`
  background: ${Colors.secondary};
  text-align: center;
  margin-top: ${hp("4%")};
  height: ${hp("20%")};
  width: ${wp("90%")};
  left: ${hp("2.5%")};
  font-size: ${hp("2.5%")};
`;

const AddButton = styled.TouchableOpacity`
  background: ${Colors.primary};
  text-align: center;
  margin-top: ${hp("8%")};
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

const BackButton = styled(MaterialIcons)`
  font-size: ${wp("10%")};
  color: ${Colors.primary};
  bottom: ${hp("2.5%")};
  position: absolute;
`;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  Titlebox: {
    backgroundColor: Colors.darkgreen,
    height: hp("5.5%"),
    width: wp("50%"),
    borderTopRightRadius: hp("3%"),
    borderBottomRightRadius: hp("3%"),
    marginTop: hp("3%"),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  TitleTxt: {
    color: Colors.white,
    fontSize: hp("4%"),
    marginLeft: hp("2.5%"),
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
    if (nameInput === "" || descInput === "") {
      console.log("Please fill in all fields");
    } else {
      dispatch<SetNewTasktodoList>(
        setNewTasktodoList({
          id: Date.now(),
          name: nameInput,
          description: descInput,
        } as ITask)
      );
      props.switchView(false);
    }
  };

  const BackToForm = () => {
    props.switchView(false);
  };

  return (
    <View style={styles.Container}>
      <Header source={require("../../assets/wave.jpg")}></Header>
      <HeaderTxt>Let's make something awesome</HeaderTxt>
      <View style={styles.Titlebox}>
        <Text style={styles.TitleTxt}>Title </Text>
      </View>
      <TitleInput
        value={nameInput}
        onChange={nameValueChange}
        placeholderTextColor={Colors.primary}
        maxLength={20}
      />
      <View style={styles.Titlebox}>
        <Text style={styles.TitleTxt}>Description </Text>
      </View>
      <DescriptionInput
        value={descInput}
        onChange={descriptionValueChange}
        placeholderTextColor={Colors.primary}
        multiline={true}
        blurOnSubmit={true}
        keyboardAppearance={"light"}
      />
      <AddButton onPress={saveData}>
        <TxtAddBtn>Let's go!</TxtAddBtn>
      </AddButton>
      <BackButton name="keyboard-arrow-left" onPress={BackToForm}></BackButton>
    </View>
  );
};

export default Form;
