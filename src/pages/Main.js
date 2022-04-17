import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { useHistory } from "react-router-dom";
import KakaoImage from "assets/image/kakao_message_image.png";
import {
  StyledButton,
  NormalText,
  Title,
  Wrapper,
} from "components/styledComponent/common";
import { getDomain } from "lib/utils";

const Main = () => {
  const handleClick = () => {
    history.push("/test/0");
  };

  const history = useHistory();
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
            mobileWebUrl: getDomain() + "/result",
          },
        },
        buttons: [
          {
            title: "웹으로 이동",
            link: {
              mobileWebUrl: getDomain(),
            },
          },
        ],
      });
    }
  };
  useEffect(() => {
    createKakaoButton();
  }, []);
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
      {/* <button id="kakao-link-btn">카카오톡 공유하기</button> */}
      <img
        id="kakao-link-btn"
        src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
        alt="카카오링크 보내기 버튼"
        height="50"
        width="50"
      />
    </Wrapper>
  );
};

export default Main;
