import { NextPage } from "next";
import { useData } from "../../hooks/useData";
import styled from "@emotion/styled";
import { InfoData } from "../../types/info";

const InfoIndexPage: NextPage = () => {
  const { data, error } = useData("info");
  if (error) return <div>Error...</div>;
  if (!data) return <div>Loading...</div>;
  console.log(data);

  return (
    <div>
      <h1>Info</h1>
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
    </div>
  );
};

export default InfoIndexPage;
