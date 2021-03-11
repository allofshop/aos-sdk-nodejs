import * as lite from '../lite';

type GetBrandsQuery = {
  ids?: string[];
  codes?: string[];
  names?: string[];
};

export async function getBrand(brandId: string) {
  await lite.request('GET', `brands/${brandId}`);
}

export async function getBrands(query: GetBrandsQuery) {
  await lite.request('GET', 'brands', { query });
}
