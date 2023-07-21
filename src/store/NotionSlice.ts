import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TError, TApiError } from "../types/error";
import { TNotionDatabaseList } from "../types/notionDabase";
import httpClient from "../services/http";
import { AxiosError } from "axios";

export interface INotionState {
  database: TNotionDatabaseList;
  Isloading: boolean;
  error: boolean;
  goodAnswer: boolean;
  wrongAnswer: boolean;
  questionIndex: number;
}

const initialState: INotionState = {
  database: [],
  Isloading: false,
  error: false,
  goodAnswer: false,
  wrongAnswer: false,
  questionIndex: 0,
};

export const fetchNotionDatabase = createAsyncThunk<
  TNotionDatabaseList,
  void,
  {
    rejectValue: TError<TApiError>;
  }
>("notion/fetchNotionDatabase", async (_, { rejectWithValue }) => {
  try {
    const response = await httpClient.get<TNotionDatabaseList>(
      "/notion/database"
    );
    return response.data;
  } catch (error) {
    const err = error as AxiosError<TApiError>;
    return rejectWithValue({
      data: err.response?.data,
      status: err.response?.status,
    });
  }
});

export const notionSlice = createSlice({
  name: "notion",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNotionDatabase.pending, (state) => {
      state.Isloading = true;
      state.error = false;
    });
    builder.addCase(fetchNotionDatabase.fulfilled, (state, action) => {
      state.Isloading = false;
      state.error = false;
      state.database = action.payload;
    });
    builder.addCase(fetchNotionDatabase.rejected, (state) => {
      state.Isloading = false;
      state.error = true;
    });
  },
});

export default notionSlice.reducer;
