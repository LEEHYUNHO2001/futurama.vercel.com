import styled from "@emotion/styled";
import Link from "next/link";
import { CharacterData } from "../types/characters";
import { MEDIA_QUERY_END_POINT } from "../constants";

interface CharacterCardProps {
  characterData: CharacterData;
}

export const CharacterCard = ({ characterData }: CharacterCardProps) => {
  const {
    id,
    species,
    images,
    name,
    occupation,
    saying,
    age,
    gender,
    homePlanet,
  } = characterData;
  return (
    <Card>
      <Link href={`/characters/${id}`}>
        <ImgContainer>
          <Profile src={images.main} alt={name.first} />
          <div>
            <h3>
              {name.first} {name.middle} {name.last}
            </h3>
            <p>
              <strong>gender</strong>
              <br />
              {gender}
            </p>
            <p>
              <strong>species</strong>
              <br />
              {species}
            </p>
            {homePlanet && (
              <p>
                <strong>homePlanet</strong>
                <br />
                {homePlanet}
              </p>
            )}
          </div>
        </ImgContainer>
      </Link>
    </Card>
  );
};

const Card = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin-bottom: 10vh;
  background-color: #fff;
  border-radius: 20px;
  padding: 50px 40px 50px 0px;
`;
const ImgContainer = styled.a`
  display: flex;
  cursor: pointer;
  &:hover {
    background-color: #f29191;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;
const Profile = styled.img`
  width: 100%;
  aspect-ratio: 9 / 10;
  object-fit: contain;
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    aspect-ratio: 12 / 10;
  }
`;
