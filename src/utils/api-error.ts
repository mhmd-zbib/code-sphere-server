/**
 *
 * Set of custom standard errors in express server
 * By default passing the status and the message for the user
 *
 * next(ApiError.{type of error}( { message } ))
 *
 */

class ApiError extends Error {
  status: number;
  message: string;
  type: string;
  details?: any;

  constructor(status: number, message: string, type: string, details?: any) {
    super(message);
    this.status = status;
    this.message = message;
    this.type = type;
    this.details = details;
    Object.setPrototypeOf(this, ApiError.prototype);
  }

  toJson() {
    return {
      status: this.status,
      message: this.message,
      type: this.type,
      details: this.details,
    };
  }

  static badRequest(message: string = "Bad Request", details?: any) {
    return new ApiError(400, message, "Validation Error", details);
  }

  static unauthorized(message: string = "Unauthorized") {
    return new ApiError(401, message, "Unauthorized");
  }

  static forbidden(message: string = "Forbidden") {
    return new ApiError(403, message, "Forbidden");
  }

  static notFound(message: string = "Not Found") {
    return new ApiError(404, message, "Not Found");
  }

  static internalServerError(message: string = "Internal Server Error") {
    return new ApiError(500, message, "Internal Server Error");
  }
}

export default ApiError;
