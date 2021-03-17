import * as lite from '~/lite';

import { FindMileagesDto } from './type';
import { FindMileagesValidator } from './validator';

export async function getUserMileages(query: FindMileagesDto) {
  const findMileagesValidator: FindMileagesValidator = new FindMileagesValidator();
  findMileagesValidator.validate(query, 'query');

  return await lite.request('GET', `users/me/mileages`, { query });
}
