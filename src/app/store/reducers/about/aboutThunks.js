import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../shared/api/Axios";

export const getAbout = createAsyncThunk("about/getAbout", async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get("/about/about");
    return data;
  } catch (e) {
    return rejectWithValue(e.message || "Ошибка загрузки новостей");
  }
});