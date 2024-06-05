import { useMemo, useState } from "react";
import { Todo } from "../interfaces/Todo";

interface Props {
  items: Todo[];
  onTodoChange: (id: string, completed: boolean) => void;
}

type Filter = "all" | "active" | "completed";

const List = ({ items, onTodoChange }: Props) => {
  const [selectedFilter, setSelectedFilter] = useState<Filter>("all");

  const filteredTodos = useMemo(
    () =>
      [...items].filter((todo) => {
        if (selectedFilter === "all") return true;
        return todo.completed === (selectedFilter !== "active");
      }),
    [items, selectedFilter]
  );

  const handleCheckboxChange = (id: string, completed: boolean) => {
    onTodoChange(id, completed);
  };

  return (
    <>
      <div
        style={{
          display: "inline-flex",
          width: "100%",
          gap: 3,
        }}
      >
        <button
          style={{ width: "100%" }}
          onClick={() => setSelectedFilter("all")}
        >
          All
        </button>
        <button
          style={{ width: "100%" }}
          onClick={() => setSelectedFilter("active")}
        >
          Active
        </button>
        <button
          style={{ width: "100%" }}
          onClick={() => setSelectedFilter("completed")}
        >
          Completed
        </button>
      </div>
      {filteredTodos.length === 0 && (
        <blockquote>There is no todo items. Add one to begin.</blockquote>
      )}
      <ul>
        {filteredTodos.map(({ id, name, completed }) => (
          <li key={id}>
            <input
              type="checkbox"
              id={id}
              checked={completed}
              onChange={(e) => handleCheckboxChange(id, e.target.checked)}
            />
            <label
              htmlFor={id}
              style={{
                textDecoration: completed ? "line-through" : "none",
              }}
            >
              {name}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
