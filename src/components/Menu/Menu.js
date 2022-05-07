import React from "react";
import Box from "@mui/material/Box";
import Typography from "@material-ui/core/Typography";
import FormInput from "../FormInput/FormInput";

const Menu = () => {
  return (
    <Box
      sx={{
        margin: "20px 40px",
        padding: "40px",
        borderRadius: "25px",
        display: "flex",
        flexDirection: "column",
        minWidth: 500,
        minHeight: 470,
        backgroundColor: "#FFFFFF",
      }}
    >
      <Typography variant="h5" style={{ marginBottom: 20 }}>
        Mari Donasi
      </Typography>
      <FormInput />
    </Box>
  );
};

export default Menu;
