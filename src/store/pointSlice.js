import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hardPoint: 0, //빡겜 포인트. 낮을 시 즐겜 포인트
  partyPoint: 0, //파티지향+소통지향 포인트. 낮을 시 솔플지향+침묵지향 포인트
  fightPoint: 0, //채금 포인트. 낮음 시 평화지향 포인트
};

export const pointSlice = createSlice({
  name: "point",
  initialState,
  reducers: {
    changeHardPoint: (state, action) => {
      state.hardPoint += action.payload;
    },
    changePartyPoint: (state, action) => {
      state.partyPoint += action.payload;
    },
    changeFightPoint: (state, action) => {
      state.fightPoint += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeHardPoint, changePartyPoint, changeFightPoint } =
  pointSlice.actions;

export default pointSlice.reducer;
