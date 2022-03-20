import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { useHistory, useLocation } from "react-router-dom";
import {
  StyledButton,
  NormalText,
  Title,
} from "components/styledComponent/common";
import { styled } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import qs from "qs";

const BigNormalText = styled(NormalText)(({ theme }) => ({
  width: "100%",
}));

const useStyles = makeStyles((theme) => {
  return {
    wrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "30px",
      width: "80%",
      height: "100%",
    },
  };
});

const Result = () => {
  const handleClick = () => {
    history.push("/test/0");
  };
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const result = query.result;

  console.log(result);

  return (
    <div className={classes.wrapper}>
      <Title>
        <span className="C">사</span>이퍼즈<br></br>
        <span className="White">플레이어 성향 결과</span>
      </Title>
      <BigNormalText>
        <br></br>
        <span className="C">#가보자고</span>
      </BigNormalText>
      <StyledButton onClick={handleClick}>공유하기</StyledButton>
    </div>
  );
};

export default Result;
