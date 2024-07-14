import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  artistLocal: 0,
  artistActive: false,
  locationLocal: 0,
  locationActive: false,
  yearFromLocal: '',
  yearToLocal: '',
  yearActive: false,
  nanError: false,
  enterError: false,
};

export const sortedActiveSlice = createSlice({
  name: 'sortedActiveAndLocalData',
  initialState,
  reducers: {
    setArtistActive: (state, action) => ({
      ...state,
      artistActive: action.payload,
    }),
    setArtistLocal: (state, action) => ({
      ...state,
      artistLocal: action.payload,
    }),
    setLocationActive: (state, action) => ({
      ...state,
      locationActive: action.payload,
    }),
    setLocationLocal: (state, action) => ({
      ...state,
      locationLocal: action.payload,
    }),
    setYearActive: (state, action) => ({
      ...state,
      yearActive: action.payload,
    }),
    setYearFromLocal: (state, action) => ({
      ...state,
      yearFromLocal: action.payload,
    }),
    setYearToLocal: (state, action) => ({
      ...state,
      yearToLocal: action.payload,
    }),
    toggleFilter: (state, action) => {
      const type = action.payload;
      switch (type) {
        case 'ARTIST':
          return {
            ...state,
            artistActive: !state.artistActive,
          };
        case 'LOCATION':
          return {
            ...state,
            locationActive: !state.locationActive,
          };
        case 'YEARS':
          return {
            ...state,
            yearActive: !state.yearActive,
          };
        default:
          return state;
      }
    },
    setNanError: (state, action) => ({
      ...state,
      NanError: action.payload,
    }),
    setEnterError: (state, action) => ({
      ...state,
      enterError: action.payload,
    }),
  },
});

export const {
  setArtistActive,
  setArtistLocal,
  setLocationActive,
  setLocationLocal,
  setYearActive,
  setYearFromLocal,
  setYearToLocal,
  toggleFilter,
  setNanError,
  setEnterError,
} = sortedActiveSlice.actions;
export default sortedActiveSlice.reducer;
