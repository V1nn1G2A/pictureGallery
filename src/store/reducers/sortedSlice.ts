import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sortedWindowActive: false,
  artist: 0,
  location: 0,
  yearFrom: '',
  yearTo: '',
  findString: '',
};

export const sortedSlice = createSlice({
  name: 'sorted',
  initialState,
  reducers: {
    setSortedWindowActive: (state, action) => ({
      ...state,
      sortedWindowActive: action.payload,
    }),
    setArtist: (state, action) => ({
      ...state,
      artist: action.payload,
    }),
    setLocation: (state, action) => ({
      ...state,
      location: action.payload,
    }),
    setYearFrom: (state, action) => ({
      ...state,
      yearFrom: action.payload,
    }),
    setYearTo: (state, action) => ({
      ...state,
      yearTo: action.payload,
    }),
    setFindString: (state, action) => ({
      ...state,
      findString: action.payload,
    }),
  },
});

export const { setSortedWindowActive, setArtist, setLocation, setYearFrom, setYearTo, setFindString } =
  sortedSlice.actions;
export default sortedSlice.reducer;
