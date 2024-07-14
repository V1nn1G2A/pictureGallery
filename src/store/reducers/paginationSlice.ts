import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 1,
  сount: 0,
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => ({
      ...state,
      currentPage: action.payload,
    }),

    setCount: (state, action) => ({
      ...state,
      сount: action.payload,
    }),
  },
});

export default paginationSlice.reducer;
export const { setCurrentPage } = paginationSlice.actions;
