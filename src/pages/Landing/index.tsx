import { Paper } from "@mui/material";
import { CommentSection } from "components/CommentSection";
import React from "react";
import { useMutation, useQuery } from "react-query";
import { userRequests } from "services/userRequests";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { UserForm } from "../../components/UserForm";
import { UserInfo } from "../../interface";

export const Landing = (): JSX.Element => {
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
      onError: (err: any) => {
        alert(err);
      },
    }
  );

  const onComment = useMutation(
    (userData: UserInfo) => userRequests.postComment(userData),
    {
      onSuccess: () => {
        alert("Commented suceffully");
      },
      onError: (err: any) => {
        alert(err);
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
