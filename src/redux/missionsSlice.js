import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://api.spacexdata.com/v3/missions';
export const fetchMissions = createAsyncThunk('type/fetchMissions', async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Network response was not ok');
  }
});

const initialState = {
  missions: [],
  status: 'idel',
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, { payload }) => ({
      ...state,
      missions: state.missions.map((item) => (
        item.id === payload.id ? { ...item, reserved: true } : item
      )),
    }),
    leaveMission: (state, { payload }) => ({
      ...state,
      missions: state.missions.map((item) => (
        item.id === payload.id ? { ...item, reserved: false } : item
      )),
    }),
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMissions.pending, (state) => ({
        ...state, status: 'loading',
      }))
      .addCase(fetchMissions.fulfilled, (state, action) => {
        const data = action.payload.map((mission) => ({
          name: mission.mission_name,
          id: mission.mission_id,
          desc: mission.description,
        }));
        return {
          ...state,
          status: 'success',
          missions: data,
        };
      })
      .addCase(fetchMissions.rejected, (state) => ({
        ...state,
        status: 'failed',
      }));
  },

});
// console.log(missionSlice);
export const { joinMission, leaveMission } = missionSlice.actions;
export default missionSlice.reducer;
