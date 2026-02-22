import baseApi from "../BaseApi/BaseApi";
import { GetProductsParams, Product } from "./types";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], GetProductsParams>({
      query: (arg: GetProductsParams) => {
        const params = new URLSearchParams();
        Object.entries(arg).forEach(([key, value]) => {
          if (value !== null && value !== undefined && value !== "") {
            params.append(key, String(value));
          }
        });
        return {
          url: "/products",
          method: "GET",
          params,
        };
      },
      providesTags: (result: any) => {
        return result
          ? [
              { type: "PRODUCTS", id: "LIST" },
              ...result.map(({ id }: any) => {
                return { type: "PRODUCTS", id };
              }),
            ]
          : [{ type: "PRODUCTS", id: "LIST" }];
      },
    }),
    getProductById: builder.query<Product, string>({
      query: (id: string) => `products/${id}`,
      providesTags: (_result, _error, id) => [{ type: "PRODUCTS", id }],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;
export default productApi;
