import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { useHistory } from "react-router-dom";
import {
  StyledButton,
  NormalText,
  Title,
} from "components/styledComponent/common";
import { styled } from "@mui/styles";
import CircularProgress from "@mui/material/CircularProgress";
import { getResult } from "lib/utils";
import { useSelector, useDispatch } from "react-redux";

const BigNormalText = styled(NormalText)(({ theme }) => ({
  width: "100%",
}));
const SmallTitle = styled(Title)(({ theme }) => ({
  fontSize: "1.5rem",
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
  const classes = useStyles();
  const history = useHistory();
  const { hardPoint, partyPoint, fightPoint } = useSelector((state) => ({
    hardPoint: state.point.hardPoint,
    partyPoint: state.point.partyPoint,
    fightPoint: state.point.fightPoint,
  }));

  const calculate = () => {
    let hardFlag = false;
    let partyFlag = false;
    let fightFlag = false;

    if (hardPoint >= 3) {
      hardFlag = true;
    }
    if (partyPoint >= 3) {
      partyFlag = true;
    }
    if (fightPoint >= 3) {
      fightFlag = true;
    }
    const result = getResult({ hardFlag, partyFlag, fightFlag });
    history.push(`/result?result=${result}`);
  };
  useEffect(() => {
    setTimeout(function () {
      calculate();
    }, 1000);
  }, []);

  return (
    <div className={classes.wrapper}>
      <SmallTitle>
        <span className="White">
          결과를 내는 중입니다.<br></br>
          잠시만 기다려 주세요 . . .
        </span>
        <div>
          <CircularProgress color="primary" />
        </div>
      </SmallTitle>
    </div>
  );
};

export default Result;
