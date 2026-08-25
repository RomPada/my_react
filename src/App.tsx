import { useState } from "react";
import "./App.css";
import ProgressCard from "./components/ProgressCard";
import UserInfo from "./components/UserCard";
import { TaskCounter } from "./components/TaskCounter";
import { ResetButton } from "./components/TaskCounter";
import { useCounter } from "./components/TaskCounter";
import { StatusChange } from "./components/StatusToggle";
import { GreetingToggle } from "./components/GreetingToggle";
import { GreetingInput } from "./components/GreetingToggle";
import { CounterText } from "./components/Counter";
import { Counter } from "./components/Counter";
import { CounterButton } from "./components/Counter";

function App() {
  const [greeting, setGreeting] = useState("Аве");
  const studentName: string = "John";
  const topic: string = "How to retire from fucking army";
  const completedTasks: number = 0;
  const totalTasks: number = 13;
  const userAge: number = 30;
  const userCity: string = "Kyiv";
  const userExperience: string = "Beginner";
  const [count, setCount] = useCounter();
  const [isLearning, setIsLearning] = useState(true);
  const [inputGreeting, setInputGreeting] = useState("");
  const [inputText, setInputText] = useState("");

  return (
    <div className="cards">
      <div className="card">
        <CounterText inputText={inputText} setInputText={setInputText} />
        <Counter inputText={inputText} />
        <CounterButton inputText={inputText} setInputText={setInputText} />
      </div>
      <div className="card">
        <StatusChange isLearning={isLearning} setIsLearning={setIsLearning} />
      </div>
      <div className="card">
        <TaskCounter count={count} setCount={setCount} />
        <ResetButton count={count} setCount={setCount} />
      </div>
      <div className="card">
        <GreetingInput
          inputGreeting={inputGreeting}
          setInputGreeting={setInputGreeting}
        />
        <GreetingToggle
          inputGreeting={inputGreeting}
          setInputGreeting={setInputGreeting}
          setGreeting={setGreeting}
        />
        <ProgressCard
          greeting={greeting}
          setGreeting={setGreeting}
          studentName={studentName}
          topic={topic}
          completedTasks={completedTasks}
          totalTasks={totalTasks}
          isLearning={isLearning}
        />
      </div>
      <div className="card">
        <UserInfo
          userAge={userAge}
          userCity={userCity}
          userExperience={userExperience}
        />
      </div>
    </div>
  );
}

export default App;
