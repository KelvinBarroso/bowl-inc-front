import { Button, Container, Slide, Typography } from "@mui/material";
import React from "react";
import bowlMain from "./bowlMain.png";

export const Header = (): JSX.Element => {
  return (
    <header>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Slide
          direction="down"
          in
          style={{ transformOrigin: "0 0 0" }}
          {...{ timeout: 1000 }}
          mountOnEnter
          unmountOnExit
        >
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "600px",
              height: "600px",
            }}
          >
            <Typography variant="h1">bowl INC.</Typography>
            <Container
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <Container
                sx={{
                  display: "flex",
                  position: "absolute",
                  justifyContent: "center",
                }}
              >
                <Button variant="contained" sx={{ ml: 1 }}>
                  Subscribe
                </Button>
                <Button variant="contained" sx={{ mr: 1 }}>
                  Comment
              </Button>
              </Container>*/}

              <img src={bowlMain} alt="woman-holding-bowl" width="600" />
            </Container>
            <Typography variant="body1" sx={{ mt: 4 }}>
              YOU have it. WE bowl it.
            </Typography>
          </Container>
        </Slide>
      </Container>
    </header>
  );
};
