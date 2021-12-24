import type { NextPage } from "next";
import useSWR from "swr";
import axios from "axios";
import { CharactorData } from "../types/charactors";
import styled from "@emotion/styled";

const fetcher = (url: string) => axios(url).then((res) => res.data);

const CharactorsIndexPage: NextPage = () => {
  const { data, error } = useSWR(
    "https://api.sampleapis.com/futurama/characters",
    fetcher
  );
  if (error) return <div>Error...</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Charactors</h1>
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
            <CharactorCard key={`futurama-charactor-${id}`}>
              <Profile src={images.main} alt={name.first} />
              <h1>
                {name.first} {name.middle} {name.last}
              </h1>
            </CharactorCard>
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
const CharactorCard = styled.div`
  display: flex;
  max-width: 360px;
`;
const Profile = styled.img`
  width: 100%;
  aspect-ratio: 9 / 16;
  object-fit: contain;
`;

export default CharactorsIndexPage;
