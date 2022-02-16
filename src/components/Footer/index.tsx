import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
} from "@mui/material";
import React from "react";
import LinkIcon from "@mui/icons-material/Link";
import TwitterIcon from "@mui/icons-material/Twitter";
import StoreIcon from "@mui/icons-material/Store";

export const Footer = (): JSX.Element => {
  return (
    <footer>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <BottomNavigation sx={{ width: 600 }}>
          <BottomNavigationAction
            label="Link us"
            value="recents"
            icon={<LinkIcon />}
          />
          <BottomNavigationAction
            label="Tweet us"
            value="favorites"
            icon={<TwitterIcon />}
          />
          <BottomNavigationAction
            label="Shop us"
            value="nearby"
            icon={<StoreIcon />}
          />
        </BottomNavigation>
      </Container>
    </footer>
  );
};
