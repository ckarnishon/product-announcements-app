import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const bacApi = createApi({
  reducerPath: "bacApi",
  tagTypes: ["Ads"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8090/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().userToken.accessToken;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: () => ({
        url: "ads",
      }),
    }),
    getMyProducts: build.query({
      query: () => ({
        url: "ads/me",
      }),
    }),
    getProduct: build.query({
      query: (id) => ({
        url: `ads/${id}`,
      }),
    }),
    getCommentAds: build.query({
      query: (id) => ({
        url: `ads/${id}/comments`,
      }),
    }),
    getUser: build.query({
      query: () => ({
        url: `user`,
      }),
      providesTags: ["User"],
    }),
    changeUser: build.mutation({
      query: ({ ...payload }) => ({
        url: "user",
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["User"],
    }),
    changeUserAvatar: build.mutation({
      query: (payload) => ({
        url: "user/avatar",
        method: "POST",
        body: payload,
        headers: {
          "Content-Type": "multipart/form-data;",
        },
      }),
    }),
    userRegistation: build.mutation({
      query: ({ ...payload }) => ({
        url: "auth/register",
        method: "POST",
        body: payload,
      }),
    }),
    userLogin: build.mutation({
      query: ({ ...payload }) => ({
        url: "/auth/login",
        method: "POST",
        body: payload,
      }),
    }),
    addProduct: build.mutation({
      query: ({ ...payload }) => ({
        url: "/ads",
        method: "POST",
        body: payload,
        headers: {
          "Content-Type": "multipart/form-data;",
        },
      }),
    }),
  }),
});

export const {useGetAllProductsQuery, useGetProductQuery, useUserRegistationMutation, useUserLoginMutation, useGetUserQuery, useAddProductMutation, useChangeUserMutation, useChangeUserAvatarMutation, useGetMyProductsQuery, useGetCommentAdsQuery} = bacApi
