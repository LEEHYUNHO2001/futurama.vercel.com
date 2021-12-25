import type { NextPage } from "next";
import { CharacterCardContainer } from "../../components/CharacterCardContainer";

const CharactorsIndexPage: NextPage = () => {
  return (
    <div>
      <h1>Futurama Charactors List</h1>
      <CharacterCardContainer />
    </div>
  );
};

export default CharactorsIndexPage;
