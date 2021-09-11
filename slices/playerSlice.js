import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  players: [],
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    addPlayer: (state, action) => {
      state.players = [...state.players, action.payload];
    },
    removePlayer: (state, action) => {},
  },
});
export const { addPlayer, removePlayer } = playerSlice.actions;

export const selectPlayers = (state) => state.player.players;

export default playerSlice.reducer;
