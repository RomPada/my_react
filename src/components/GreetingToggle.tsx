type InputGreetingChangeProps = {
  inputGreeting: string;
  setInputGreeting: React.Dispatch<React.SetStateAction<string>>;
  // greeting: string;
  setGreeting: React.Dispatch<React.SetStateAction<string>>;
};

export function GreetingInput({
  inputGreeting,
  setInputGreeting,
}: InputGreetingChangeProps) {
  return (
    <input
      type="text"
      value={inputGreeting}
      onChange={(e) => setInputGreeting(e.target.value)}
      placeholder="Введіть привітання"
    />
  ); 
}

export function GreetingToggle({
  setGreeting,
  inputGreeting,
  setInputGreeting,
}: InputGreetingChangeProps) {
  return (
    <div>
      <button
        disabled={inputGreeting === ""}
        className="button"
        onClick={() => {
          setGreeting(inputGreeting);
          setInputGreeting("");
        }}
      >
        Змінити привітання
      </button>
    </div>
  );
}
