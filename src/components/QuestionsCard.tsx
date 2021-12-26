import { Error } from "../components/Error";
import { Loading } from "../components/Loading";
import { useData } from "../hooks/useData";
import { QuestionsData } from "../types/questions";

export const QuestionsCard = () => {
  const { data, error } = useData("questions");
  if (error) return <Error />;
  if (!data) return <Loading />;
  return (
    <div>
      {data.map((questionsData: QuestionsData) => {
        const { id, question, possibleAnswers, correctAnswer } = questionsData;
        return (
          <div key={`futurama-questions-${id}`}>
            <h1>{question}</h1>
          </div>
        );
      })}
    </div>
  );
};
