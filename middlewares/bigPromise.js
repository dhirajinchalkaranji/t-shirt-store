//try catch and async - await || use promise

//functional programming
module.exports = (func) => (req, res, next) =>
  Promise.resolve(func(req, res, next)).catch(next);
