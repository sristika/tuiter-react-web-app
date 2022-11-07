import { createSlice } from '@reduxjs/toolkit';

const activeSlice = createSlice({
  name: 'active',
  initialState: 'home',
});

export default activeSlice.reducer;
