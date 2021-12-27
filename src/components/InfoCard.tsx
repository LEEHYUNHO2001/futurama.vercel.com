import { InfoData } from "../types/info";
import { useData } from "../hooks/useData";
import { Error } from "../components/Error";
import { Loading } from "../components/Loading";
import Link from "next/link";
import styled from "@emotion/styled";

export const InfoCard = () => {
  const { data, error } = useData("info");
  if (error) return <Error />;
  if (!data) return <Loading />;
  return (
    <Section>
      <H2>Info</H2>
      <Container>
        {data.map((info: InfoData) => {
          const { id, synopsis, yearsAired, creators } = info;
          return (
            <div key={`futurama-info-${id}`}>
              <h3>Synopsis</h3>
              <Synopsis>{synopsis}</Synopsis>
              <SubContainer>
                <h3>Years Aired</h3>
                <p>{yearsAired}</p>
              </SubContainer>
              <SubContainer>
                <h3>Creators</h3>
                {creators.map((creators) => {
                  return (
                    <p key={`info-creatort-${creators.name}`}>
                      <Link href={creators.url}>
                        <a>{creators.name} &#128072; More</a>
                      </Link>
                    </p>
                  );
                })}
              </SubContainer>
            </div>
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
  height: 100vh;
`;

const H2 = styled.h2`
  text-align: center;
  margin-top: 15vh;
  color: #f20530;
  &::before {
    content: "🍅 ";
  }
`;

const Container = styled.article`
  width: 80vw;
  height: 70vh;
  padding: 20px 50px;
  background-color: #fff;
  border-radius: 20px;
`;
const SubContainer = styled.div`
  margin-top: 5vh;
`;
const Synopsis = styled.p`
  font-size: 20px;
`;
