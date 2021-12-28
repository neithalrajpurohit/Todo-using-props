import "./App.css";
import { useState } from "react";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

function App() {
    const [todoItem, setTodoItem] = useState("");
    const [list, setList] = useState([]);
    const [error, setError] = useState(false);
    const [edit, setEdit] = useState(" ");

    return (
        <div className="App">
            <TodoInput
                todoItem={todoItem}
                setTodoItem={setTodoItem}
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
                edit={edit}
                setEdit={setEdit}
            />
        </div>
    );
}

export default App;
