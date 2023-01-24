import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import Header from "./components/Header";
import TaskModal from "./components/TaskModal";
import TodoItem from "./components/TodoItem";
import { AsyncStorage } from "@react-native-async-storage/async-storage";

export default function App() {
  const [todos, setTodos] = useState([
    { title: "클래스101 커리큘럼 만들기", done: true },
    { title: "운전면허 도로주행 연수", done: false },
  ]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    try {
      const todoList = AsyncStorage.getItem("@todo:state");
      if (todoList) {
        // 앱 저장소에서 가져올 때 원래 형태로 바꿔서 가져오기
        setTodos(JSON.parse(todoList));
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleSave = useCallback(() => {
    try {
      const todoList = AsyncStorage.setItem("@todo:state");
      if (todoList) {
        // 앱 저장소에 저장할 때 문자열로 저장
        AsyncStorage.setItem("@todo:state", JSON.stringify(todos));
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        show={() => {
          setShowModal(true);
        }}
      />
      <FlatList
        data={todos}
        renderItem={({ item, index }) => {
          return (
            <TodoItem
              title={item.title}
              done={item.done}
              remove={() => {
                setTodos(todos.filter((_, i) => i !== index));
                handleSave();
              }}
              toggle={() => {
                const newTodos = [...todos];
                newTodos[index].done = !newTodos[index].done;
                setTodos(newTodos);
                handleSave();
              }}
            />
          );
        }}
        keyExtractor={() => {
          (_, index) => `${index}`;
        }}
      />
      <TaskModal
        isVisible={showModal}
        hide={() => setShowModal(false)}
        add={(title) => {
          setTodos(todos.concat([{ title: title, done: false }]));
          setShowModal(false);
          handleSave();
        }}
      ></TaskModal>
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
