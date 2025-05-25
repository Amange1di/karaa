import { createSlice } from "@reduxjs/toolkit";
import { getAdmin } from "./adminThunks";

const initialState = {
    admin: [], // исправлено: теперь массив, чтобы удобно хранить список
    loading: false,
    error: null,
};

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        setAdmin(state, action) {
            state.admin = action.payload;
        },
        clearAdmin(state) {
            state.admin = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAdmin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAdmin.fulfilled, (state, action) => {
                state.loading = false;
                state.admin = action.payload;
            })
            .addCase(getAdmin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { setAdmin, clearAdmin } = adminSlice.actions;
export default adminSlice.reducer;
