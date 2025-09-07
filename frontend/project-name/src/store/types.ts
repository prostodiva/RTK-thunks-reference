export interface City {
  id: number;
  name: string;
}

export interface CitiesState {
  cities: City[];
  loading: boolean;
  error: string | null;
}

export const initialState: CitiesState = {
  cities: [],
  loading: false,
  error: null,
};
