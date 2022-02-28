import { styled } from "@mui/styles";
import * as StyledComp from "components/styledComponent/common";
import { useHistory } from "react-router-dom";

const HeaderDiv = styled("div")(({ theme }) => ({
  textAlign: "left",
  width: "100%",
  position: "sticky",
  top: "0",
  display: "flex",
  justifyContent: "space-between",
}));
const HeaderBtn = styled(StyledComp.resBtn)(({ theme }) => ({
  color: theme.palette.cyphers,
  textAlign: "left",
  padding: "0.5rem 1rem",
  fontFamily: "jua",
  border: "1px solid white",
  borderRadius: "10px",
}));

const Header = () => {
  const history = useHistory();
  const handleBackClick = () => {
    history.goBack();
  };
  const handleHomeClick = () => {
    history.push("/");
  };
  return (
    <HeaderDiv>
      <HeaderBtn onClick={handleBackClick}>뒤로 가기</HeaderBtn>
      <HeaderBtn onClick={handleHomeClick}>첫 화면으로</HeaderBtn>
    </HeaderDiv>
  );
};

export default Header;
