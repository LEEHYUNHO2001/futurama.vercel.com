import { Error } from "../components/Error";
import { Loading } from "../components/Loading";
import { useData } from "../hooks/useData";
import { EpisodesData } from "../types/episodes";

export const EpisodesCard = () => {
  const { data, error } = useData("episodes");
  if (error) return <Error />;
  if (!data) return <Loading />;
  return (
    <div>
      {data.map((episodesData: EpisodesData) => {
        const { number, title, writers, originalAirDate, desc, id } =
          episodesData;
        return (
          <div key={`futurama-cast-${id}`}>
            <h1>{title}</h1>
          </div>
        );
      })}
    </div>
  );
};
