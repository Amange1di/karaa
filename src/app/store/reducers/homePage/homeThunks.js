import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../shared/api/Axios";

export const getHome = createAsyncThunk("home/getHome", async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get("home");
    return data;
  } catch (e) {
    return rejectWithValue(e.message || "Ошибка загрузки новостей");
  }
});

export const getPortal = createAsyncThunk("home/getPortal", async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get("/portal/portal");
    return data;
  } catch (e) {
    return rejectWithValue(e.message || "Ошибка загрузки порталов");
  }
});

export const getAds = createAsyncThunk("home/getAds", async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get("/ads/ads");
    return data;
  } catch (e) {
    return rejectWithValue(e.message || "Ошибка загрузки объявлений");
  }
});