/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v4/rockets';

export const fetchAPI = createAsyncThunk('rockets/fetchRocket', async () => {
  try {
    const response = await axios.get(url);
    // console.log('API Data:', response.data);
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
});

const initialState = {
  RocketList: [],
  isLoading: true,
  error: undefined,
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAPI.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAPI.fulfilled, (state, action) => {
        state.RocketList = action.payload.map((item) => ({
          id: item.id,
          name: item.rocket_name,
          description: item.description,
          flickr_images: item.flickr_images,
        }));
        state.isLoading = false;
      })
      .addCase(fetchAPI.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default rocketsSlice.reducer;
