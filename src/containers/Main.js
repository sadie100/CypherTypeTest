import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import styled from "styled-components";

const useStyles = makeStyles((theme) => {
  return {
    CommonBox: {
      border: "1px solid red",
      backgroundColor: "blue",
    },
    SpecialBox: {
      border: "1px solid pink",
      backgroundColor: "gray",
    },
    ThemeBox: {
      border: `3px solid ${theme.palette.mantis}`,
      backgroundColor: theme.palette.spindle,
    },
  };
});

const SDiv = styled(Button)`
  border: 1px solid blue;
  background-color: red;
`;

const Main = () => {
  const classes = useStyles();

  const [clickstate, setState] = useState(false);
  console.log("전역 clickstate = " + clickstate);

  function clickEvent() {
    setState(!clickstate);
  }

  return (
    <div className="App">
      <Container fixed>
        머테리얼 유아이를 사용해서 화면들을 만들어 봅시다.
        <div>
          <Link to={`/FirstPage/${clickstate}`}>
            <Button variant="contained" color="secondary">
              다음 페이지로
            </Button>
          </Link>
        </div>
        {/* <div style={{border:"1px solid blue", backgroundColor:theme.palette.spindle}} onClick={clickEvent} clickstate={clickstate}>
          저를 누른 채로 다음 페이지로 넘어가면 놀라운 일이 생길지도 모릅니다.
        </div> */}
        <div className={classes.CommonBox}>
          저는 일반 박스예요. 빨간 바탕에 파란 채우기예요.
        </div>
        <div className={classes.SpecialBox}>
          저는 스페셜 박스예요. 핑크 바탕에 회색 채우기예요.
        </div>
        <div className={classes.ThemeBox}>저는 테마를 이용한 박스입니다.</div>
        <SDiv>스타일드 컴퍼넌트 버튼</SDiv>
      </Container>
    </div>
  );
};

export default Main;
