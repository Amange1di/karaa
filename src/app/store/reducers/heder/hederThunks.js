import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../shared/api/Axios";

export const getHeder = createAsyncThunk("heder/getHeder", async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get("/heder-footer/heder-footer");
    return data;
  } catch (e) {
    return rejectWithValue(e.message);
  }
});