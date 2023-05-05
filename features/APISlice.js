import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://173.225.103.131/stroreapi/api/' }),
  endpoints: (builder) => ({
    getFoods: builder.query({
      query: () => `foods`,
    }),

    getFoodsByFoodTypeID: builder.query({
      query: (id) => `foods?food_type=${id}`,
    }),

    createProduct: builder.mutation({
      query: (product) => ({
        url: 'products',
        method: 'POST',
        body: product,
      }),
    }),

    updateProduct: builder.mutation({
      query: ({ id, ...updates }) => ({
        url: `products/${id}`,
        method: 'PUT',
        body: updates,
      }),
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetFoodsQuery,
  useGetFoodsByFoodTypeIDQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi
