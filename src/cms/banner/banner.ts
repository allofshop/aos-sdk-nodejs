import * as lite from '~/lite';

import { GetBannersQuery } from './type';
import { GetQueryChecker } from './typeChecker';

export async function getBanners(query: GetBannersQuery) {
  const getQueryChecker: GetQueryChecker = new GetQueryChecker();
  getQueryChecker.checkQuery(query, 'query');

  return await lite.request('GET', 'banners', { query });
}
