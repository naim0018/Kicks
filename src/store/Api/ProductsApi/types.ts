// Category type
export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

// Product type
export interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  creationAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

export interface GetProductsParams {
  offset?: number;
  limit?: number;
  title?: string;
  categoryId?: number;
  categorySlug?: string;
}

