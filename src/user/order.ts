import * as lite from '../lite';

enum SortType {
  ASC = 'ASC',
  DESC = 'DESC',
}

enum OrderStatus {
  DRAFT = 'DRAFT',
  PAYMENT_PROCESSING = 'PAYMENT-PROCESSING',
  AWAITING_DEPOSIT = 'AWAITING-DEPOSIT',
  ORDER_PROCESSING = 'ORDER-PROCESSING',
  COMPLETED = 'COMPLETED',
  CONFIRMED = 'CONFIRMED',
  CS_PROCESSING = 'CS-PROCESSING',
  EXPIRED = 'EXPIRED',
}

type CreatedAt = {
  $gte?: Date;
  $lte?: Date;
  $gt?: Date;
  $lt?: Date;
};

type OrderSort = {
  createdAt?: SortType;
};

type GetOrdersQuery = {
  createdAt?: CreatedAt;
  status?: OrderStatus;
  sort?: OrderSort;
};

export async function getUserOrder(orderId: string) {
  return await lite.request('GET', `users/me/orders/${orderId}`);
}

export async function getUserOrders(query: GetOrdersQuery) {
  return await lite.request('GET', `users/me/orders`, { query });
}
