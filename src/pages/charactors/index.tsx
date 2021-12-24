import type { NextPage } from "next";
import { CharactorCardContainer } from "../../components/CharactorCardContainer";

const CharactorsIndexPage: NextPage = () => {
  return (
    <div>
      <h1>Futurama Charactors List</h1>
      <CharactorCardContainer />
    </div>
  );
};

export default CharactorsIndexPage;
