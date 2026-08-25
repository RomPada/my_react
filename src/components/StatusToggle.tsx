type StatusChangeProps = {
  isLearning: boolean;
  setIsLearning: React.Dispatch<React.SetStateAction<boolean>>;
};

export function StatusChange({ isLearning, setIsLearning }: StatusChangeProps) {
  return (
    <div>
      <p>
        Статус:{" "}
        <span className="status">
          {isLearning ? "навчання триває" : "навчання призупинено"}
        </span>
      </p>
      <button className="button" onClick={() => setIsLearning(!isLearning)}>
        Кнопка зміни
      </button>
    </div>
  );
}
