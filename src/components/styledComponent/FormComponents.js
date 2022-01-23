import { styled } from "@mui/styles";

export const StyledButton = styled("button")(({ theme }) => ({
  zIndex: "110",
  backgroundColor: theme.palette.cyphers,
  color: theme.palette.cyphers_y,
  fontFamily: "jua",
  fontSize: "1.5rem",
  textAlign: "center",
  padding: "10px",
  borderRadius: "10px",
}));
