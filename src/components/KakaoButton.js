import React, { useEffect } from "react";

const KakaoButton = (props) => {
  const { content, buttons } = props;

  useEffect(() => {
    createKakaoButton({ content, buttons });
  }, [content, buttons]);

  return (
    <img
      id="kakao-link-btn"
      src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
      alt="카카오링크 보내기 버튼"
      height="50"
      width="50"
    />
  );
};

const createKakaoButton = ({ content, buttons }) => {
  // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
  if (window.Kakao) {
    const kakao = window.Kakao;

    // 중복 initialization 방지
    if (!kakao.isInitialized()) {
      // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
      kakao.init(process.env.REACT_APP_KAKAO_KEY);
    }

    //버튼에 연결
    kakao.Link.createDefaultButton({
      container: "#kakao-link-btn",
      objectType: "feed",
      content,
      buttons,
    });
  }
};

export default KakaoButton;
