import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { API_ENDPOINT } from "../constants";

export const useData = (name: string) => {
  return useSWR(`${API_ENDPOINT}/${name}`, fetcher);
};
