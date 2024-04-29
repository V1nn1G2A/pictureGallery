import { combineReducers, configureStore } from '@reduxjs/toolkit';
import postReducer from './reducers/postSlice';
import postAPI from '../services/postService';
import themeReducer from './reducers/themeSlice';

const rootReducer = combineReducers({
  postReducer,
  [postAPI.reducerPath]: postAPI.reducer,
  themeReducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(postAPI.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
