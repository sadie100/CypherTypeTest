import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { useHistory } from "react-router-dom";
import { NormalText, Title } from "components/styledComponent/TextDiv";
import { StyledButton } from "components/styledComponent/FormComponents";
import Container from "components/base/Container";

const useStyles = makeStyles((theme) => {
  return {
    wrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "30px",
      width: "100%",
      height: "100%",
    },
  };
});

const Main = () => {
  const handleClick = () => {
    history.push("/test/1");
  };
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.wrapper}>
      <Title>
        <span className="C">사</span>이퍼즈<br></br>
        <span className="White">성향 테스트</span>
      </Title>
      <NormalText>
        테스트를 통해 사이퍼즈 플레이 성향을 알아봅시다.
        <br></br>
        <span className="C">#가보자고</span>
      </NormalText>
      <StyledButton onClick={handleClick}>테스트 시작</StyledButton>
    </div>
  );
};

export default Main;
