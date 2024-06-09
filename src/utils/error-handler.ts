/**
 * Global error handler for express server
 * This middleware catches business errors
 * If the error is known it will be an instance of ApiError.
 * If the error is unexpected it will throw an internal server error
 *
 */

import { NextFunction, Request, Response } from "express";
import ApiError from "./api-error";

function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err.message);

  let statusCode = 500;
  let errorMessage = "Internal Server Error";

  if (err instanceof ApiError) {
    statusCode = err.status;
    errorMessage = err.message;
  }

  res.status(statusCode).json({
    status: statusCode,
    message: errorMessage,
    details: err.details,
  });
}

export { errorHandler };
