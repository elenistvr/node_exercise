import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSidebar = createAsyncThunk("fetchSidebar", async (userId) => {
  const response = await fetch(
    `http://localhost:3000/listOfUsers?userId=${userId}`
  );
  return response.json();
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    users: [],
    error: null,
    selectedReceiver: null,
  },
  reducers: {
    setSelectedReceiver: (state, action) => {
      state.selectedReceiver = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSidebar.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSidebar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchSidebar.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});
export const { setSelectedReceiver } = userSlice.actions;
export default userSlice.reducer;
