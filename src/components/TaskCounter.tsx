import { useState } from "react";

export function useCounter() {
  const [count, setCount] = useState(0);
  return [count, setCount] as const;
}

type TaskCounterProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

export function TaskCounter({ count, setCount }: TaskCounterProps) {
  return (
    <div>
      <p>{count}</p>
      <button className="button" onClick={() => setCount(count + 1)}>
        Кнопка збільшення
      </button>
    </div>
  );
}

export function ResetButton({ setCount }: TaskCounterProps) {
  return (
    <div>
      <button className="button" onClick={() => setCount(0)}>
        Кнопка скидання
      </button>
    </div>
  );
}
