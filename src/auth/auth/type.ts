import { Gender, RequestVerificationMessageType } from './vo';

export type Name = {
  first: string;
  middle?: string;
  last: string;
};

export type JoinBody = {
  username: string;
  password: string;
  gender?: Gender;
  name: Name;
};

export type LogoutBody = {
  tokenId: string;
};

export type RequestVerificationMessageBody = {
  type: RequestVerificationMessageType;
  value: string;
};

export type ChangePasswordBody = {
  new: string;
  verificationToken: string;
};
