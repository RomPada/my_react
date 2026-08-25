type ProgressCardProps = {
  greeting: string;
  setGreating: React.Dispatch<React.SetStateAction<string>>;
  studentName: string;
  topic: string;
  completedTasks: number;
  totalTasks: number;
  isLearning: boolean;
};

function ProgressCard({
  greeting,
  studentName,
  topic,
  completedTasks,
  totalTasks,
  isLearning,
}: ProgressCardProps) {
  return (
    <div>
      <h1>
        {greeting}, {studentName}
      </h1>
      <p>Зараз я вивчаю: {topic}</p>
      <p>
        Виконано задач: {completedTasks} із {totalTasks}
      </p>
      <p className="status">
        {isLearning ? "Навчання триває" : "Навчання призупинено"}
      </p>
    </div>
  );
}

export default ProgressCard;
