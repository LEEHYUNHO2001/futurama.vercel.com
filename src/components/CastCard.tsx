import { Error } from "../components/Error";
import { Loading } from "../components/Loading";
import { useData } from "../hooks/useData";
import { CastData } from "../types/cast";

export const CastCard = () => {
  const { data, error } = useData("cast");
  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      {data.map((castData: CastData) => {
        const { name, born, died, bio, id } = castData;
        return (
          <div key={`futurama-cast-${id}`}>
            <h1>{name}</h1>
          </div>
        );
      })}
    </div>
  );
};
