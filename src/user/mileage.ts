import * as lite from '../lite';

enum SortType {
  ASC = 'ASC',
  DESC = 'DESC',
}

type ExpiredAt = {
  $gte?: Date;
  $lte?: Date;
  $gt?: Date;
  $lt?: Date;
};

type CreatedAt = {
  $gte?: Date;
  $lte?: Date;
  $gt?: Date;
  $lt?: Date;
};

type MileageSort = {
  createdAt?: SortType;
};

type GetMileagesQuery = {
  available?: boolean;
  expiredAt?: ExpiredAt;
  createdAt?: CreatedAt;
  sort?: MileageSort;
};

export async function getUserMileages(query: GetMileagesQuery) {
  return await lite.request('GET', `users/me/mileages`, { query });
}
