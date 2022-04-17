import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { useHistory, useLocation } from "react-router-dom";
import {
  StyledButton,
  NormalText,
  Title,
  Content,
  ImportantText,
  BackgroundImage,
} from "components/styledComponent/common";
import { styled } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import qs from "qs";
import { ResultData } from "pages/datas/ResultData";
import { resetPoint } from "store/pointSlice";

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
      zIndex: "110",
    },
  };
});

const Result = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const result = ResultData(query.result);
  const imgUrl = `/assets/image/${query.result}.png`;

  const createKakaoButton = () => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (window.Kakao) {
      const kakao = window.Kakao;

      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init("aa16d24db6390013864861c4ec278c95");
      }

      //버튼에 연결
      kakao.Link.createDefaultButton({
        container: "#kakao-link-btn",
        objectType: "text",
        text: result.title + "\n" + result.content,
        link: {
          mobileWebUrl: `https://localhost:3000/result?result=${result}`,
        },
      });
    }
  };

  useEffect(() => {
    dispatch(resetPoint());
    createKakaoButton();
  }, []);

  const handleHome = () => {
    history.push("/");
  };
  return (
    <div className={classes.wrapper}>
      <Title>
        <span className="C">사</span>이퍼즈<br></br>
        <span className="White">플레이어 성향 결과</span>
      </Title>
      <BackgroundImage bg_img={imgUrl}></BackgroundImage>
      <Content>
        <ImportantText>{result.title}</ImportantText>
        {result.content}
      </Content>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "3px",
          flexDirection: "column",
        }}
      >
        <span style={{ color: "white", fontSize: "13px" }}>결과 공유하기</span>
        <img
          id="kakao-link-btn"
          src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
          alt="카카오링크 보내기 버튼"
          height="50"
          width="50"
        />
      </div>
      <StyledButton onClick={handleHome}>첫 화면으로</StyledButton>
    </div>
  );
};

export default Result;
