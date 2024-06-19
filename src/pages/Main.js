import React from "react";
import { useHistory } from "react-router-dom";
import {
  StyledButton,
  NormalText,
  Title,
  Wrapper,
} from "components/styledComponent/common";
import KakaoButton from "components/base/KakaoButton";
import KakaoImage from "assets/image/kakao_message_image.png";

const Main = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/test/0");
  };

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
      <KakaoButton content={buttonContent} buttons={buttons} />
    </Wrapper>
  );
};

const buttonContent = {
  title: "사이퍼즈 플레이 성향 알아보기",
  description: "테스트를 통해 사이퍼즈 플레이 성향을 알아봅시다.",
  imageUrl: window.location.origin + KakaoImage,
  link: {
    webUrl: process.env.REACT_APP_URL,
    mobileWebUrl: process.env.REACT_APP_URL,
  },
};

const buttons = [
  {
    title: "웹으로 이동",
    link: {
      webUrl: process.env.REACT_APP_URL,
      mobileWebUrl: process.env.REACT_APP_URL,
    },
  },
];

export default Main;
