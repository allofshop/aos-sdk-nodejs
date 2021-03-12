import * as lite from '../lite';

enum SortType {
  ASC = 'ASC',
  DESC = 'DESC',
}

type Price = {
  $gte?: number;
  $lte?: number;
  $gt?: number;
  $lt?: number;
};

type RetailPrice = {
  $gte?: number;
  $lte?: number;
  $gt?: number;
  $lt?: number;
};

type GrossPrice = {
  $gte?: number;
  $lte?: number;
  $gt?: number;
  $lt?: number;
};

type CreatedAt = {
  $gte?: Date;
  $lte?: Date;
  $gt?: Date;
  $lt?: Date;
};

type UpdatedAt = {
  $gte?: Date;
  $lte?: Date;
  $gt?: Date;
  $lt?: Date;
};

type Stock = {
  $gte?: number;
  $lte?: number;
  $gt?: number;
  $lt?: number;
};

type SafetyStock = {
  $gte?: number;
  $lte?: number;
  $gt?: number;
  $lt?: number;
};

type Weight = {
  $gte?: number;
  $lte?: number;
  $gt?: number;
  $lt?: number;
};

type ProductSort = {
  createdAt?: SortType;
  updatedAt?: SortType;
  name?: SortType;
  price?: SortType;
};

type GetProductsQuery = {
  vendorIds?: string[];
  ids?: string[];
  displayable?: boolean;
  sellable?: boolean;
  names?: string[];
  codes?: string[];
  customCodes?: string[];
  brandCodes?: string[];
  manufactureCodes?: string[];
  supplierCodes?: string[];
  tags?: string[];
  price?: Price;
  retailPrice?: RetailPrice;
  grossPrice?: GrossPrice;
  createdAt?: CreatedAt;
  updatedAt?: UpdatedAt;
  categoryIds?: string[];
  includeSubCategory?: boolean;
  stock?: Stock;
  safetyStock?: SafetyStock;
  weight?: Weight;
  sort?: ProductSort;
};

export async function getProduct(productId: string) {
  return await lite.request('GET', `products/${productId}`);
}

export async function getProducts(query: GetProductsQuery) {
  return await lite.request('GET', 'products', { query });
}
