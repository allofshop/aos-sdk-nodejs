import * as lite from '../lite';

enum CustomerServiceType {
  CANCEL = 'CANCEL',
  EXCHANGE = 'EXCHANGE',
  RETURN = 'RETURN',
  REFUND = 'REFUND',
}

enum CustomerServicePaymentWay {
  BANK = 'BANK',
  PG = 'PG',
  MILEAGE = 'MILEAGE',
}

enum SortType {
  ASC = 'ASC',
  DESC = 'DESC',
}

enum CustomerServiceStatus {
  RECEIVED = 'RECEIVED',
  PROCESSING = 'PROCESSING',
  COMPLETED = 'COMPLETED',
  DEFERRED = 'DEFERRED',
}

type AdminCustomerServiceSource = {
  orderItemId: string;
  quantity: number;
};

type AdminCustomerServiceDestination = {
  productId: string;
  productVariantId?: string;
  quantity: number;
  discountPrice?: number;
  mileagePoint?: number;
};

type CollectingAddress = {
  zipCode: string;
  basic: string;
  locality: string;
  region?: string;
};

type CustomerServiceCollecting = {
  address: CollectingAddress;
};

type DeliveryAddress = {
  zipCode: string;
  basic: string;
  locality: string;
  region?: string;
};

type CustomerServiceDelivery = {
  address: DeliveryAddress;
};

type Refund = {
  productPrice: number;
  deliveryPrice: number;
  usingMileagePoint: number;
  discountPrice: number;
  couponPrice: number;
  mileagePoint: number;
};

type ExtraCharge = {
  productPrice: number;
  deliveryPrice: number;
  returnDeliveryPrice: number;
  usingMileagePoint: number;
  discountPrice: number;
  couponPrice: number;
  mileagePoint: number;
};

type CustomerServiceSort = {
  orderCreatedAt?: SortType;
  createdAt?: SortType;
  completedAt?: SortType;
};

type CreateCustomerServiceBody = {
  orderId: string;
  type: CustomerServiceType;
  reason?: string;
  reasonDetail?: string;
  sources: AdminCustomerServiceSource[];
  destinations: AdminCustomerServiceDestination[];
  paymentWay?: CustomerServicePaymentWay;
  collecting?: CustomerServiceCollecting;
  delivery?: CustomerServiceDelivery;
  refund: Refund;
  extraCharge?: ExtraCharge;
};

type GetCustomerServicesQuery = {
  createdAt?: Date;
  orderCreatedAt?: Date;
  orderCode?: string;
  type?: CustomerServiceType;
  code?: string;
  status?: CustomerServiceStatus;
  completedAt?: Date;
  paymentWay?: CustomerServicePaymentWay;
  sort?: CustomerServiceSort;
};

type GetCustomerServiceStatsQuery = {
  createdAt?: Date;
  orderCreatedAt?: Date;
  orderCode?: string;
  type?: CustomerServiceType;
  code?: string;
  status?: CustomerServiceStatus;
  completedAt?: Date;
  paymentWay?: CustomerServicePaymentWay;
};

export async function createUserCustomerService(
  body: CreateCustomerServiceBody
) {
  await lite.request('POST', `users/me/customerServices`, { body });
}

export async function getUserCustomerService(customerServiceId: string) {
  await lite.request('GET', `users/me/customerServices/${customerServiceId}`);
}

export async function updateUserCustomerService(
  customerServiceId: string,
  body: any
) {
  await lite.request(
    'PATCH',
    `users/me/customerServices/${customerServiceId}`,
    body
  );
}

export async function deleteUserCustomerService(customerServiceId: string) {
  await lite.request(
    'DELETE',
    `users/me/customerServices/${customerServiceId}`
  );
}

export async function getUserCustomerServices(query: GetCustomerServicesQuery) {
  await lite.request('GET', `users/me/customerServices`, { query });
}

export async function getUserCustomerServiceStats(
  query: GetCustomerServiceStatsQuery
) {
  await lite.request('GET', `users/me/customerServices/getStats`, { query });
}
