import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gallerys: null,
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
            state.gallerys = null;
        },
    },
});

export const { setGallerys, clearGallerys } = gallerysSlice.actions;
export default gallerysSlice.reducer;
