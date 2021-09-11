import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  teams: [],
};

export const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    addTeam: (state, action) => {
      state.teams = [...state.teams, action.payload];
    },
    removeTeam: (state, action) => {},
  },
});
export const { addTeam, removeTeam } = teamSlice.actions;

export const selectTeams = (state) => state.team.teams;

export default teamSlice.reducer;
