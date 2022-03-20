import React, { useEffect } from "react";
import KakaoImage from "assets/image/kakao_message_image.png";

export const Result = () => {
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
    <>
      <div className="kakao-share-button">
        {/* Kakao share button */}
        <button id="kakao-link-btn">공유하기</button>
      </div>
    </>
  );
};
