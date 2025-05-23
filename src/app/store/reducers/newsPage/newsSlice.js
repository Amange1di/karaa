import { createSlice } from "@reduxjs/toolkit";
import { getNews } from "./newsThunks";
import { useSelector } from "react-redux";


const initialState = {
    news: [],
    loading: false,
    error: null,
};

const newsSlice = createSlice({
    name: "newsPage",
    initialState,
    reducers: {
        clearNews(state) {
            state.news = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getNews.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getNews.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.news = payload;
            })
            .addCase(getNews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error?.message || "Ошибка загрузки";
            });
    },
});

export const { setNews, clearNews } = newsSlice.actions;
export default newsSlice.reducer;
