import { styled } from "@mui/styles";

const HeaderDiv = styled("div")({
  color: "white",
  fontSize: "1rem",
  textAlign: "left",
  width: "100%",
  position: "sticky",
  top: "0",
});

const Header = () => {
  return <HeaderDiv>뒤로가기</HeaderDiv>;
};

export default Header;
