import { NextPage } from "next";
import { CastCard } from "../../components/CastCard";

const CastIndexPage: NextPage = () => {
  return (
    <div>
      <h1>Cast</h1>
      <CastCard />
    </div>
  );
};

export default CastIndexPage;
