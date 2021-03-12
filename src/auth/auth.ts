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
  return await lite.request('POST', 'auth/join', { body });
}

export async function logout(body: LogoutBody) {
  return await lite.request('POST', 'auth/logout', { body });
}

export async function snsLogin() {
  return await lite.request('POST', 'auth/snsLogin');
}

export async function requestVerificationMessage(
  body: RequestVerificationMessageBody
) {
  return await lite.request('POST', 'auth/requestVerificationMessage', {
    body,
  });
}

export async function changePassword(body: ChanagePasswordBody) {
  return await lite.request('POST', 'auth/changePassword', { body });
}

export async function guestLogin() {
  return await lite.request('POST', 'auth/guestLogin');
}
