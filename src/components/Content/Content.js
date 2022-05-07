import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Menu from "../Menu/Menu";

const Content = () => {
  return (
    <>
      <CssBaseline />
      <Container
        sx={{
          minHeight: "100vh",
          minWidth: "100vw",
          padding: "64px 16px 30px",
          backgroundColor: "rgb(244, 247, 251)",
          display: "flex",
          flexDirection: "row",
          placeContent: "center start",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "100% 100px",
          backgroundImage:
            'url("https://frosty-bohr-0b24fe.netlify.app/static/media/logo.82f62bca.png")',
        }}
      >
        <Menu />
      </Container>
    </>
  );
}

export default Content;