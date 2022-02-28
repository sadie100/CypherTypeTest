import { styled } from "@mui/styles";

export const NormalText = styled("div")(({ theme }) => ({
  color: "black",
  fontFamily: "nanumBarun",
  fontSize: "1.2rem",
  textAlign: "center",
  padding: "2rem 1rem",
  fontWeight: "bolder",
  backgroundColor: "white",
  borderRadius: "10px",
  wordBreak: "break-all",
  "& .C": {
    color: theme.palette.cyphers,
  },
}));
export const Title = styled("div")(({ theme }) => ({
  color: theme.palette.cyphers_y,
  fontSize: "2.5rem",
  textAlign: "center",
  fontFamily: "jua",
  "& .C": {
    color: theme.palette.cyphers,
  },
  "& .White": {
    fontFamily: "jua",
    color: "white",
  },
}));

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

export const quesFontDiv = styled("div")(({ theme }) => ({
  "@media screen and (min-width: 1024px)": {
    fontSize: "20px",
  },
  "@media screen and (max-width: 1024px)": {
    fontSize: "3vw",
  },
  "@media screen and (max-width: 768px)": {
    fontSize: "4vw",
  },
  "@media screen and (max-width: 400px)": {
    fontSize: "5vw",
  },
  "& .redQ, & .yellowA": {
    "@media screen and (min-width: 1024px)": {
      fontSize: "24px",
    },
    "@media screen and (max-width: 1024px)": {
      fontSize: "4vw",
    },
    "@media screen and (max-width: 768px)": {
      fontSize: "5vw",
    },
    "@media screen and (max-width: 400px)": {
      fontSize: "6vw",
    },
  },
}));
export const ansFontDiv = styled("div")(({ theme }) => ({
  "@media screen and (min-width: 1024px)": {
    fontSize: "18px",
  },
  "@media screen and (max-width: 1024px)": {
    fontSize: "2.5vw",
  },
  "@media screen and (max-width: 768px)": {
    fontSize: "3.5vw",
  },
  "@media screen and (max-width: 400px)": {
    fontSize: "4.5vw",
  },
  "& .yellowA": {
    "@media screen and (min-width: 1024px)": {
      fontSize: "22px",
    },
    "@media screen and (max-width: 1024px)": {
      fontSize: "3.5vw",
    },
    "@media screen and (max-width: 768px)": {
      fontSize: "4.5vw",
    },
    "@media screen and (max-width: 400px)": {
      fontSize: "5.5vw",
    },
  },
}));
export const resBtn = styled("button")(({ theme }) => ({
  "@media screen and (min-width: 1024px)": {
    fontSize: "18px",
  },
  "@media screen and (max-width: 1024px)": {
    fontSize: "2.5vw",
  },
  "@media screen and (max-width: 768px)": {
    fontSize: "3.5vw",
  },
  "@media screen and (max-width: 400px)": {
    fontSize: "4.5vw",
  },
  "& .yellowA": {
    "@media screen and (min-width: 1024px)": {
      fontSize: "22px",
    },
    "@media screen and (max-width: 1024px)": {
      fontSize: "3.5vw",
    },
    "@media screen and (max-width: 768px)": {
      fontSize: "4.5vw",
    },
    "@media screen and (max-width: 400px)": {
      fontSize: "5.5vw",
    },
  },
}));
