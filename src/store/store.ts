import { combineReducers, configureStore } from '@reduxjs/toolkit';

import pictureAPI from '../services/pictureService';
import themeReducer from './reducers/themeSlice';
import paginationReducer from './reducers/paginationSlice';
import sortedReducer from './reducers/sortedSlice';
import sortedActiveSlice from './reducers/sortedActiveSlice';

const rootReducer = combineReducers({
  [pictureAPI.reducerPath]: pictureAPI.reducer,
  themeReducer,
  paginationReducer,
  sortedReducer,
  sortedActiveSlice,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(pictureAPI.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
