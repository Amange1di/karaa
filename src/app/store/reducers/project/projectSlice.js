import { createSlice } from "@reduxjs/toolkit";
import { getProject, getProjectById } from "./projectThunks";

const initialState = {
    project: null,
    loading: false,
    error: null,
};

const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {
        clearProject(state) {
            state.project = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProject.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProject.fulfilled, (state, action) => {
                state.loading = false;
                state.project = action.payload;
            })
            .addCase(getProject.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Ошибка загрузки";
            })
            .addCase(getProjectById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProjectById.fulfilled, (state, action) => {
                state.loading = false;
                state.project = action.payload;
            })
            .addCase(getProjectById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Ошибка загрузки";
            });
    },
});

export const { clearProject } = projectSlice.actions;
export default projectSlice.reducer;
