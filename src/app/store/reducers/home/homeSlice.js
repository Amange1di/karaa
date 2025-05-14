import { createSlice } from "@reduxjs/toolkit";
import { getNews } from "./homeThunks";
import { useSelector } from "react-redux";
import { BiNews } from "react-icons/bi";

const initialState = {
  news: [],
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    clearSearch(state) {
      state.search = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNews.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.collection = payload;
      })
      .addCase(getNews.rejected, (state) => {
        state.loading = false;
      })
  },
});

export const {clearSearch} = homeSlice.actions;
export const useHome = () => useSelector((state) => state.home);
export default homeSlice.reducer;
