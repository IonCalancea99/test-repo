// services/api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {AppsResponse, GetAppsType} from "./types.ts";

export const api = createApi({
    reducerPath: 'api', // Optional: default is 'api'
    baseQuery: fetchBaseQuery({ baseUrl: "https://recotest.pythonanywhere.com/api" }),
    endpoints: (builder) => ({
        getApps: builder.query<AppsResponse, GetAppsType>({
            query: (query: GetAppsType) => ({
                url: '/v1/app-service/get-apps',
                method: 'PUT',
                body: query
            }),
        }),
    }),
});

export const {
    useGetAppsQuery,
} = api;
