class CustomError extends Error {
  constructor(message, code) {
    super(message); //Super allows you to call and use parent class constructor
    this.code = code;
  }
}

module.exports = CustomError;
