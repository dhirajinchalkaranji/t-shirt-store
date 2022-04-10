const BigPromise = require("../middlewares/bigPromise");

exports.home = BigPromise(async (req, res, next) => {
  // const db = await something[]
  res.status(200).json({
    success: true,
    greeting: "hello from API",
  });
});

exports.homeDummy = async (req, res) => {
  try {
    // const db = await something[]

    res.status(200).json({
      success: true,
      greeting: "This is another dummy route",
    });
  } catch (error) {
    console.log(error);
  }
};
