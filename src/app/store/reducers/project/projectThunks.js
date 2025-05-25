import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../shared/api/Axios";

export const getProject = createAsyncThunk("project/getProject", async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get("/projects");
    console.log("getProject data", data);

    return data;
  } catch (e) {
    return rejectWithValue(e.message || "Ошибка загрузки новостей");
  }
});

export const getProjectById = createAsyncThunk("project/getProjectById", async (id, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(`/projects/${id}`);
    return data;
  } catch (e) {
    return rejectWithValue(e.message || "Ошибка загрузки проекта");
  }
});