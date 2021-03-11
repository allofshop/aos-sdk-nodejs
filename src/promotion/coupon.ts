import * as lite from '../lite';

type GetCouponByInputQuery = {
  input: string;
};

type IssueCouponByInputBody = {
  input: string;
};

export async function getCoupon(query: GetCouponByInputQuery) {
  await lite.request('GET', 'coupons', { query });
}

export async function issueCouponByInput(body: IssueCouponByInputBody) {
  await lite.request('POST', 'coupons', { body });
}

export async function issueCouponByDownload(counponId: string) {
  await lite.request('POST', `coupons/${counponId}/issue`);
}
