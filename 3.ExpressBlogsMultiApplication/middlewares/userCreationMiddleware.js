const {
  joiUserCreationSchema,
} = require("../validations/userCreationValidation");

function userCreationMiddlewareValidation(req, res, next) {
  const data = req.body;
  const { error } = joiUserCreationSchema.validate(data);

  // const {name, paasword} = data;

  //     if(name.length === 10) {}

  if (error) {
    res.status(400).json({
      error,
    });
  } else {
    next();
  }
}

module.exports = { userCreationMiddlewareValidation };
