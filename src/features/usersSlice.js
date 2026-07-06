import { createSlice } from "@reduxjs/toolkit";

// Get all users from localStorage
const getExistUser = () => {
  try {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
  } catch (error) {
    console.error("Error loading users:", error);
    return [];
  }
};

// Get current logged-in user
const getCurrUser = () => {
  try {
    const user = localStorage.getItem("currUser");
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error("Error loading current user:", error);
    return null;
  }
};

const initialState = {
  usersArr: getExistUser(),
  currUser: getCurrUser(),
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,

  reducers: {
    signupUser: (state, action) => {
      const user = action.payload;
      const exist = state.usersArr.find((item) => item.email === user.email);
      if (exist) {
        state.error = "User already exists.";
        return;
      }

      const newUser = {
        ...user,
        collection: [],
      };

      state.usersArr.push(newUser);
      state.error = null;
      localStorage.setItem("users", JSON.stringify(state.usersArr));
    },

    loginUser: (state, action) => {
      state.currUser = null;
      const { email, password } = action.payload;

      const exist = state.usersArr.find(
        (item) => item.email === email && item.password === password,
      );
      if (!exist) {
        state.error = "Invalid email or password.";
        return;
      }

      state.currUser = exist;
      state.error = null;
      localStorage.setItem("currUser", JSON.stringify(exist));
    },

    addToCollection: (state, action) => {
      const item = action.payload;
      if (!state.currUser) return;

      // Duplicate item check
      const alreadyExist = state.currUser.collection.find(
        (data) => data.id === item.id,
      );
      if (alreadyExist) {
        state.error = "Item already saved.";
        return;
      }

      // Add item to current user
      state.currUser.collection.unshift(item);

      // Update users array
      const index = state.usersArr.findIndex(
        (user) => user.email === state.currUser.email,
      );
      if (index !== -1) {
        state.usersArr[index] = state.currUser;
      }

      // Update localStorage
      localStorage.setItem("users", JSON.stringify(state.usersArr));
      localStorage.setItem("currUser", JSON.stringify(state.currUser));
    },

    removeFromCollection: (state, action) => {
      const id = action.payload;

      if (!state.currUser) return;

      state.currUser.collection = state.currUser.collection.filter(
        (item) => item.id !== id,
      );

      const index = state.usersArr.findIndex(
        (user) => user.email === state.currUser.email,
      );
      if (index !== -1) {
        state.usersArr[index] = state.currUser;
      }

      localStorage.setItem("users", JSON.stringify(state.usersArr));
      localStorage.setItem("currUser", JSON.stringify(state.currUser));
    },

    updateUser: (state, action) => {
      const updatedUser = action.payload;

      const index = state.usersArr.findIndex(
        (user) => user.id === state.currUser.id,
      );

      if (index !== -1) {
        state.usersArr[index] = {
          ...state.usersArr[index],
          ...updatedUser,
        };

        state.currUser = state.usersArr[index];

        localStorage.setItem("users", JSON.stringify(state.usersArr));
        localStorage.setItem("currUser", JSON.stringify(state.currUser));
      }
    },

    logoutUser: (state) => {
      state.currUser = null;
      localStorage.removeItem("currUser");
    },

    setError: (state, action) => {
      state.error = action.payload;
    },

    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  signupUser,
  loginUser,
  addToCollection,
  removeFromCollection,
  updateUser,
  logoutUser,
  setError,
  clearError,
} = usersSlice.actions;

export default usersSlice.reducer;
