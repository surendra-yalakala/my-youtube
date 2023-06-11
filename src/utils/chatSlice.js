import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    msgs: [],
  },
  reducers: {
    addMsgs: (state, action) => {
      state.msgs.splice(OFFSET_LIVE_CHAT, 1);
      state.msgs.unshift(action.payload);
    },
  },
});
export const { addMsgs } = chatSlice.actions;
export default chatSlice.reducer;
