import * as jwt from 'jsonwebtoken';
import * as express from 'express';
import { unless } from 'express-unless';
/**
 * A function that defines how to retrieve the verification key given the express request and the JWT.
 */
export declare type GetVerificationKey = (req: express.Request, token: jwt.Jwt | undefined) => jwt.Secret | Promise<jwt.Secret>;
/**
 * @deprecated use GetVerificationKey
 */
export declare type SecretCallback = GetVerificationKey;
/**
 * @deprecated use GetVerificationKey
 */
export declare type SecretCallbackLong = GetVerificationKey;
/**
 * A function to check if a token is revoked
 */
export declare type IsRevoked = (req: express.Request, token: jwt.Jwt | undefined) => boolean | Promise<boolean>;
/**
 * A function to customize how a token is retrieved from the express request.
 */
export declare type TokenGetter = (req: express.Request) => string | Promise<string> | undefined;
declare type Params = {
    /**
     * The Key or a function to retrieve the key used to verify the JWT.
     */
    secret: jwt.Secret | GetVerificationKey;
    /**
     * Defines how to retrieves the token from the request object.
     */
    getToken?: TokenGetter;
    /**
     * Defines how to verify if a token is revoked.
     */
    isRevoked?: IsRevoked;
    /**
     * If sets to true, continue to the next middleware when the
     * request doesn't include a token without failing.
     *
     * @default true
     */
    credentialsRequired?: boolean;
    /**
     * Allows to customize the name of the property in the request object
     * where the decoded payload is set.
     * @default 'auth'
     */
    requestProperty?: string;
    /**
     * List of JWT algorithms allowed.
     */
    algorithms: jwt.Algorithm[];
} & jwt.VerifyOptions;
export { UnauthorizedError } from './errors/UnauthorizedError';
/**
 * @deprecated this breaks tsc when using strict: true
 */
export declare type ExpressJwtRequest<T = jwt.JwtPayload> = express.Request & {
    auth: T;
};
/**
 * @deprecated use Request<T>
 */
export declare type ExpressJwtRequestUnrequired<T = jwt.JwtPayload> = express.Request & {
    auth?: T;
};
/**
 * The Express Request including the "auth" property with the decoded JWT payload.
 */
export declare type Request<T = jwt.JwtPayload> = express.Request & {
    auth?: T;
};
/**
 * Returns an express middleware to verify JWTs.
 *
 * @param options {Params}
 * @returns
 */
export declare const expressjwt: (options: Params) => {
    (req: express.Request, res: express.Response, next: express.NextFunction): Promise<void>;
    unless: typeof unless;
};
