const StatusCode = {
  CREATED: 201,
  OK: 200,
}
const MessageStatusCode = {
  CREATED: 'created',
  OK: 'success'
}
class SuccessResponse {
  constructor({ message, statusCode = StatusCode.OK, messageStatusCode = MessageStatusCode.OK, metadata = {} }) {
    this.message = message ? message : messageStatusCode;
    this.statusCode = statusCode;
    this.metadata = metadata;
  }
  send(res, header = {}) {
    return res.status(this.statusCode).json(this);
  }
}
module.exports = { SuccessResponse }