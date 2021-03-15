import {
  BodyShouldBeObject,
  ValueShouldBeEnum,
  ValueShouldBeObject,
  ValueShouldBeString,
} from '~/base/error';

import * as lite from '../lite';

enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

enum RequestVerificationMessageType {
  PHONE = 'PHONE',
  EMAIL = 'EMAIL',
}

type Name = {
  first: string;
  middle?: string;
  last: string;
};

type JoinBody = {
  username: string;
  password: string;
  gender?: Gender;
  name: Name;
};

type LogoutBody = {
  tokenId: string;
};

type RequestVerificationMessageBody = {
  type: RequestVerificationMessageType;
  value: string;
};

type ChanagePasswordBody = {
  new: string;
  verificationToken: string;
};

lite.initialize({
  version: 1,
  apiKey: 'afsadfads',
  secret: 'dasd',
  shopId: '60497fab9813703f69cd46e4',
});

export async function login() {
  return await lite.request('POST', 'auth/login');
}

export async function join(body: JoinBody) {
  if (typeof body !== 'object') {
    throw new BodyShouldBeObject();
  }

  if (typeof body.username !== 'string') {
    throw new ValueShouldBeString('username');
  }

  if (typeof body.password !== 'string') {
    throw new ValueShouldBeString('password');
  }

  if (typeof body.gender !== undefined) {
    if (body.gender !== Gender.MALE && body.gender !== Gender.FEMALE) {
      throw new ValueShouldBeEnum('gender');
    }
  }

  if (typeof body.name !== 'object') {
    throw new ValueShouldBeObject('name');
  }

  if (typeof body.name.first !== 'string') {
    throw new ValueShouldBeString('first');
  }

  if (typeof body.name.middle !== undefined) {
    if (typeof body.name.middle !== 'string') {
      throw new ValueShouldBeString('middle');
    }
  }

  if (typeof body.name.last !== 'string') {
    throw new ValueShouldBeString('last');
  }

  return await lite.request('POST', 'auth/join', { body });
}

export async function logout(body: LogoutBody) {
  if (typeof body !== 'object') {
    throw new BodyShouldBeObject();
  }

  if (typeof body.tokenId !== 'string') {
    throw new ValueShouldBeString('tokenId');
  }

  return await lite.request('POST', 'auth/logout', { body });
}

export async function snsLogin() {
  return await lite.request('POST', 'auth/snsLogin');
}

export async function requestVerificationMessage(
  body: RequestVerificationMessageBody
) {
  if (typeof body !== 'object') {
    throw new BodyShouldBeObject();
  }

  if (
    body.type !== RequestVerificationMessageType.EMAIL &&
    body.type !== RequestVerificationMessageType.PHONE
  ) {
    throw new ValueShouldBeEnum('type');
  }

  if (typeof body.value !== 'string') {
    throw new ValueShouldBeString('value');
  }

  return await lite.request('POST', 'auth/requestVerificationMessage', {
    body,
  });
}

export async function changePassword(body: ChanagePasswordBody) {
  if (typeof body !== 'object') {
    throw new BodyShouldBeObject();
  }

  if (typeof body.new !== 'string') {
    throw new ValueShouldBeString('new');
  }

  if (typeof body.verificationToken !== 'string') {
    throw new ValueShouldBeString('verificationToken');
  }

  return await lite.request('POST', 'auth/changePassword', { body });
}

export async function guestLogin() {
  return await lite.request('POST', 'auth/guestLogin');
}
