/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { AxiosResponse } from "axios";
import axios from "config/axios";
import { UserInfo } from "interface";

const getUsersComments = async () => {
  const { data } = await axios.get("/usercomment");
  return data;
};

export const apiPost = async <T extends {}>(url: string, object: T) => {
  await axios.post<T, AxiosResponse<{ payload: T }>>(url, object);
};

export const userRequests = {
  getUsersComments,
  apiPost,
};
