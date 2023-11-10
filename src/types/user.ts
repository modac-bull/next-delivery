import { JwtPayload } from 'jsonwebtoken';

export type UserType = {
  email: string | JwtPayload;
};
