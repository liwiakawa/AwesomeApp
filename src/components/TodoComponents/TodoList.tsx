import React, { FC } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FontAwesome5, FontAwesome } from "react-native-vector-icons";
import styled from "styled-components/native";

import { IState } from "../../reducers";
import { ItodoListReducer } from "../../reducers/todoListReducer";
import { deleteTasktodoList } from "../../actions/todoListActions";
import { ITask } from "../../entities/task";
import Colors from "../../constans/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  AddBtnBox: {
    right: wp("2%"),
    position: "absolute",
    bottom: hp("3%"),
    width: wp("15%"),
    height: wp("15%"),
    backgroundColor: Colors.white,
    borderColor: Colors.primary,
    borderRadius: 400 / 2,
    borderWidth: wp("0.25%"),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  Titlebox: {
    backgroundColor: Colors.darkgreen,
    height: hp("5.5%"),
    width: wp("80%"),
    borderTopRightRadius: hp("3%"),
    borderBottomRightRadius: hp("3%"),
    marginTop: hp("6%"),
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

const Task = styled.View`
  height: ${hp("75%")};
  width: ${wp("90%")};
  margin-top: ${hp("3%")};
  left: ${hp("2.5%")};
  text-align: center;
  background: ${Colors.secondary};
`;

const Description = styled.Text`
  font-size: ${hp("2.5%")};
  text-align: justify;
  margin-top: ${hp("2%")};
  margin-left: ${wp("5%")};
  width: ${wp("78%")};
  color: #007a77;
`;

const Title = styled.Text`
  font-size: ${hp("4%")};
  left: ${wp("3%")};
  color: ${Colors.white};
`;

const Pencil = styled(FontAwesome5)`
  top: ${wp("2.5%")};
  font-size: ${wp("9%")};
  text-align: center;
  color: ${Colors.primary};
`;

const TimesBox = styled.TouchableOpacity`
  position: absolute;
  top: ${hp("-0.5%")};
  right: 0;
  background: ${Colors.white};
  height: ${wp("9%")};
  width: ${wp("9%")};
`;

const Times = styled(FontAwesome)`
  font-size: ${wp("10%")};
  color: ${Colors.primary};
`;

type DelNewTasktodoList = ReturnType<typeof deleteTasktodoList>;

const TodoList: FC<{ switchView(formView: boolean) }> = (props) => {
  const dispatch = useDispatch();
  const todoListState = useSelector<IState, ItodoListReducer>(
    (state) => state.todoList
  );

  const goToForm = () => {
    props.switchView(true);
  };

  const deleteTask = (id: number) => {
    dispatch<DelNewTasktodoList>(deleteTasktodoList(id));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {todoListState.todoList.map((elem: ITask, index: number) => (
          <Task key={index}>
            <View style={styles.Titlebox}>
              <Title>{elem.name}</Title>
            </View>
            <Description>{elem.description}</Description>
            <TimesBox>
              <Times
                name="times-rectangle"
                onPress={() => deleteTask(elem.id)}
              />
            </TimesBox>
          </Task>
        ))}
      </ScrollView>
      <View style={styles.AddBtnBox}>
        <Pencil name="pencil-alt" onPress={goToForm} />
      </View>
    </View>
  );
};

export default TodoList;
