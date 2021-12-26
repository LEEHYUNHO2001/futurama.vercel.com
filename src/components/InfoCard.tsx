import styled from "@emotion/styled";
import { InfoData } from "../types/info";
import { useData } from "../hooks/useData";
import { Error } from "../components/Error";
import { Loading } from "../components/Loading";

export const InfoCard = () => {
  const { data, error } = useData("info");
  if (error) return <Error />;
  if (!data) return <Loading />;
  return (
    <div>
      {data.map((info: InfoData) => {
        const { id, synopsis, yearsAired, creators } = info;
        return (
          <div key={`futurama-info-${id}`}>
            <p>{synopsis}</p>
            <p>{yearsAired}</p>
            {creators.map((creators) => {
              return (
                <p key={`info-creatort-${creators.name}`}>{creators.name}</p>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
