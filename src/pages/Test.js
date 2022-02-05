import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "components/base/Header";
import { styled } from "@mui/styles";
import { QuestionData } from "pages/test/QuestionData";
import { NormalText } from "components/styledComponent/TextDiv";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "store/pointSlice";

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
const Question = styled("div")({
  color: "white",
  fontFamily: "nanumBarun",
  fontSize: "1rem",
  textAlign: "left",
});
const Answer = styled("div")({
  color: "white",
  fontFamily: "nanumBarun",
  fontSize: "1rem",
  textAlign: "left",
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
        <Question>{QuestionData()[qsNum].quiz}</Question>;
        {QuestionData()[qsNum].ans.map((select, idx) => {
          return (
            <Answer index={idx} id={idx} onClick={handleClickAns}>
              {select}
            </Answer>
          );
        })}
      </Wrapper>
    </>
  );
};

export default Test;
