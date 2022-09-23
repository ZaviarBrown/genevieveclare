import { combineReducers } from 'redux';
import sessionReducer from './session';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { logger } from 'redux-logger';
import noteReducer from './note';

const rootReducer = combineReducers({
  session: sessionReducer,
  note: noteReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default configureStore;
