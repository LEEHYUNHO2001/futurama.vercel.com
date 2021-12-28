import styled from "@emotion/styled";
import { useData } from "../hooks/useData";
import { CharacterData } from "../types/characters";
import { CharacterCard } from "./CharacterCard";
import { Error } from "./Error";
import { Loading } from "./Loading";
import { MEDIA_QUERY_END_POINT } from "../constants";

export const CharacterCardContainer = () => {
  const { data, error } = useData("characters", "");
  if (error) return <Error />;
  if (!data) return <Loading />;
  return (
    <Section>
      <H2>Charactors</H2>
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
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const H2 = styled.h2`
  margin: 20vh 0 5vh 0;
  text-align: center;
  color: deeppink;
  &::before {
    content: "🍑 ";
  }
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5vw;
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    font-size: 12px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
