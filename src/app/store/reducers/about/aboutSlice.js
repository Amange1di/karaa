import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    about: null,
    loading: false,
    error: null,
};

const aboutSlice = createSlice({
    name: "about",
    initialState,
    reducers: {
        setAbout(state, action) {
            state.about = action.payload;
        },
        clearAbout(state) {
            state.about = null;
        },
    },
});

export const { setAbout, clearAbout } = aboutSlice.actions;
export default aboutSlice.reducer;
