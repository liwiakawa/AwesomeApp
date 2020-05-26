import React, { useState } from "react";
import { View } from "react-native";

import Form from "../../components/TodoComponents/Form";
import TodoList from "../../components/TodoComponents/TodoList";

const TodoListScreen = ({}) => {
  const [formView, setFormView] = useState<boolean>(false);
  return (
    <View style={{ flex: 1 }}>
      {formView ? (
        <Form switchView={setFormView} />
      ) : (
        <TodoList switchView={setFormView} />
      )}
    </View>
  );
};

export default TodoListScreen;
