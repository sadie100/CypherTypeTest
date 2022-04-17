export const getResult = ({ hardFlag, partyFlag, fightFlag }) => {
  let result;
  switch (hardFlag) {
    case true:
      switch (partyFlag) {
        case true:
          switch (fightFlag) {
            case true:
              //true / true / true
              result = "issac";
              break;
            case false:
              //true / true / false
              result = "rebecca";
              break;
            default:
              alert("에러가 발생했습니다.");
          }
          break;
        case false:
          switch (fightFlag) {
            case true:
              //true / false / true
              result = "belzer";
              break;
            case false:
              //true / false / false
              result = "deimus";
              break;
            default:
              alert("에러가 발생했습니다.");
          }
          break;
        default:
          alert("에러가 발생했습니다.");
      }
      break;
    case false:
      switch (partyFlag) {
        case true:
          switch (fightFlag) {
            case true:
              //false / true / true
              result = "eagle";
              break;
            case false:
              //false / true / false
              result = "thomas";
              break;
            default:
              alert("에러가 발생했습니다.");
          }
          break;
        case false:
          switch (fightFlag) {
            case true:
              //false / false / true
              result = "j";
              break;
            case false:
              //false / false / false
              result = "clive";
              break;
            default:
              alert("에러가 발생했습니다.");
          }
          break;
        default:
          alert("에러가 발생했습니다.");
      }
      break;
    default:
      alert("에러가 발생했습니다.");
  }
  return result;
};

export const getDomain = () => {
  return `https://${window.location.host}`;
};
