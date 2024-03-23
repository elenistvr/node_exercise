import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDropdown = createAsyncThunk("fetchDropdown", async () => {
  const data = await fetch("http://localhost:3000/users");
  return data.json();
});

const dropdownSlice = createSlice({
  name: "dropdown",
  initialState: {
    isLoading: false,
    data: null,
    error: false,
    selectedUser: null,
  },
  reducers: {
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDropdown.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchDropdown.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchDropdown.rejected, (state) => {
      state.error = true;
    });
  },
});
export const { setSelectedUser } = dropdownSlice.actions;
export default dropdownSlice.reducer;
