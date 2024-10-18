import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const submitForm = createAsyncThunk(
  'contactUs/submitForm',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:3000/api/v1/contact-us', formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const contactUsSlice = createSlice({
  name: 'contactUs',
  initialState: {
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitForm.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(submitForm.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.success = true;
      })
      .addCase(submitForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'An error occurred';
        state.success = false;
      });
  },
});

export default contactUsSlice.reducer;