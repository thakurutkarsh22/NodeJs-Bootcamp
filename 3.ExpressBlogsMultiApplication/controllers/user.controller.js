const { createUserService } = require("../services/user.service");

async function createUser(req, res, next) {
  try {
    const { name, password, email, contact = "" } = req.body;
    const { status, message, success } = await createUserService({
      name,
      password,
      email,
      contact,
    });

    res.status(status).json({
      message,
      success,
    });
  } catch (error) {
    res.status(400).json({
      message: "make sure data is correct " + error.message,
    });
  }
}

module.exports = { createUser };
