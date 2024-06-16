import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { useHistory, useLocation } from "react-router-dom";
import {
  StyledButton,
  Title,
  Content,
  ImportantText,
  BackgroundImage,
} from "components/styledComponent/common";
import { useDispatch } from "react-redux";
import qs from "qs";
import { ResultData } from "pages/datas/ResultData";
import { resetPoint } from "store/pointSlice";
import KakaoButton from "components/KakaoButton";

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

  useEffect(() => {
    dispatch(resetPoint());
  }, [dispatch]);

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
      <div className={classes.smallWrapper}>
        <span className={classes.shareText}>결과 공유하기</span>
        <KakaoButton {...getKakaoButtonProps({ result, query, imgUrl })} />
      </div>
      <StyledButton
        onClick={() => {
          history.push("/");
        }}
      >
        첫 화면으로
      </StyledButton>
    </div>
  );
};

const getKakaoButtonProps = ({ result, query, imgUrl }) => {
  return {
    content: {
      title: "사이퍼즈 플레이 성향 결과",
      description: result.title + "\n" + result.content,
      imageUrl: window.location.origin + imgUrl,
      link: {
        mobileWebUrl:
          process.env.REACT_APP_URL + `/result?result=${query.result}`,
      },
    },
    buttons: [
      {
        title: "결과 보기",
        link: {
          mobileWebUrl:
            process.env.REACT_APP_URL + `/result?result=${query.result}`,
        },
      },
      {
        title: "새 테스트",
        link: {
          mobileWebUrl: process.env.REACT_APP_URL,
        },
      },
    ],
  };
};

const useStyles = makeStyles(() => {
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
    smallWrapper: {
      display: "flex",
      alignItems: "center",
      gap: "3px",
      flexDirection: "column",
    },
    shareText: { color: "white", fontSize: "13px" },
  };
});

export default Result;
