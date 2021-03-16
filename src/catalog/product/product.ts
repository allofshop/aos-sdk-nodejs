import { StringChecker } from '~/base/typeChecker';
import * as lite from '~/lite';

import { GetProductsQuery } from './type';
import { GetQueryChecker } from './typeChecker';

export async function getProduct(productId: string) {
  const stringChecker: StringChecker = new StringChecker();
  stringChecker.check(productId, 'productId');

  return await lite.request('GET', `products/${productId}`);
}

export async function getProducts(query: GetProductsQuery) {
  const getQueryChecker: GetQueryChecker = new GetQueryChecker();
  getQueryChecker.checkQuery(query, 'query');

  return await lite.request('GET', 'products', { query });
}
