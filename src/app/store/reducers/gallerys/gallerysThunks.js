import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../shared/api/Axios";

export const getGallerys = createAsyncThunk("gallerys/getGallerys", async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios.get("/gallery/gallery");
        return data;
    } catch (e) {
        return rejectWithValue(e.message || "Ошибка загрузки галереи");
    }
});
