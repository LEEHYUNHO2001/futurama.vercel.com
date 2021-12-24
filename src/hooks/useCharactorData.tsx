import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { API_ENDPOINT } from "../constants";

export const useCharactorData = () => {
  return useSWR(`${API_ENDPOINT}/characters`, fetcher);
};
