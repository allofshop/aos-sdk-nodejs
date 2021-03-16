import { StringChecker } from '~/base/typeChecker';
import * as lite from '~/lite';

import { GetVendorsQuery } from './type';
import { GetQueryChecker } from './typeChecker';

export async function getVendor(vendorId: string) {
  const stringChecker: StringChecker = new StringChecker();
  stringChecker.check(vendorId, 'vendorId');

  return await lite.request('GET', `vendors/${vendorId}`);
}

export async function getVendors(query: GetVendorsQuery) {
  const getQueryChecker: GetQueryChecker = new GetQueryChecker();
  getQueryChecker.checkQuery(query, 'query');

  return await lite.request('GET', 'vendors', { query });
}
