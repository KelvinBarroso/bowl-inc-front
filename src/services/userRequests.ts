/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from "config/axios";
import { UserInfo } from "interface";

const getUsersComments = async () => {
  const { data } = await axios.get("/usercomment");
  return data;
};
const postSubscribe = async (userData: UserInfo) => {
  await axios.post("/usersubscribe", { ...userData });
};
const postComment = async (userData: UserInfo) => {
  await axios.post("/usercomment", { ...userData });
};

export const userRequests = {
  getUsersComments,
  postComment,
  postSubscribe,
};
