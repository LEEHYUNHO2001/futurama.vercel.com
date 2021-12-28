import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { API_ENDPOINT } from "../constants";

export const useData = (name: string, path: string | string[] | undefined) => {
  let str;
  if (path === "") {
    str = `${API_ENDPOINT}/${name}`;
  } else {
    str = `${API_ENDPOINT}/${name}/${path}`;
  }
  return useSWR(str, fetcher);
};
