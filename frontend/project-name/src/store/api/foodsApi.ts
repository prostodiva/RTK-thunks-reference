import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Food } from '../types';

const foodsApi = createApi({
    reducerPath: 'foods',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005',
        }),
    tagTypes: ['Food'],
    endpoints(builder) {
        return {
            fetchFoodsByCity: builder.query<Food[], { cityId: number }>({
                query: ({ cityId }) => ({
                url: '/foods',
                params: {
                    city_id: cityId, 
                },
                }),
                providesTags: (result, _, { cityId }) => [ // eslint-disable-line @typescript-eslint/no-unused-vars
                { type: 'Food', id: 'LIST' },
                ...(result?.map(({ id }) => ({ type: 'Food' as const, id })) || []),
                ],
            }),
        }
    }
});

export const { useFetchFoodsByCityQuery } = foodsApi;
export { foodsApi };