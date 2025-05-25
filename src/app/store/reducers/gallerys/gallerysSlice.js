import { createSlice } from "@reduxjs/toolkit";
import { getGallerys } from "./gallerysThunks";

const initialState = {
    gallerys: [],
    loading: false,
    error: null,
};

const gallerysSlice = createSlice({
    name: "gallerys",
    initialState,
    reducers: {
        setGallerys(state, action) {
            state.gallerys = action.payload;
        },
        clearGallerys(state) {
            state.gallerys = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getGallerys.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getGallerys.fulfilled, (state, action) => {
                state.loading = false;
                state.gallerys = action.payload;
            })
            .addCase(getGallerys.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { setGallerys, clearGallerys } = gallerysSlice.actions;
export default gallerysSlice.reducer;
