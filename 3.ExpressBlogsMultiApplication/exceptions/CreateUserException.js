class CreateUserException extends Error {
  constructor(message) {
    super(message);
    this.code = 90905567;
  }
}

module.exports = { CreateUserException };
