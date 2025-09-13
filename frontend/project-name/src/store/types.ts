
//city types
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



//food types
export interface Food {
  id: number;
  name: string;
  city_id: number;
  price: number;
}

