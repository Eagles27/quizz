import { Client } from "@notionhq/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TListNotionArray } from "../types/notionList";
import envConfig from "../lib/config/envConfig";
import { TApiError, TError } from "../types/error";

export interface NotionState {
  list: TListNotionArray;
  wrongAnswers: boolean;
  isLoading: boolean;
  wasThereAnError: boolean;
}

const initialState: NotionState = {
  list: [],
  wrongAnswers: false,
  isLoading: false,
  wasThereAnError: false,
};

const notionClient = new Client({
  auth: envConfig.NOTION_KEY,
});

const fetchDatabase = createAsyncThunk<
  any,
  void,
  { rejectValue: TError<TApiError> }
>("/fetch/dabase", async (_, { rejectWithValue }) => {
  const response = await notionClient.databases.query({
    database_id: envConfig.DATABASE_ID,
  });
  return response.results;
});

export const notionSlice = createSlice({
  name: "notion",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchDatabase.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchDatabase.fulfilled, (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    });

    builder.addCase(fetchDatabase.rejected, (state) => {
      state.wasThereAnError = true;
      state.isLoading = false;
    });
  },
});

export default notionSlice.reducer;
