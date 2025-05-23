import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../shared/api/Axios";

export const getTitle = createAsyncThunk("title/getTitle", async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get("/title/title");
    return data;
  } catch (e) {
    return rejectWithValue(e.message || "Ошибка загрузки новостей");
  }
});