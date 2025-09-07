import { configureStore } from '@reduxjs/toolkit';
import { citiesReducer } from './slices/citiesSlice';
import { foodsApi } from './api/foodsApi';

const store = configureStore({
  reducer: {
    cities: citiesReducer,
    [foodsApi.reducerPath]: foodsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(foodsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };
