import * as lite from '../lite';

type Address = {
  zipCode: string;
  basic: string;
  locality: string;
  region?: string;
  country: string;
};

type CreateDeliveryAddressBody = {
  name: string;
  recipientName: string;
  address: Address;
  mobilePhone: string;
  homePhone?: string;
};

type UpdateAddress = {
  zipCode?: string;
  basic?: string;
  locality?: string;
  region?: string;
};

type UpdateDeliveryAddressBody = {
  isDefault?: boolean;
  name?: string;
  recipientName?: string;
  address?: UpdateAddress;
  mobilePhone?: string;
  homePhone?: string;
};

type GetDeliveryAdressesQuery = {
  name?: string;
};

export async function createUserDeliveryAddress(
  body: CreateDeliveryAddressBody
) {
  await lite.request('POST', `users/me/deliveryAddresses`, { body });
}

export async function getDefaultUserDeilveryAddress() {
  await lite.request('GET', `users/me/deliveryAddresses/default`);
}

export async function updateUserDeliveryAddress(
  deliveryAddressId: string,
  body: UpdateDeliveryAddressBody
) {
  await lite.request(
    'PATCH',
    `users/me/deliveryAddresses/${deliveryAddressId}`,
    { body }
  );
}

export async function deleteUserDeliveryAddress(deliveryAddressId: string) {
  await lite.request(
    'DELETE',
    `users/me/deliveryAddresses/${deliveryAddressId}`
  );
}

export async function getUserDeliveryAddresses(
  query: GetDeliveryAdressesQuery
) {
  await lite.request('GET', `users/me/deliveryAddresses`, { query });
}
