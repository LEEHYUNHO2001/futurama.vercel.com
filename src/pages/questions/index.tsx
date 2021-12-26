import { NextPage } from "next";
import { QuestionsCard } from "../../components/QuestionsCard";

const QuestionsIndexPage: NextPage = () => {
  return (
    <div>
      <h1>Questions</h1>
      <QuestionsCard />
    </div>
  );
};

export default QuestionsIndexPage;
