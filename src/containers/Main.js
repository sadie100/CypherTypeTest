import React, { useState } from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import styled from "styled-components";
import RiverFord from "assets/image/RiverFord.jpg";

const useStyles = makeStyles((theme) => {
  return {
    App: {
      width: "100vw",
      height: "100vh",
      backgroundImage: `url(${RiverFord})`,
      backgroundPosition: "center",
      backgroundSize: "100% 100%",
      backgroundAttachment: "fixed",
    },
    BlackShade: {
      width: "100%",
      height: "100%",
      backgroundColor: "black",
      zIndex: "100",
      opacity: 0.7,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    Title: {
      color: "white",
      fontSize: "120px",
      textAlign: "center",
      fontFamily: "orelega",
      "& .C": {
        color: "red",
      },
    },
  };
});

const Main = () => {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <div className={classes.BlackShade}>
        <div className={classes.Title}>
          <span className="C">C</span>YPHERS LIBRARY
        </div>
      </div>
    </div>
  );
};

export default Main;
