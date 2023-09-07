import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/rockets';

export const fetchAPI = createAsyncThunk('Rockets/fetchRocket', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    return err.message;
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
  reducers: {
    reservation: (state, action) => {
      const id = action.payload;
      state.RocketList = state.RocketList.map((rocket) => {
        if (rocket.id !== id) {
          return rocket;
        }
        if (rocket.id === id) {
          if (rocket.reserved === true) {
            return { ...rocket, reserved: false };
          }
        }
        return { ...rocket, reserved: true };
      });
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAPI.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAPI.fulfilled, (state, action) => {
        const rockets = [];
        action.payload.map((item) => {
          let newRocket = {};
          newRocket = {
            id: item.id,
            name: item.rocket_name,
            disc: item.description,
            images: item.flickr_images[1],
            reserved: false,
          };
          return rockets.push(newRocket);
        });
        state.RocketList = rockets;
        state.isLoading = false;
      })
      .addCase(fetchAPI.rejected, (state, action) => {
        state.isLoading = false;
        state.RocketList = [];

        state.error = action.error.message;
      });
  },
});

export const { reservation } = rocketsSlice.actions;

export default rocketsSlice.reducer;
