import { InfoData } from "../types/info";
import { useData } from "../hooks/useData";
import { Error } from "../components/Error";
import { Loading } from "../components/Loading";
import Link from "next/link";
import styled from "@emotion/styled";
import { MEDIA_QUERY_END_POINT } from "../constants";

export const InfoCard = () => {
  const { data, error } = useData("info", "");
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
              <H3>Synopsis</H3>
              <Synopsis>{synopsis}</Synopsis>

              <H3>Years Aired</H3>
              <p>{yearsAired}</p>

              <H3>Creators</H3>
              {creators.map((creators) => {
                return (
                  <p key={`info-creatort-${creators.name}`}>
                    <Link href={creators.url}>
                      <a>{creators.name} &#128072; More</a>
                    </Link>
                  </p>
                );
              })}
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
`;

const H2 = styled.h2`
  text-align: center;
  margin: 20vh 0 5vh 0;
  color: #f20530;
  &::before {
    content: "🍅 ";
  }
`;
const H3 = styled.h3`
  background-color: #a9bf04;
  color: #03a62c;
  border-radius: 5px;
  display: inline;
  padding: 5px;
`;
const Container = styled.article`
  width: 80vw;
  padding: 20px 50px;
  background-color: #fff;
  border-radius: 20px;
  @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    font-size: 12px;
  }
`;
const Synopsis = styled.p`
  font-size: 20px;
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    font-size: 16px;
  }
  @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    font-size: 12px;
  }
`;
