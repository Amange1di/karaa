import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../shared/api/Axios";

export const getProject = createAsyncThunk("project/getProject", async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get("projects/projects");
    return data;
  } catch (e) {
    return rejectWithValue(e.message || "Ошибка загрузки новостей");
  }
});