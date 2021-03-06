export const QuestionData = () => {
  //즐겜 포인트 / 빡겜 포인트
  //파티지향+소통지향 포인트 / 솔플지향+침묵지향 포인트
  //착함 포인트 / 채금 포인트
  //hard : 6
  //party: 6
  //fight : 6

  return [
    {
      quiz: "여느 때와 같이 사이퍼즈를 켰습니다. 평소라면 당신은 어떤 게임을 할까요?",
      ans: [
        {
          text: "나는 조합을 맞춘 진지한 게임이 좋다. 공식전을 한다.",
          point: {
            hardPoint: 1,
          },
        },
        {
          text: "마음 편한 게 제일! 일반전을 한다.",
          point: {
            hardPoint: -1,
          },
        },
        {
          text: "난 친선전이 재밌더라... 친선전을 즐긴다.",
          point: {
            hardPoint: -1,
            partyPoint: 1,
          },
        },
      ],
    },
    {
      quiz: "당신은 일반전을 하기로 했습니다. 친구창과 클랜창을 보니 아무도 접속하지 않아 있네요. 광장 채팅을 보니 파티를 구하는 무수한 외침들이 올라오는데요. 어떻게 할까요?",
      ans: [
        {
          text: "혼자 하면 무슨 재미! 외침팟을 구한다.",
          point: {
            partyPoint: 2,
          },
        },
        {
          text: "사이퍼즈는 솔플이지! 그냥 F6을 누른다.",
          point: {
            partyPoint: 0,
          },
        },
      ],
    },
    {
      quiz: "솔플로 일반전에 들어온 당신, 팀원이 웨슬리 클리브 미아 루시를 칼픽합니다. 탱커는 없는 이 상황, 당신도 탱커가 그다지 하고 싶진 않은데요. 어떻게 할까요?",
      ans: [
        {
          text: "탱커가..하나는..있어야 하지 않을까? 하긴 싫지만... 이기기 위해... 탱커를 골라 본다...",
          point: {
            hardPoint: 1,
          },
        },
        {
          text: "이런 판에서 탱커를 골라봤자 고통 뿐. 하고 싶은 딜러를 고른다.",
          point: {
            hardPoint: -1,
          },
        },
        {
          text: "일반전이지만 너무 양심이 없지 않나? '픽 꼬라지 예술이네'라고 팀챗을 친다.",
          point: {
            fightPoint: 1,
            hardPoint: 1,
          },
        },
      ],
    },
    {
      quiz: "평화로운 일반전 도중, 팀원에 뉴비가 있는 것 같습니다. 계속된 실책으로 인해 우리 팀이 패배하고 있는데요. 어떤 행동을 취할까요?",
      ans: [
        {
          text: "뉴비고 뭐고 팀겜인데 너무 못하는 거 아님? 신고를 각오하고 한소리 한다.",
          point: {
            fightPoint: 1,
            hardPoint: 1,
          },
        },
        {
          text: "가르쳐주면 나아지지 않을까? 실수할 때마다 이렇게 했으면 좋겠다고 친절하게 가르쳐 준다.",
          point: {
            fightPoint: -1,
            partyPoint: 1,
            hardPoint: 1,
          },
        },
        {
          text: "그럴 수도 있지... 그냥 묵묵히 열심히 게임한다.",
          point: {
            hardPoint: -1,
            partyPoint: -1,
          },
        },
      ],
    },
    {
      quiz: "어느 날 계시처럼 평소 안 하던 캐릭터로 일반전을 하고 싶어졌습니다! 남이 하는 거 보기만 해서 스킬도 잘 모르는 캐릭터인데요. 어떻게 할까요?",
      ans: [
        {
          text: "천상계 유튜버의 공략 영상 등으로 캐릭터의 모든 걸 파악한 후 게임한다.",
          point: {
            hardPoint: 2,
          },
        },
        {
          text: "커맨드 정도만 알고 갈까? 우클릭이 뭔지 시프트 스킬이 뭔지 정도만 간단히 알고 게임한다.",
          point: {
            hardPoint: 1,
          },
        },
        {
          text: "게임은 하다 보면 느는 법. 아무것도 모르지만 일단 일반전부터 들어간다.",
          point: {
            hardPoint: -1,
          },
        },
      ],
    },
    {
      quiz: "피폐한 게임 중 막판으로 근딜을 하고 싶어 솔플로 일반전에 들어온 당신, 그러나 팀원이 조합을 맞춰줍니다! 2탱 1근 1원이 나온 상황. 왠지 원딜을 해야만 할 것 같은데요. 어떤 픽을 할까요?",
      ans: [
        {
          text: "투탱을 서 줬으면 .. 어쩔 수 없지 .. 조용히 원딜을 고른다.",
          point: {
            hardPoint: 1,
          },
        },
        {
          text: "하고 싶은 건 해야 한다. 투근딜로 간다!",
          point: {
            hardPoint: -1,
          },
        },
        {
          text: "근딜을 하고 싶지만 게임도 이기고 싶은걸? 근딜 든 친구에게 양보를 요구한다.",
          point: {
            hardPoint: 1,
            partyPoint: 1,
          },
        },
      ],
    },
    {
      quiz: "평화롭게 패배하는 일반전 도중, 0킬 6데스 클리브가 갑자기 나에게 시비를 틉니다. 지도 더럽게 못한 주제에 ♡♡투성이 쌍욕을 박는데요, 어떻게 할까요?",
      ans: [
        {
          text: "이 ♡♡가 뭐라는 거임? 같이 쌍욕으로 응수한다.",
          point: {
            fightPoint: 2,
          },
        },
        {
          text: "욕까진 안 하더라도 그냥 듣고 넘길 순 없는 법. 한소리 한다.",
          point: {
            fightPoint: 1,
          },
        },
        {
          text: "기분 잡쳤다... 그냥 신고나 박고 차단한다.",
          point: {
            fightPoint: 0,
          },
        },
      ],
    },
    {
      quiz: "게임이 너무 ez하게 끝났습니다~ 기분이 좋은데요. 티를 내 볼까요?",
      ans: [
        {
          text: "쉬워 쉬워~ 전챗으로 ez나 ㅅㄱㅇ를 친다",
          point: {
            fightPoint: 2,
          },
        },
        {
          text: "전챗은 좀 그렇지만 티는 내고 싶다! /춤을 춘다.",
          point: {
            fightPoint: 1,
          },
        },
        {
          text: "우리 팀원끼리 기뻐하면 되지! 팀챗으로 팀원끼리 소소하게 기쁨을 나눈다.",
          point: {
            fightPoint: -1,
            partyPoint: 1,
          },
        },
        {
          text: "뭐라 하긴 쑥스러워! 그냥 재빨리 다음 게임 시작 단축키를 누른다.",
          point: {
            fightPoint: -1,
            partyPoint: -1,
          },
        },
      ],
    },
  ];
};
