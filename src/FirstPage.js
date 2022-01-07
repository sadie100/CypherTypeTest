import React from "react";
import Container from "@mui/material/Container";
//import { Link, Route, BrowserRouter as Router } from "react-router-dom";

function FirstPage({ match }) {
  console.log({ match });
  const { clickstate } = match.params;
  console.log({ clickstate });
  if ({ clickstate }) {
    return <div>당신, 클릭하셨군요?</div>;
  }
  return (
    <div className="FirstPage">
      <Container fixed>여기는 첫번째 페이지 입니다.</Container>
    </div>
  );
}

export default FirstPage;
