import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    activeTab: "photos",
    loading: false,
    error: null,
    results: [],
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setResults: (state, action) => {
      state.results = action.payload;
      state.loading = false;
    },
  },
});

export const { setQuery, setActiveTab, setLoading, setError, setResults } =
  searchSlice.actions;

export default searchSlice.reducer;
