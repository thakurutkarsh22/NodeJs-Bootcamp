const joi = require("joi");
const { USER_CREATION_VARIABLE } = require("../utils/Constants");

const joiUserCreationSchema = joi.object({
  name: joi
    .string()
    .alphanum()
    .min(USER_CREATION_VARIABLE.USER_NAME_MIN_CHAR)
    .max(USER_CREATION_VARIABLE.USER_NAME_MAX_CHAR)
    .required(),
  password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  contact: joi.number(),
});

module.exports = { joiUserCreationSchema };
