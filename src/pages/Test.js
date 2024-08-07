import Header from "components/base/Header";
import { styled } from "@mui/styles";
import QuestionData from "pages/datas/QuestionData";
import { useDispatch } from "react-redux";
import {
  changeHardPoint,
  changePartyPoint,
  changeFightPoint,
} from "store/pointSlice";
import * as styledComp from "components/styledComponent/common";

const Test = (props) => {
  const { match, history } = props;
  //url 파라미터로 질문 번호 받음
  const qsNum = Number(match.params.qs);
  //리덕스 툴킷으로 point 저장
  const dispatch = useDispatch();

  const handleClickAns = ({ currentTarget }) => {
    const answerPoint = JSON.parse(currentTarget.id);
    if (!!answerPoint?.hardPoint) {
      dispatch(changeHardPoint(answerPoint.hardPoint));
    }
    if (!!answerPoint?.partyPoint) {
      dispatch(changePartyPoint(answerPoint.partyPoint));
    }
    if (!!answerPoint?.fightPoint) {
      dispatch(changeFightPoint(answerPoint.fightPoint));
    }

    if (qsNum < QuestionData.length - 1) {
      history.push(`/test/${qsNum + 1}`);
    } else {
      history.push("/loading");
    }
  };

  return (
    <>
      <Header />
      <styledComp.Wrapper>
        <WrapperDiv>
          <div className="redQ">Q.</div>
          {QuestionData[qsNum].quiz}
        </WrapperDiv>
        <WrapperDiv>
          <AnswerWrapper>
            <div className="yellowA">A.</div>
            {QuestionData[qsNum].ans.map((select, idx) => {
              return (
                <Answer
                  index={idx}
                  id={JSON.stringify(select.point)}
                  onClick={handleClickAns}
                  key={`${qsNum}-${idx}`}
                >
                  {select.text}
                </Answer>
              );
            })}
          </AnswerWrapper>
        </WrapperDiv>
      </styledComp.Wrapper>
    </>
  );
};

const WrapperDiv = styled(styledComp.quesFontDiv)(({ theme }) => ({
  color: "black",
  fontFamily: "nanumBarun",
  fontWeight: "bolder",
  textAlign: "left",
  border: "1px solid white",
  borderRadius: "10px",
  padding: "1rem",
  paddingBottom: "2rem",
  backgroundColor: "white",
  zIndex: "200",
  width: "100%",
  backgroundImage: "none",
  "& .redQ": {
    color: theme.palette.cyphers,
    fontWeight: "bolder",
    fontFamily: "jua",
    textShadow: "2px 2px 2px gray",
  },
  "& .yellowA": {
    color: theme.palette.cyphers_y,
    fontWeight: "bolder",
    fontFamily: "jua",
    textShadow: "2px 2px 2px gray",
  },
}));
const AnswerWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  gap: "0.5rem",
  flexDirection: "column",
}));
const Answer = styled(styledComp.ansFontDiv)({
  color: "black",
  width: "100%",
  borderRadius: "20px",
  backgroundColor: "lightgray",
  padding: "1rem",
  fontFamily: "nanumBarun",
  textAlign: "center",
});

export default Test;
