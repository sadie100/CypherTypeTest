import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { useHistory, useLocation } from "react-router-dom";
import KakaoImage from "assets/image/kakao_message_image.png";
import {
  StyledButton,
  NormalText,
  Title,
  ImportantText,
} from "components/styledComponent/common";
import { styled } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import qs from "qs";
import { ResultData } from "pages/datas/ResultData";

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
      zIndex: "110",
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
  const result = ResultData(query.result);
  useEffect(() => {
    createKakaoButton();
  }, []);

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
        objectType: "feed",
        content: {
          title: "사이퍼즈 플레이 성향 알아보기",
          description: "테스트를 통해 사이퍼즈 플레이 성향을 알아봅시다.",
          imageUrl: window.location.origin + KakaoImage,
          link: {
            mobileWebUrl: "https://localhost:3000/result",
          },
        },
        buttons: [
          {
            title: "웹으로 이동",
            link: {
              mobileWebUrl: "https://localhost:3000",
            },
          },
        ],
      });
    }
  };
  return (
    <div className={classes.wrapper}>
      <Title>
        <span className="C">사</span>이퍼즈<br></br>
        <span className="White">플레이어 성향 결과</span>
      </Title>
      <br></br>
      <ImportantText>{result.title}</ImportantText>
      <BigNormalText>{result.content}</BigNormalText>
      <StyledButton id="kakao-link-btn">공유하기</StyledButton>
    </div>
  );
};

export default Result;
