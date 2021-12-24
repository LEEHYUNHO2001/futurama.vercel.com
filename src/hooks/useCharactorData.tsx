import useSWR from "swr";
import axios from "axios";

const fetcher = (url: string) => axios(url).then((res) => res.data);

export const useCharactorData = () => {
  return useSWR("https://api.sampleapis.com/futurama/characters", fetcher);
};
