import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const bacApi = createApi({
  reducerPath: "bacApi",
  tagTypes: ["Tracks"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8090/",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "ads",
      })
    })
  })
});

export const {useGetAllProductsQuery} = bacApi
