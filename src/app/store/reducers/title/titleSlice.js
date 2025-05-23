import { createSlice } from "@reduxjs/toolkit";
import { getTitle } from "./titleThunks";

const initialState = {
    data: {},
    loading: false,
    error: null,
};

const titleSlice = createSlice({
    name: "title",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTitle.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getTitle.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getTitle.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default titleSlice.reducer;
