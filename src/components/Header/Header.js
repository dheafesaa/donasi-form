import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import logo from "../../assets/img/logo.png";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#FFFFFF",
    boxShadow: "none",
  },
  logo: {
    width: "auto",
    height: "50px",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <Button edge="start" aria-label="menu">
          <img src={logo} className={classes.logo} alt="Logo IST" />
        </Button>
        <Typography variant="h6" style={{ color: "#000000" }}>
          Donasi
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
