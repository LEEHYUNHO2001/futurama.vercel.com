import { Error } from "../components/Error";
import { Loading } from "../components/Loading";
import { useData } from "../hooks/useData";
import { EpisodesData } from "../types/episodes";
import styled from "@emotion/styled";

export const EpisodesCard = () => {
  const { data, error } = useData("episodes");
  if (error) return <Error />;
  if (!data) return <Loading />;
  return (
    <section>
      <H2>Episodes</H2>
      <Container>
        {data.map((episodesData: EpisodesData) => {
          const { number, title, writers, originalAirDate, desc, id } =
            episodesData;
          return (
            <SubContainer key={`futurama-cast-${id}`}>
              <h3>
                {title} ({number})
              </h3>
              <p>{desc}</p>
              <p>
                <strong>writers</strong> : {writers}
              </p>
              <p>
                <strong>originalAirDate</strong> : {originalAirDate}
              </p>
              <p></p>
            </SubContainer>
          );
        })}
      </Container>
    </section>
  );
};

const H2 = styled.h2`
  margin: 8vh 0;
  text-align: center;
  color: #16731c;
  &::before {
    content: "🥝 ";
  }
`;
const Container = styled.ul`
  width: 90vw;
  margin: 0vh 3vw;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3vw;
`;
const SubContainer = styled.li`
  list-style: none;
  padding: 10px;
  background-color: #262626;
  color: #fff;
`;
