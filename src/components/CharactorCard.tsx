import styled from "@emotion/styled";
import { CharactorData } from "../types/charactors";

interface CharactorCardProps {
  charactorData: CharactorData;
}

export const CharactorCard = ({ charactorData }: CharactorCardProps) => {
  const { images, name } = charactorData;
  return (
    <Card>
      <Profile src={images.main} alt={name.first} />
      <h1>
        {name.first} {name.middle} {name.last}
      </h1>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  max-width: 360px;
`;
const Profile = styled.img`
  width: 100%;
  aspect-ratio: 9 / 16;
  object-fit: contain;
`;
