import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    news: [],
    loading: false,
    error: null,
};

const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        setNews(state, action) {
            state.news = action.payload;
        },
        clearNews(state) {
            state.news = [];
        },
    },
});

export const { setNews, clearNews } = newsSlice.actions;
export default newsSlice.reducer;
