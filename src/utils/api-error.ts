/**
 *
 * Set of custom standard errors in express server
 * By default passing the code and the message for the user
 *
 * next(ApiError.{type of error}( { message } ))
 *
 */

class ApiError extends Error {
  code: number;

  constructor(code: number, message: string) {
    super(message);
    this.code = code;
    Object.setPrototypeOf(this, ApiError.prototype);
  }

  static badRequest(message: string = "Bad Request") {
    return new ApiError(400, message);
  }

  static unauthorized(message: string = "Unauthorized") {
    return new ApiError(401, message);
  }

  static forbidden(message: string = "Forbidden") {
    return new ApiError(403, message);
  }

  static notFound(message: string = "Not Found") {
    return new ApiError(404, message);
  }

  static internalServerError(message: string = "Internal Server Error") {
    return new ApiError(500, message);
  }
}

export default ApiError;
