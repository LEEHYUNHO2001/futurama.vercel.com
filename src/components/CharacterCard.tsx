import styled from "@emotion/styled";
import { CharacterData } from "../types/characters";

interface CharacterCardProps {
  characterData: CharacterData;
}

export const CharacterCard = ({ characterData }: CharacterCardProps) => {
  const { species, images, name, occupation, saying, age, gender, homePlanet } =
    characterData;
  return (
    <Card>
      <ImgContainer>
        <Profile src={images.main} alt={name.first} />
        <div>
          <h3>
            {name.first} {name.middle} {name.last}
          </h3>
          <p>gender : {gender}</p>
          <p>species : {species}</p>
          {homePlanet && <p>homePlanet : {homePlanet}</p>}
        </div>
      </ImgContainer>
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
const ImgContainer = styled.div`
  display: flex;
`;
const Profile = styled.img`
  width: 100%;
  aspect-ratio: 9 / 10;
  object-fit: contain;
`;
