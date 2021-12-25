import styled from "@emotion/styled";
import { useData } from "../hooks/useData";
import { CharacterData } from "../types/characters";
import { CharacterCard } from "./CharacterCard";

export const CharacterCardContainer = () => {
  const { data, error } = useData("characters");
  if (error) return <div>Error...</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <Container>
        {data.map((character: CharacterData) => {
          const {
            age,
            gender,
            homePlanet,
            id,
            species,
            images,
            name,
            occupation,
            saying,
          } = character;
          return (
            <CharacterCard
              characterData={character}
              key={`futurama-character-${id}`}
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
`;
