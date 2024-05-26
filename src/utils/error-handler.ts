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
    statusCode = err.code;
    errorMessage = err.message;
  }

  res.status(statusCode).json({
    error: statusCode,
    message: errorMessage,
  });
}

export { errorHandler };
