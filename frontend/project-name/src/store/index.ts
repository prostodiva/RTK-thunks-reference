import { configureStore } from '@reduxjs/toolkit';
import { citiesReducer } from './slices/citiesSlice';

const store = configureStore({
  reducer: {
    cities: citiesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };
