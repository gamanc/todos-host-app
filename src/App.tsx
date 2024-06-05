import { useState } from "react";
import List from "./components/List";
import { Todo } from "./interfaces/Todo";
import { v4 } from "uuid";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: v4(), name: "Buy milk", completed: false },
  ]);

  return (
    <>
      <List items={todos} />
    </>
  );
}

export default App;
