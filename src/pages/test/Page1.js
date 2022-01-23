import { NormalText } from "components/styledComponent/TextDiv";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    wrapper: {
      zIndex: "200",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "30px",
      width: "100%",
      height: "100%",
    },
  };
});
const Page1 = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <NormalText>1. 하..금요일..</NormalText>
    </div>
  );
};

export default Page1;
