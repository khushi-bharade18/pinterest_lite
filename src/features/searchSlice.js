import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    value: 0,
  },
  reducers: {
    add: () => {
      console.log("Hello");
    },
  },
});

export const { add } = searchSlice.actions;

export default searchSlice.reducer;
