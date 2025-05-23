import { createSlice } from "@reduxjs/toolkit";
import { getHeder } from "./hederThunks";

const initialState = {
    data: {},
    loading: false,
    error: null,
};

const hederSlice = createSlice({
    name: "heder",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getHeder.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getHeder.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getHeder.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default hederSlice.reducer;
