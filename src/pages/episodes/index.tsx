import { NextPage } from "next";
import { EpisodesCard } from "../../components/EpisodesCard";

const EpisodesIndexPage: NextPage = () => {
  return (
    <div>
      <h1>Episodes</h1>
      <EpisodesCard />
    </div>
  );
};

export default EpisodesIndexPage;
