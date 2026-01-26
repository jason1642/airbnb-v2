import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export interface UserState {
    data: any,
    isAuthenticated: boolean,
    isloading: boolean
}

console.log(process.env.NODE_ENV);

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5050/api/user/auth'
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getAllUsers: builder.query<any, void>({
            query: () => ''
        }),

    })
})

export const { useGetAllUsersQuery, } = userApi
