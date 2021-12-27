import "./App.css";
import { useState } from "react";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { Edit } from "./components/Edit";
function App() {
  const [todoItem, setTodoItem] = useState("");
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);
  const [edit, setEdit] = useState(" ");
  const [visible, setVisible] = useState(false);
  return (
    <div className="App">
      <TodoInput
        todoItem={todoItem}
        setTodoItem={setTodoItem}
        list={list}
        setList={setList}
        error={error}
        setError={setError}
      />
      <TodoList
        list={list}
        setList={setList}
        error={error}
        setError={setError}
        edit={edit}
        setEdit={setEdit}
        visible={visible}
        setVisible={setVisible}
      />
      <Edit
        edit={edit}
        setEdit={setEdit}
        visible={visible}
        setVisible={setVisible}
      />
    </div>
  );
}

export default App;
