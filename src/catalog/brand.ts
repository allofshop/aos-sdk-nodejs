import * as lite from '../lite';

type GetBrandsQuery = {
  ids?: string[];
  codes?: string[];
  names?: string[];
};

export async function getBrand(brandId: string) {
  return await lite.request('GET', `brands/${brandId}`);
}

export async function getBrands(query: GetBrandsQuery) {
  return await lite.request('GET', 'brands', { query });
}
