import React from "react";
import { AppBar, Toolbar ,Typography} from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  appBar: {
    //background: "linear-gradient(to bottom, black, white)",
     background: "linear-gradient(to bottom, black, black)",
    boxShadow: "none",
    border:"none"
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <div  style={{display: "flex", justifyContent: "center",width: "100%"}}>
        <h2 style={{color: "white", textAlign: "center" }}>DEVREV - Library Management System - React </h2>
        </div>
        <Typography variant="h8" component="div" sx={{ flexGrow: 1, textAlign: 'right' }}>
          <p style={{color:"white"}}>PonKarthikeyan</p>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;