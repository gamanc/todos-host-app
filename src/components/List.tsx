import { Todo } from "../interfaces/Todo";

interface Props {
  items: Todo[];
  onTodoChange: (id: string, completed: boolean) => void;
}

const List = ({ items, onTodoChange }: Props) => {
  const handleCheckboxChange = (id: string, completed: boolean) => {
    onTodoChange(id, completed);
  };

  if (items.length === 0) {
    return <blockquote>There is no todo items. Add one to begin.</blockquote>;
  }

  return (
    <ul>
      {items.map(({ id, name, completed }) => (
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
  );
};

export default List;
