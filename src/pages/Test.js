import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "components/base/Header";
import Page1 from "pages/test/Page1";
import { styled } from "@mui/styles";
import { QuestionData } from "pages/test/QuestionData";
import { NormalText } from "components/styledComponent/TextDiv";

const Wrapper = styled("div")({
  zIndex: "200",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "30px",
  width: "100%",
  height: "100%",
});

const Test = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <NormalText>1. 하..금요일..</NormalText>
      </Wrapper>
    </>
  );
};

export default Test;
