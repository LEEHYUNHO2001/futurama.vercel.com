import { Error } from "../components/Error";
import { Loading } from "../components/Loading";
import { useData } from "../hooks/useData";
import { EpisodesData } from "../types/episodes";
import styled from "@emotion/styled";
import { MEDIA_QUERY_END_POINT } from "../constants";

export const EpisodesCard = () => {
  const { data, error } = useData("episodes");
  if (error) return <Error />;
  if (!data) return <Loading />;
  return (
    <Section>
      <H2>Episodes</H2>
      <Container>
        {data.map((episodesData: EpisodesData) => {
          const { number, title, writers, originalAirDate, desc, id } =
            episodesData;
          return (
            <SubContainer key={`futurama-cast-${id}`}>
              <H3>
                {title} ({number})
              </H3>
              <p>{desc}</p>
              <p>
                <Strong>writers</Strong> : {writers}
              </p>
              <p>
                <Strong>originalAirDate</Strong> : {originalAirDate}
              </p>
              <p></p>
            </SubContainer>
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
  text-align: center;
  margin: 20vh 0 5vh 0;
  color: #16731c;
  &::before {
    content: "🥝 ";
  }
`;
const H3 = styled.h3`
  color: deeppink;
`;
const Strong = styled.strong`
  color: #3fa6a6;
`;
const Container = styled.ul`
  width: 90vw;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3vw;
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    grid-template-columns: repeat(3, 1fr);
    font-size: 14px;
  }
  @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const SubContainer = styled.li`
  list-style: none;
  padding: 10px;
  background-color: #262626;
  color: #fff;
`;
