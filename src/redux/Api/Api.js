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
      providesTags: ["Products"],
    }),
    addProduct: build.mutation({
      query: (payload) => ({
        url: "/ads",
        method: "POST",
        body: {
          title: payload.title,
          description: payload.description,
          price: payload.price,
          files: payload.files,
        },
      }),
      invalidatesTags: ["Products", "MyProducts"],
    }),
    deleteAddProduct: build.mutation({
      query: (id) => ({
        url: `/ads/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),
    addProductText: build.mutation({
      query: (payload) => ({
        url: "/adstext",
        method: "POST",
        body: {
          title: payload.title,
          description: payload.description,
          price: payload.price,
        },
      }),
      invalidatesTags: ["MyProducts"],
    }),
    getMyProducts: build.query({
      query: () => ({
        url: "ads/me",
      }),
      providesTags: ["MyProducts"],
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
      providesTags: ["Comment"],
    }),
    AddComment: build.mutation({
      query: ({ ...payload }) => ({
        url: `ads/${payload.id}/comments`,
        method: "POST",
        body: {
          text: payload.text,
        },
      }),
      invalidatesTags: ["Comment"],
    }),
    getUser: build.query({
      query: () => ({
        url: `user`,
      }),
      providesTags: ["User"],
    }),
    changeUser: build.mutation({
      query: (payload) => ({
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
      }),
      invalidatesTags: ["User"],
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
  }),
});

export const {useGetAllProductsQuery, useGetProductQuery, useUserRegistationMutation, useUserLoginMutation, useGetUserQuery, useAddProductMutation, useChangeUserMutation, useChangeUserAvatarMutation, useGetMyProductsQuery, useGetCommentAdsQuery, useAddCommentMutation, useAddProductTextMutation, useDeleteAddProductMutation} = bacApi
