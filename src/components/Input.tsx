import { FormEvent, ChangeEvent } from "react";

interface Props {
  onChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  value: string;
}

const Input = ({ value, onChange, onSubmit }: Props) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.trim() === "") return;
    onSubmit(e);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={value}
          required
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
        />
        <button type="submit">Add to do</button>
      </div>
    </form>
  );
};

export default Input;
