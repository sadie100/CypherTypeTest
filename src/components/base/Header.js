import { styled } from "@mui/styles";
import { HeaderBtn } from "components/styledComponent/common";
import { useHistory } from "react-router-dom";
import HomeButton from "components/base/HomeButton";

const Header = () => {
  const history = useHistory();
  const handleBackClick = () => {
    history.goBack();
  };
  return (
    <HeaderDiv>
      <HeaderBtn onClick={handleBackClick}>뒤로 가기</HeaderBtn>
      <HomeButton isInHeader={true} />
    </HeaderDiv>
  );
};

const HeaderDiv = styled("div")(() => ({
  textAlign: "left",
  width: "100%",
  position: "sticky",
  top: "0",
  display: "flex",
  justifyContent: "space-between",
}));

export default Header;
