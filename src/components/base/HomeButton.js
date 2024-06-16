import React from "react";
import { StyledButton, HeaderBtn } from "components/styledComponent/common";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetPoint } from "store/pointSlice";

const HomeButton = (props) => {
  const { isInHeader } = props;
  const history = useHistory();
  const dispatch = useDispatch();
  const Button = isInHeader ? HeaderBtn : StyledButton;
  return (
    <Button
      onClick={() => {
        dispatch(resetPoint());
        history.push("/");
      }}
    >
      첫 화면으로
    </Button>
  );
};

export default HomeButton;
