import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../types.ts';
import { fetchCities } from '../thunks/citiesThunk.ts';

const citiesSlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    // Clear cities
    clearCities: (state) => {
      state.cities = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle fetchCities pending
      .addCase(fetchCities.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Handle fetchCities fulfilled
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.loading = false;
        state.cities = action.payload;
        state.error = null;
      })
      // Handle fetchCities rejected
      .addCase(fetchCities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearCities } = citiesSlice.actions;
export const citiesReducer = citiesSlice.reducer;
