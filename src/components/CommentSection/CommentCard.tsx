import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { UserInfo } from "interface";

interface CommentCardProps {
  userData: UserInfo;
}
export const CommentCard = ({ userData }: CommentCardProps): JSX.Element => {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            {userData.name[0]}
          </Avatar>
        }
        title={userData.name}
        subheader={userData.email}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {userData.comment ? userData.comment : "Nothing to say."}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
