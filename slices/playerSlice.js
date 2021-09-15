import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  players: [],
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    addPlayer: (state, action) => {
      const index = state.players.findIndex(
        (playersItem) => playersItem.country == action.payload.country
      );
      if (index < 0) {
        state.players = [...state.players, action.payload];
      } else {
        console.warn(
          `You cant select ${action.payload.name} because you have already selected a player from  ${action.payload.country}`
        );
      }
    },

    removePlayer: (state, action) => {
      const index = state.players.findIndex(
        (playerItem) => playerItem.id === action.payload.id
      );

      let newPlayer = [...state.players];

      if (index >= 0) {
        newPlayer.splice(index, 1);
      } else {
        console.warn(
          `Cant remove player (id:${action.payload.id}) as its not in the team`
        );
      }
      state.players = newPlayer;
    },
  },
});
export const { addPlayer, addGoalkeeper, removePlayer } = playerSlice.actions;

export const selectPlayers = (state) => state.player.players;

export default playerSlice.reducer;
