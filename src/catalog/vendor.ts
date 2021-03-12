import * as lite from '../lite';

type GetVendorsQuery = {
  ids?: string[];
  codes?: string[];
  names?: string[];
};

export async function getVendor(vendorId: string) {
  return await lite.request('GET', `vendors/${vendorId}`);
}

export async function getVendors(query: GetVendorsQuery) {
  return await lite.request('GET', 'vendors', { query });
}
