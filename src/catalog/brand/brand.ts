import { StringChecker } from '~/base/typeChecker';
import * as lite from '~/lite';

import { GetBrandsQuery } from './type';
import { GetQueryChecker } from './typeChecker';

export async function getBrand(brandId: string) {
  const stringChecker: StringChecker = new StringChecker();
  stringChecker.check(brandId, 'brandId');

  return await lite.request('GET', `brands/${brandId}`);
}

export async function getBrands(query: GetBrandsQuery) {
  const getQueryChecker: GetQueryChecker = new GetQueryChecker();
  getQueryChecker.checkQuery(query, 'query');

  return await lite.request('GET', 'brands', { query });
}
