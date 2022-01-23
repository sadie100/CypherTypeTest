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
  width: "100%",
  height: "100%",
  backgroundColor: "black",
  zIndex: "100",
  opacity: 0.7,
});
const App = styled("div")({
  padding: "0.5rem",
  display: "flex",
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
  }, []);

  return (
    <AppWrapper>
      <BlackShade>
        <App>{children}</App>
      </BlackShade>
    </AppWrapper>
  );
};

export default Container;
