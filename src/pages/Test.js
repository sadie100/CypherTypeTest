import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "components/base/Header";
import { styled } from "@mui/styles";
import { QuestionData } from "pages/test/QuestionData";
import { NormalText } from "components/styledComponent/common";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "store/pointSlice";
import * as styledComp from "components/styledComponent/common";

const Wrapper = styled("div")({
  zIndex: "200",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "30px",
  width: "100%",
  height: "100%",
});
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

const Test = (props) => {
  const { match, history } = props;
  //url 파라미터로 질문 번호 받음
  const qsNum = Number(match.params.qs);
  //리덕스 툴킷으로 point 저장
  const point = useSelector((state) => state.point.value);
  const dispatch = useDispatch();

  const handleClickAns = ({ currentTarget }) => {
    console.log(currentTarget.id);
    history.push(`/test/${qsNum + 1}`);
  };

  return (
    <>
      <Header />
      <Wrapper>
        <WrapperDiv>
          <div className="redQ">Q.</div>
          {QuestionData()[qsNum].quiz}
        </WrapperDiv>
        ;
        <WrapperDiv>
          <AnswerWrapper>
            <div className="yellowA">A.</div>
            {QuestionData()[qsNum].ans.map((select, idx) => {
              return (
                <Answer index={idx} id={idx} onClick={handleClickAns}>
                  {select}
                </Answer>
              );
            })}
          </AnswerWrapper>
        </WrapperDiv>
      </Wrapper>
    </>
  );
};

export default Test;
