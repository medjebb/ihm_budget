import { combineReducers, configureStore } from '@reduxjs/toolkit';
import referencesReducer from './reference-redux/reducer';

const rootReducer = combineReducers({
  references: referencesReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;
