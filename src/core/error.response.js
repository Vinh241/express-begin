const StatusCode = {
  BAD_REQUEST: 400,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  CONFLICT: 409
}
const ReasonStatusCode = {
  BAD_REQUEST: "Bad request",
  FORBIDDEN: 'Forbidden',
  NOT_FOUND : 'Not found',
  METHOD_NOT_ALLOWED: 'Method not allowed',
  CONFLICT: 'Conflict error'
}
class ErrorResponse extends Error{
  constructor(message,status){
    super(message);
    this.status = status;
  }
}
class BadRequestError extends ErrorResponse{
  constructor(message = ReasonStatusCode.BAD_REQUEST,status= StatusCode.BAD_REQUEST){
    super(message,status)
  }
}
module.exports = { BadRequestError}