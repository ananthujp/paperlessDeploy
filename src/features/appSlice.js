import { createSlice } from '@reduxjs/toolkit';
export const appSlice = createSlice({
  name: 'app',
  initialState: {

    letterOpened: false,

  },
  reducers: {
    setChannelInfo: (state,action) => {
     
     state.channelName = action.payload.channelName;
    },
    setSlideInfo: (state,action) => {

      state.letterOpened = action.payload.letterOpened;

    },
  },
});

export const {setChannelInfo} = appSlice.actions;
export const {setSlideInfo} = appSlice.actions;

export const stateOpened= (state) => state.app.letterOpened;

export default appSlice.reducer;
