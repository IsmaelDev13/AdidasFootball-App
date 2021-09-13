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
    removeTeam: (state, action) => {
      const index = state.teams.findIndex(
        (teamItem) => teamItem.id === action.payload.id
      );

      let newTeams = [...state.teams];

      if (index >= 0) {
        newTeams.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id:${action.payload.id}) as its not in the basket`
        );
      }
      state.teams = newTeams;
    },
  },
});
export const { addTeam, removeTeam } = teamSlice.actions;

export const selectTeams = (state) => state.team.teams;

export default teamSlice.reducer;
