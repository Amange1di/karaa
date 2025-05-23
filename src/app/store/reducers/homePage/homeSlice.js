import { createSlice } from "@reduxjs/toolkit";
import { getHome, getPortal, getAds } from "./homeThunks";

const initialState = {
    home: null,
    portals: [],
    ads: [],
    loading: false,
    error: null,
};

const homeSlice = createSlice({
    name: "homePage",
    initialState,
    reducers: {
        setHome(state, action) {
            state.home = action.payload;
        },
        clearHome(state) {
            state.home = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getHome.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getHome.fulfilled, (state, action) => {
                state.loading = false;
                state.home = action.payload;
            })
            .addCase(getHome.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getPortal.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getPortal.fulfilled, (state, action) => {
                state.loading = false;
                state.portals = action.payload;
            })
            .addCase(getPortal.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getAds.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAds.fulfilled, (state, action) => {
                state.loading = false;
                state.ads = action.payload;
            })
            .addCase(getAds.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { setHome, clearHome } = homeSlice.actions;
export default homeSlice.reducer;
