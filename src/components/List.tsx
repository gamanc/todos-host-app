import { Todo } from "../interfaces/Todo";

interface Props {
  items: Todo[];
}

const List = ({ items }: Props) => {
  return (
    <ul>
      {items.map(({ id, name, completed }) => (
        <li>
          <input type="checkbox" id={id} checked={completed} />
          <label htmlFor={id}>{name}</label>
        </li>
      ))}
    </ul>
  );
};

export default List;
