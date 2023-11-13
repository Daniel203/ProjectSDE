// Middleware for validating access tokens
// This middleware validates access tokens using the express-oauth2-jwt-bearer middleware.


import * as dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import {
  auth,
  claimCheck,
  InsufficientScopeError,
} from "express-oauth2-jwt-bearer";

dotenv.config();

// Defines the issuerBaseURL and audience for the auth middleware.
// The values are read from the .env file.
// The issuerBaseURL is the Auth0 domain
// The audience is the identifier of the API, the URL that we have set in the API settings in the Auth0 dashboard.
export const validateAccessToken = auth({
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}`,
  audience: process.env.AUTH0_AUDIENCE,
});

// This middleware checks that the user has the required permissions by using 
// the claimCheck middleware provided by express-oauth2-jwt-bearer.
export const checkRequiredPermissions = (requiredPermissions: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {

    const permissionCheck = claimCheck((payload) => {
      // The payload contains the permissions of the user.
      const permissions = payload.permissions as string[];

      // Check that the user has the required permissions.
      const hasPermissions = requiredPermissions.every((requiredPermission) =>
        permissions.includes(requiredPermission)
      );

      // If the user does not have the required permissions, throw an InsufficientScopeError.
      if (!hasPermissions) {
        throw new InsufficientScopeError();
      }

      return hasPermissions;
    });

    // Call the permissionCheck middleware.
    permissionCheck(req, res, next);
  };
};
