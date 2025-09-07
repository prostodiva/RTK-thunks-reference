import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCities = createAsyncThunk(
  'cities/fetchCities',
  async (__, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3005/cities');
      if (!response.ok) {
        throw new Error('Failed to fetch cities');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }
);
