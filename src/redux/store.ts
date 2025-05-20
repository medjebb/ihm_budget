import { configureStore } from '@reduxjs/toolkit';
import budgetReducer from './slices/budgetSlice';
import referencesReducer from './reference-redux/reducer';

const store = configureStore({
  reducer: {
    budget: budgetReducer,
    references: referencesReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;