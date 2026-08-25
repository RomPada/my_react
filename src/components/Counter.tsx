type CounterTextProps = {
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
};

export function CounterText({ inputText, setInputText }: CounterTextProps) {
  return (
    <input
      type="text"
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
      placeholder="Введіть привітання"
    />
  );
}

export function Counter({ inputText }: CounterTextProps) {
  return <p>Символів: {inputText.length} </p>;
}

export function CounterButton({ inputText, setInputText }: CounterTextProps) {
  return (
    <button
      disabled={inputText === ""}
      className="button"
      onClick={() => 
        setInputText("")
      }
    >
      Очистити
    </button>
  );
}
