const userModel = require("../database/models/user.model");
const { CreateUserException } = require("../exceptions/CreateUserException");
const { abc } = require("../utils/Constants");

async function createUserService(data) {
  try {
    const { name, password, email, contact = "" } = data;
    const userObject = userModel({
      username: name,
      password: password,
      email: email,
      contact: contact,
    });

    const response = await userObject.save();

    return {
      success: true,
      status: 201,
      message: "user is created successfully",
      utkarshMessage: abc("wassyp"),
    };
  } catch (error) {
    throw new CreateUserException(
      "User not created!! something went wrong " + error.message
    );
  }
}

module.exports = { createUserService };
