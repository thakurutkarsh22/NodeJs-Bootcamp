const mongoose = require("mongoose");
const { USER_CREATION_VARIABLE } = require("../../utils/Constants");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      minLength: USER_CREATION_VARIABLE.USER_NAME_MIN_CHAR,
      maxLength: USER_CREATION_VARIABLE.USER_NAME_MAX_CHAR,
    },
    password: { type: String, required: true, minLength: 8, maxLength: 24 },
    email: {
      type: String,
      required: true,
      unique: [true, "email should be unique"],
    },
    contact: { type: Number, minLength: 10, maxLength: 10 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
