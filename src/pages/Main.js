import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { useHistory } from "react-router-dom";
import {
  StyledButton,
  NormalText,
  Title,
  Wrapper,
} from "components/styledComponent/common";
import Container from "components/base/Container";

const Main = () => {
  const handleClick = () => {
    history.push("/test/0");
  };
  const history = useHistory();

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Main;
