import * as lite from '~/lite';

import {
  ChangePasswordBody,
  JoinBody,
  LogoutBody,
  RequestVerificationMessageBody,
} from './type';
import {
  ChangePasswordBodyChecker,
  JoinBodyChecker,
  LogoutBodyChecker,
  RequestVerificationMessageBodyChecker,
} from './typeChecker';

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
  const joinBodyChecker: JoinBodyChecker = new JoinBodyChecker();
  joinBodyChecker.checkBody(body, 'body');

  return await lite.request('POST', 'auth/join', { body });
}

export async function logout(body: LogoutBody) {
  const logoutBodyChecker: LogoutBodyChecker = new LogoutBodyChecker();
  logoutBodyChecker.checkBody(body, 'body');

  return await lite.request('POST', 'auth/logout', { body });
}

export async function snsLogin() {
  return await lite.request('POST', 'auth/snsLogin');
}

export async function requestVerificationMessage(
  body: RequestVerificationMessageBody
) {
  const requestVerificationMessageBodyChecker = new RequestVerificationMessageBodyChecker();
  requestVerificationMessageBodyChecker.checkBody(body, 'body');

  return await lite.request('POST', 'auth/requestVerificationMessage', {
    body,
  });
}

export async function changePassword(body: ChangePasswordBody) {
  const changePasswordBodyChecker = new ChangePasswordBodyChecker();
  changePasswordBodyChecker.checkBody(body, 'body');

  return await lite.request('POST', 'auth/changePassword', { body });
}

export async function guestLogin() {
  return await lite.request('POST', 'auth/guestLogin');
}
