import { ValueShouldBeEnum } from '~/base/error';
import { ObjectChecker, StringChecker } from '~/base/typeChecker';

import {
  ChangePasswordBody,
  JoinBody,
  LogoutBody,
  Name,
  RequestVerificationMessageBody,
} from './type';
import { Gender, RequestVerificationMessageType } from './vo';

class GenderEnumChecker {
  public check(gender: Gender, location: string) {
    if (gender !== Gender.MALE && gender !== Gender.FEMALE) {
      throw new ValueShouldBeEnum(location);
    }
  }
}

class RequestVerificationMessageEnumChecker {
  public check(type: RequestVerificationMessageType, location: string) {
    if (
      type !== RequestVerificationMessageType.EMAIL &&
      type !== RequestVerificationMessageType.PHONE
    ) {
      throw new ValueShouldBeEnum(location);
    }
  }
}

class NameChecker {
  private stringChecker: StringChecker;
  private objectChecker: ObjectChecker;

  constructor() {
    this.stringChecker = new StringChecker();
    this.objectChecker = new ObjectChecker();
  }

  public check(name: Name, location: string) {
    this.objectChecker.check(name, location);
    this.stringChecker.check(name.first, `${location}.first`);
    if (name.middle !== undefined) {
      this.stringChecker.check(name.middle, `${location}.middle`);
    }
    this.stringChecker.check(name.first, `${location}.last`);
  }
}

export class JoinBodyChecker {
  private stringChecker: StringChecker;
  private objectChecker: ObjectChecker;
  private nameChecker: NameChecker;
  private genderChecker: GenderEnumChecker;

  constructor() {
    this.stringChecker = new StringChecker();
    this.objectChecker = new ObjectChecker();
    this.nameChecker = new NameChecker();
    this.genderChecker = new GenderEnumChecker();
  }

  public checkBody(body: JoinBody, location: string) {
    this.objectChecker.check(body, location);
    this.stringChecker.check(body.username, `${location}.username`);
    this.stringChecker.check(body.password, `${location}.password`);

    if (body.gender !== undefined) {
      this.genderChecker.check(body.gender, `${location}.gender`);
    }

    this.nameChecker.check(body.name, `${location}.name`);
  }
}

export class LogoutBodyChecker {
  private stringChecker: StringChecker;
  private objectChecker: ObjectChecker;

  constructor() {
    this.stringChecker = new StringChecker();
    this.objectChecker = new ObjectChecker();
  }

  public checkBody(body: LogoutBody, location: string) {
    this.objectChecker.check(body, location);
    this.stringChecker.check(body.tokenId, `${location}.tokenId`);
  }
}

export class RequestVerificationMessageBodyChecker {
  private stringChecker: StringChecker;
  private objectChecker: ObjectChecker;
  private requestVerificationMessageChecker: RequestVerificationMessageEnumChecker;

  constructor() {
    this.stringChecker = new StringChecker();
    this.objectChecker = new ObjectChecker();
    this.requestVerificationMessageChecker = new RequestVerificationMessageEnumChecker();
  }

  public checkBody(body: RequestVerificationMessageBody, location: string) {
    this.objectChecker.check(body, location);
    this.requestVerificationMessageChecker.check(body.type, `${location}.type`);
    this.stringChecker.check(body.value, `${location}.value`);
  }
}

export class ChangePasswordBodyChecker {
  private stringChecker: StringChecker;
  private objectChecker: ObjectChecker;

  constructor() {
    this.stringChecker = new StringChecker();
    this.objectChecker = new ObjectChecker();
  }

  public checkBody(body: ChangePasswordBody, location: string) {
    this.objectChecker.check(body, location);
    this.stringChecker.check(body.new, `${location}.new`);
    this.stringChecker.check(
      body.verificationToken,
      `${location}.verificationToken`
    );
  }
}
