// Middleware for handling 404 errors


import { Request, Response, NextFunction } from "express";

export const notFoundHandler = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const message = "Not Found";

  response.status(404).json({ message });
};
