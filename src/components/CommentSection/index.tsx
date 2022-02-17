import { Container, Grid, Typography } from "@mui/material";
import { UserInfo } from "interface";
import React from "react";
import { CommentCard } from "./CommentCard";
interface CommentSectionProps {
  userInfoData: UserInfo[];
}
export const CommentSection = ({
  userInfoData,
}: CommentSectionProps): JSX.Element => {
  return (
    <Container sx={{ display: "flex", width: "600px", mt: 4, mb: 4 }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">Checkout our costumers reviews.</Typography>
        </Grid>
        {userInfoData &&
          userInfoData.map((userData: UserInfo) => (
            <Grid item xs={6} key={userData.id}>
              <CommentCard userData={userData} />
            </Grid>
          ))}

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>Our Comunity still growing.</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
