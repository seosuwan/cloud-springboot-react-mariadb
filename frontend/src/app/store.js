import { 
  configureStore,
  combineReducers,
  getDefaultMiddleware
 } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import counterReducer from 'features/counter/counterSlice'
import { userReducer } from 'features/user';

const rootReducer = combineReducers({ userReducer })

export const store = configureStore({
  reducer: rootReducer,
  middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});
