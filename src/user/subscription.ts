import * as lite from '../lite';

enum SubscriptionPeriodUnit {
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
  MONTHLY = 'MONTHLY',
  YEARLY = 'YEARLY',
}

enum SortType {
  ASC = 'ASC',
  DESC = 'DESC',
}

type SubscriptionOrderer = {
  name: string;
  homePhone?: string;
  mobilePhone?: string;
  email?: string;
  password?: string;
  user: string;
};

type SubscriptionPeriod = {
  unit: SubscriptionPeriodUnit;
  value: number;
};

type SubscriptionPlan = {
  period: SubscriptionPeriod;
  iterationCount?: number;
  prepaid: boolean;
};

type SubscriptionSchedule = {
  previousAt: Date;
  nextAt: Date;
  estimatedNextAt: Date;
};

type UpdateSubscriptionOrderer = {
  name?: string;
  homePhone?: string;
  mobilePhone?: string;
  email?: string;
  password?: string;
  user?: string;
};

type UpdateSubscriptionPeriod = {
  unit?: SubscriptionPeriodUnit;
  value?: number;
};

type UpdateSubscriptionPlan = {
  period?: UpdateSubscriptionPeriod;
  iterationCount?: number;
  prepaid?: boolean;
};

type CreatedAt = {
  $gte?: Date;
  $lte?: Date;
  $gt?: Date;
  $lt?: Date;
};

type PreviousAt = {
  $gte?: Date;
  $lte?: Date;
  $gt?: Date;
  $lt?: Date;
};

type NextAt = {
  $gte?: Date;
  $lte?: Date;
  $gt?: Date;
  $lt?: Date;
};

type EstimatedNextAt = {
  $gte?: Date;
  $lte?: Date;
  $gt?: Date;
  $lt?: Date;
};

type SubscriptionSort = {
  createdAt?: SortType;
  previousAt?: SortType;
  nextAt?: SortType;
  estimatedNextAt?: SortType;
};

type UpdateSubscriptionSchedule = {
  previousAt?: Date;
  nextAt?: Date;
  estimatedNextAt?: Date;
};

type CreateSubscriptionBody = {
  orderer: SubscriptionOrderer;
  plan: SubscriptionPlan;
  product: string;
  productVariant?: string;
  schedule: SubscriptionSchedule;
};

type UpdateSubscriptionBody = {
  orderer?: UpdateSubscriptionOrderer;
  plan?: UpdateSubscriptionPlan;
  schedule?: UpdateSubscriptionSchedule;
};

type GetSubscriptionsQuery = {
  createdAt?: CreatedAt;
  previousAt?: PreviousAt;
  nextAt?: NextAt;
  estimatedNextAt?: EstimatedNextAt;
  sort?: SubscriptionSort;
};

export async function createUserSubscription(body: CreateSubscriptionBody) {
  return await lite.request('POST', `users/me/subscriptions`, { body });
}

export async function getUserSubscription(subscriptionId: string) {
  return await lite.request('GET', `users/me/subscriptions/${subscriptionId}`);
}

export async function updateUserSubscription(
  subscriptionId: string,
  body: UpdateSubscriptionBody
) {
  return await lite.request(
    'PATCH',
    `users/me/subscriptions/${subscriptionId}`,
    {
      body,
    }
  );
}

export async function deleteUserSubscription(subscriptionId: string) {
  return await lite.request(
    'DELETE',
    `users/me/subscriptions/${subscriptionId}`
  );
}

export async function getUserSubscriptions(query: GetSubscriptionsQuery) {
  return await lite.request('GET', `users/me/subscriptions`, { query });
}
