import * as lite from '../lite';

type GetVendorsQuery = {
  ids?: string[];
  codes?: string[];
  names?: string[];
};

export async function getVendor(vendorId: string) {
  await lite.request('GET', `vendors/${vendorId}`);
}

export async function getVendors(query: GetVendorsQuery) {
  await lite.request('GET', 'vendors', { query });
}
