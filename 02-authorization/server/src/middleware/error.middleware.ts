// Middleware for handling access token errors
// This middleware handles errors thrown by the express-oauth2-jwt-bearer middleware,
// and returns a JSON response with the appropriate error message.
// The errors handled are:
// InsufficientScopeError: thrown when the user does not have the required permissions.
// InvalidTokenError: thrown when the access token is invalid.
// UnauthorizedError: thrown when the access token is missing.
// InternalServerError: thrown when an unexpected error occurs.

import { Request, Response, NextFunction } from "express";
import {
  InvalidTokenError,
  UnauthorizedError,
  InsufficientScopeError,
} from "express-oauth2-jwt-bearer";

export const errorHandler = (
  error: any,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (error instanceof InsufficientScopeError) {
    const message = "Permission denied";

    response.status(error.status).json({ message });

    return;
  }

  if (error instanceof InvalidTokenError) {
    const message = "Bad credentials";

    response.status(error.status).json({ message });

    return;
  }

  if (error instanceof UnauthorizedError) {
    const message = "Requires authentication";

    response.status(error.status).json({ message });

    return;
  }

  const status = 500;
  const message = "Internal Server Error";

  response.status(status).json({ message });
};
