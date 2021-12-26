import styled from "@emotion/styled";
import { useData } from "../hooks/useData";
import { CharacterData } from "../types/characters";
import { CharacterCard } from "./CharacterCard";
import { Error } from "./Error";
import { Loading } from "./Loading";

export const CharacterCardContainer = () => {
  const { data, error } = useData("characters");
  if (error) return <Error />;
  if (!data) return <Loading />;
  return (
    <div>
      <H2>Futurama Charactors List</H2>
      <Container>
        {data.map((character: CharacterData) => {
          return (
            <CharacterCard
              characterData={character}
              key={`futurama-character-${character.id}`}
            />
          );
        })}
      </Container>
    </div>
  );
};

//할 일 : 미디어 쿼리 추가하기

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-left: 5vw;
`;

const H2 = styled.h2`
  margin: 8vh 0;
  text-align: center;
  color: deeppink;
  &::before {
    content: "🍑 ";
  }
`;
