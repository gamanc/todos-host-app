import { useState } from "react";
import { v4 } from "uuid";

import List from "./components/List";
import Input from "./components/Input";
import { Todo } from "./interfaces/Todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: v4(), name: "Buy milk", completed: true },
  ]);

  const [todoName, setTodoName] = useState<string>("");

  const addTodo = () => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: v4(), name: todoName, completed: false },
    ]);
    setTodoName("");
  };

  const checkTodo = (id: string, completed: boolean) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  };

  return (
    <>
      <Input value={todoName} onChange={setTodoName} onSubmit={addTodo} />
      <List items={todos} onTodoChange={checkTodo} />
    </>
  );
}

export default App;
