import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import * as admin from 'firebase-admin';
import { ExtractJwt, JwtFromRequestFunction } from 'passport-jwt';
import { Strategy } from 'passport-strategy';
import { ParsedQs } from 'qs';

import * as serviceAccount from './firebase-adminsdk.json';

@Injectable()
export class FirebaseStrategy extends PassportStrategy(Strategy, 'firebase') {
  private admin: admin.app.App;

  private extractor: JwtFromRequestFunction;

  constructor() {
    super();
    this.admin = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    });
    this.extractor = ExtractJwt.fromAuthHeaderAsBearerToken();
  }

  async validate(payload: admin.auth.DecodedIdToken): Promise<string> {
    return payload.uid;
  }

  authenticate(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>): void {
    const idToken = this.extractor(req);
    if (!idToken) {
      this.fail('Unauthorized', 401);
    }
    this.admin
      .auth()
      .verifyIdToken(idToken)
      .then((res) => this.validateDecodedIdToken(res))
      .catch(() => {
        this.fail('Unauthorized', 401);
      });
  }

  private async validateDecodedIdToken(decodedIdToken: admin.auth.DecodedIdToken) {
    const result = await this.validate(decodedIdToken);

    if (result) {
      this.success(result);
    }

    this.fail('Unauthorized', 401);
  }
}
