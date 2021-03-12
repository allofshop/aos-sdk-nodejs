import * as lite from '../lite';

type GetCouponByInputQuery = {
  input: string;
};

type IssueCouponByInputBody = {
  input: string;
};

export async function getCoupon(query: GetCouponByInputQuery) {
  return await lite.request('GET', 'coupons', { query });
}

export async function issueCouponByInput(body: IssueCouponByInputBody) {
  return await lite.request('POST', 'coupons', { body });
}

export async function issueCouponByDownload(counponId: string) {
  return await lite.request('POST', `coupons/${counponId}/issue`);
}
