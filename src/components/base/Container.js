import React, { useEffect } from "react";
import { styled } from "@mui/styles";
import RiverFord from "assets/image/RiverFord.jpg";

const AppWrapper = styled("div")({
  width: "100vw",
  minHeight: "100dvh",
  display: "flex",
  backgroundImage: `url(${RiverFord})`,
  backgroundPosition: "center",
  backgroundSize: "100% 100%",
  backgroundAttachment: "fixed",
});
const BlackShade = styled("div")({
  width: "100vw",
  height: "100dvh",
  position: "fixed",
  backgroundColor: "black",
  opacity: 0.7,
});
const App = styled("div")({
  padding: "0.5rem",
  display: "flex",
  backgroundColor: "none",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  // height: "100%",
});

const Container = ({ children }) => {
  return (
    <>
      <BlackShade />
      <AppWrapper>
        <App>{children}</App>
      </AppWrapper>
    </>
  );
};

export default Container;
