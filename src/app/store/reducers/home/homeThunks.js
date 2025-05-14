import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../../../shared/api/axios";

export const getNews = createAsyncThunk("/getNews", async () => {
  try {
    const { data } = await instance.get("news/news");
    console.log("data", data);
    return data;
  } catch (e) {
    console.log(e);
    throw e;
  }
});
