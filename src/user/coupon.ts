import * as lite from '../lite';

enum SortType {
  ASC = 'ASC',
  DESC = 'DESC',
}

type UsedAt = {
  $gte?: Date;
  $lte?: Date;
  $lt?: Date;
  $gt?: Date;
};

type CouponSort = {
  createdAt?: SortType;
};

type GetCouponsQuery = {
  usedAt?: UsedAt;
  availableDate?: Date;
  sort?: CouponSort;
};

export async function getUserCoupon(userCouponId: string) {
  return await lite.request('GET', `users/me/coupons/${userCouponId}`);
}

export async function getUserCoupons(query: GetCouponsQuery) {
  return await lite.request('GET', `users/me/coupons`, { query });
}
