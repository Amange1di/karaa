import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../shared/api/Axios";

export const getAdmin = createAsyncThunk("admin/getAdmin", async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get("/administration/administration");
    return data;
  } catch (e) {
    return rejectWithValue(e.message || "Ошибка загрузки новостей");
  }
});