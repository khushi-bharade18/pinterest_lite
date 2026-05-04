import { createSlice } from "@reduxjs/toolkit";

const getExistUser = () => {
  const existUser = localStorage.getItem("users");
  try {
    return existUser ? JSON.parse(existUser) : [];
  } catch (error) {
    return error;
  }
};

const usersSlice = createSlice({
  name: "users",
  initialState: {
    usersArr: getExistUser(),
    currUser: null,
  },

  reducers: {
    signupUser: (state, action) => {
      const user = action.payload;

      const exist = state.usersArr.find((item) => item.id === user.id);
      if (exist) {
        throw new Error("User is already exist");
      }

      state.usersArr.push({ ...user, collection: [] });
      localStorage.setItem("users", JSON.stringify(state.usersArr));
    },
    loginUser: (state, action) => {
      const user = action.payload;

      const exist = state.usersArr.find(
        (item) => item.email === user.email && item.password === user.password,
      );

      if (!exist) {
        throw new Error("UserNot Found");
      }

      state.currUser = exist;
    },
  },
});

export const { signupUser, loginUser } = usersSlice.actions;

export default usersSlice.reducer;
