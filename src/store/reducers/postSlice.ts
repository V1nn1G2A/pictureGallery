import { createSlice } from '@reduxjs/toolkit';
import { IPost } from '../../models/IPost';

interface IPostState {
  posts: IPost[];
  isLoading: boolean;
  error: string;
}

const initialState: IPostState = {
  posts: [],
  isLoading: false,
  error: '',
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // extraReducer: builder => {
    // builder
    //   .addCase(getPosts.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(getPosts.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.posts = action.payload;
    //   })
    //   .addCase(getPosts.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.error.message || "Something went wrong";
    //   })
    // },
  },
});

export default postSlice.reducer;
