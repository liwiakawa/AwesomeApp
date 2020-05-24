import React, { FC, useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { useSelector} from "react-redux";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialCommunityIcons, FontAwesome5 } from "react-native-vector-icons";

import { IState } from "../../reducers";
import { ItodoListReducer } from "../../reducers/todoListReducer";
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
    top: hp("83%"),
    width: wp("15%"),
    height: wp("15%"),
    backgroundColor: Colors.white,
    borderColor: Colors.primary,
    borderRadius: 400 / 2,
    borderWidth: wp("0.25%"),
  },
  AddBtnIcon: {
    top: wp("2.5%"),
    fontSize: wp("9%"),
    textAlign: "center",
    color: Colors.primary,
  },
  SingleElList: {
    height: hp("75%"),
    width: wp("90%"),
    marginTop: hp("3%"),
    left: hp("2.5%"),
    textAlign: "center",
    backgroundColor: Colors.secondary,
  },
  Titletxt: {
    fontSize: hp("4%"),
    left: wp("3%"),
    color: Colors.white,
    marginTop: hp("0%"),
  },
  Titlebox: {
    backgroundColor: Colors.primary,
    height: hp("5.5%"),
    width: wp("80%"),
    borderTopRightRadius: hp("3%"),
    borderBottomRightRadius: hp("3%"),
    marginTop: hp("5%"),
  },
  Descriptiontxt: {
    fontSize: hp("2.5%"),
    textAlign: "justify",
    marginTop: hp("2%"),
    marginLeft: wp("5%"),
    width: wp("78%"),
    color: "#007a77",
  },
});

const TodoList: FC<{ switchView(formView: boolean) }> = (props) => {
  const todoListState = useSelector<IState, ItodoListReducer>(
    (state) => state.todoList
  );

  const goToForm = () => {
    props.switchView(true);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {todoListState.todoList.map((elem: ITask, index: number) => (
          <View style={styles.SingleElList} key={index}>
            <View style={styles.Titlebox}>
              <Text style={styles.Titletxt}>{elem.name}</Text>
            </View>
            <Text style={styles.Descriptiontxt}>{elem.description}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.AddBtnBox}>
        <FontAwesome5
          name="pencil-alt"
          style={styles.AddBtnIcon}
          onPress={goToForm}
        />
      </View>
    </View>
  );
};

export default TodoList;
