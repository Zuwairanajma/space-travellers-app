import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rocketSlice';
import missionsReducer from './missionsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
});

export default store;
