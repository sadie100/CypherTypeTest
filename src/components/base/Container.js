import React, { useEffect } from "react";
import { styled } from "@mui/styles";
import RiverFord from "assets/image/RiverFord.jpg";

const AppWrapper = styled("div")({
  width: "100vw",
  height: "calc(var(--vh, 1vh) * 100)",
  backgroundImage: `url(${RiverFord})`,
  backgroundPosition: "center",
  backgroundSize: "100% 100%",
  backgroundAttachment: "fixed",
});
const BlackShade = styled("div")({
  width: "100vw",
  height: "calc(var(--vh, 1vh) * 100)",
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
  height: "100%",
});

const Container = ({ children }) => {
  let vh = 0;

  useEffect(() => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, [window.innerHeight]);

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
