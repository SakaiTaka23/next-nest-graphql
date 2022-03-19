import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import * as admin from 'firebase-admin';
import { Strategy } from 'passport-custom';

import * as serviceAccount from './firebase-adminsdk.json';

@Injectable()
export class FirebaseStrategy extends PassportStrategy(Strategy, 'firebase') {
  constructor() {
    super();
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    });
  }

  async validate(req: Request): Promise<string> {
    const authHeader: string = req.headers.authorization;
    if (!authHeader) throw new UnauthorizedException();
    const token = authHeader.replace('Bearer ', '');
    const decodedToken = await admin
      .auth()
      .verifyIdToken(token)
      .catch(() => {
        throw new UnauthorizedException();
      });
    console.log(`decoded ${decodedToken.uid}`);
    return decodedToken.uid;
  }
}
