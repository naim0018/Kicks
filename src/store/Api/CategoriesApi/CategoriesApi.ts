import baseApi from "../BaseApi/BaseApi";
import { Category } from "./types";

const categoriesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => "categories",
      providesTags: ["CATEGORIES"],
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
export default categoriesApi;
