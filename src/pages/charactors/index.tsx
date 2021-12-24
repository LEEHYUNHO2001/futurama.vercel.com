import type { NextPage } from "next";
import useSWR from "swr";
import axios from "axios";
import { CharactorData } from "../types/charactors";

const fetcher = (url: string) => axios(url).then((res) => res.data);

const CharactorsIndexPage: NextPage = () => {
  const { data, error } = useSWR(
    "https://api.sampleapis.com/futurama/characters",
    fetcher
  );
  console.log(data);
  if (error) return <div>Error...</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <main>
        <h1>Charactors</h1>
        <p>
          {data.map((charactor: CharactorData) => {
            const {
              age,
              gender,
              homePlanet,
              id,
              species,
              images,
              name,
              occupation,
              saying,
            } = charactor;
            return (
              <div key={`futurama-charactor-${id}`}>
                <img src={images.main} alt={name.first} />
                <h1>
                  {name.first} {name.middle} {name.last}
                </h1>
              </div>
            );
          })}
        </p>
      </main>
    </div>
  );
};

export default CharactorsIndexPage;
