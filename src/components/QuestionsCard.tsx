import { Error } from "../components/Error";
import { Loading } from "../components/Loading";
import { useData } from "../hooks/useData";
import { QuestionsData } from "../types/questions";
import styled from "@emotion/styled";
import { useState } from "react";

const onClickPossible = (
  questionsData: QuestionsData,
  possible: string,
  e: any
) => {
  if (questionsData.correctAnswer === possible) {
    alert("정답");
  } else {
    alert("오답");
  }
};

export const QuestionsCard = () => {
  const { data, error } = useData("questions");
  const [answerFlag, setAnswerFlag] = useState(false);

  const openAnswer = () => {
    setAnswerFlag(!answerFlag);
  };

  if (error) return <Error />;
  if (!data) return <Loading />;
  return (
    <div>
      <H2>Questions</H2>
      <ItemContainer>
        <OpenAnswer onClick={openAnswer}>Open Answer</OpenAnswer>
        {data.map((questionsData: QuestionsData, index: number) => {
          const { id, question, possibleAnswers, correctAnswer } =
            questionsData;
          return (
            <Item key={`futurama-questions-${id}`}>
              <H3>
                {index + 1}. {question}
              </H3>
              <p>
                {possibleAnswers.map((possible, posIdx) => {
                  return (
                    <ul key={`possibleAnswers-${possible}`}>
                      <Possible
                        onClick={(e) => {
                          onClickPossible(questionsData, possible, e);
                        }}
                      >
                        {possible}
                      </Possible>
                    </ul>
                  );
                })}
              </p>
              {answerFlag && (
                <Answer className="Answer">{correctAnswer}</Answer>
              )}
            </Item>
          );
        })}
      </ItemContainer>
    </div>
  );
};

const H2 = styled.h2`
  margin: 8vh 0;
  text-align: center;
  color: #bf754b;
  &::before {
    content: "🥜 ";
  }
`;
const H3 = styled.h3`
  font-size: 30px;
`;
const ItemContainer = styled.ul`
  width: 80vw;
  list-style: none;
  margin-left: 10vw;
  background-color: #c9ebf2;
  display: flex;
  flex-direction: column;
`;
const Item = styled.li``;
const Possible = styled.li`
  font-size: 20px;
  line-height: 35px;
  cursor: pointer;
  &:hover {
    color: blue;
    font-weight: bold;
  }
`;
const OpenAnswer = styled.p`
  cursor: pointer;
  background-color: #f29191;
  padding: 20px;
  margin-right: 3vw;
  text-align: center;
  font-size: 20px;
  &:hover {
    font-weight: bold;
    background-color: #f24bb8;
  }
`;
const Answer = styled.span`
  color: red;
  font-weight: bold;
`;
