import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMessages = createAsyncThunk("fetchMessages", async (args) => {
  const response = await fetch(
    `http://localhost:3000/exchangedMessages?sender=${args.senderId}&receiver=${args.receiverId}`
  );
  return response.json();
});

const messagesSlice = createSlice({
  name: "messages",
  initialState: {
    isLoading: false,
    messages: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.messages = action.payload;
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default messagesSlice.reducer;
