import { StringChecker } from '~/base/typeChecker';
import * as lite from '~/lite';

import { GetCouponQuery, IssueCouponBody } from './type';
import { GetQueryChecker, IssueBodyChecker } from './typeChecker';

export async function getCoupon(query: GetCouponQuery) {
  const getQueryChecker: GetQueryChecker = new GetQueryChecker();
  getQueryChecker.check(query, 'query');

  return await lite.request('GET', 'coupons', { query });
}

export async function issueCouponByInput(body: IssueCouponBody) {
  const issueBodyChecker: IssueBodyChecker = new IssueBodyChecker();
  issueBodyChecker.check(body, 'body');

  return await lite.request('POST', 'coupons', { body });
}

export async function issueCouponByDownload(counponId: string) {
  const stringChecker: StringChecker = new StringChecker();
  stringChecker.check(counponId, 'counponId');

  return await lite.request('POST', `coupons/${counponId}/issue`);
}
