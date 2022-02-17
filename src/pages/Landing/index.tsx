import { Paper } from "@mui/material";
import { CommentSection } from "components/CommentSection";
import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { userRequests } from "services/userRequests";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { UserForm } from "../../components/UserForm";
import { UserInfo } from "../../interface";

export const Landing = (): JSX.Element => {
  const queryClient = useQueryClient();
  const { data } = useQuery("data", () => userRequests.getUsersComments(), {
    retry: 2,
    staleTime: 0,
  });

  const onSubscribe = useMutation(
    (userData: UserInfo) => userRequests.postSubscribe(userData),
    {
      onSuccess: () => {
        alert("Subscribed suceffully");
      },
      onError: () => {
        alert('User already subscribed.');
      },
    }
  );

  const onComment = useMutation(
    (userData: UserInfo) => userRequests.postComment(userData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("data");
        alert("Commented suceffully");
      },
      onError: () => {
        alert("Something went wrong");
      },
    }
  );

  return (
    <Paper>
      <Header />
      <UserForm hasComment={false} handleSubmit={onSubscribe.mutate} />
      <CommentSection userInfoData={data} />
      <UserForm hasComment handleSubmit={onComment.mutate} />
      <Footer />
    </Paper>
  );
};
