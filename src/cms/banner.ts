import * as lite from '../lite';

type GetBannersQuery = {
  code?: string;
};

export async function getBanners(query: GetBannersQuery) {
  await lite.request('GET', 'banners', { query });
}
