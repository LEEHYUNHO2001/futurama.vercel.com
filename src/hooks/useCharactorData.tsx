import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export const useCharactorData = () => {
  return useSWR("https://api.sampleapis.com/futurama/characters", fetcher);
};
