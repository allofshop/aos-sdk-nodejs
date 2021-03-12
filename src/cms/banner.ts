import * as lite from '../lite';

type GetBannersQuery = {
  code?: string;
};

export async function getBanners(query: GetBannersQuery) {
  return await lite.request('GET', 'banners', { query });
}
