import styled from "@emotion/styled";
import { useCharactorData } from "../hooks/useCharactorData";
import { CharactorData } from "../types/charactors";
import { CharactorCard } from "./CharactorCard";

export const CharactorCardContainer = () => {
  const { data, error } = useCharactorData();
  if (error) return <div>Error...</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <Container>
        {data.map((charactor: CharactorData) => {
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
          } = charactor;
          return (
            <CharactorCard
              charactorData={charactor}
              key={`futurama-charactor-${id}`}
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
