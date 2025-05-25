import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../shared/api/Axios";

export const getNews = createAsyncThunk("news/getNews", async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get("/news");
    
    return data;
  } catch (e) {
    return rejectWithValue(e.message || "Ошибка загрузки новостей");
  }
});