const { user } = require('../models/user');
const createUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during creation
    if (
      req &&
      isAllFieldsInRequest(req.body) &&
      emailValidation(req.body.email) &&
      phoneValidation(req.body.phoneNumber) &&
      passwordValidation(req.body.password) &&
      !isIdInRequest(req.body)
    ) {
        req.body = formatRequestBody(req.body);
    } else {
        throw Error `User entity to create isn't valid`;
    }
};

const emailValidation = (eMail) => {
    if (!eMail) {
        return false
    }
    const regex = new RegExp('^.+@gmail\\.com$');
    return regex.test(eMail);
};

const phoneValidation = (phone) => {
    if (!phone) {
        return false
    }
    const regex = new RegExp('^\\+380\\d{9}$');
    return regex.test(phone);
};

const passwordValidation = (password) => {
    if (!password) {
        return false
    }
    const regex = new RegExp('^.{3,}$');
    return regex.test(password);
};

const isIdInRequest = (req) => {
    const keys = Object.keys(req);
    return keys.some(key => key === 'id');
};

const isAllFieldsInRequest = (req) => {
    const acceptedFields = ['firstName', 'lastName', 'email', 'phoneNumber', 'password'];
    const keys = Object.keys(req);
    acceptedFields.forEach((field) => {
        if (!(keys.some((key) => key === field))) {
            return false
        }
    });
    return true;
};

const formatRequestBody = (body) => {
    return { firstName, lastName, email, phoneNumber, password } = body;
};

const updateUserValid = (req, res, next) => {
    if (
      req &&
      isAllFieldsInRequest(req.body) &&
      emailValidation(req.body.email) &&
      phoneValidation(req.body.phoneNumber) &&
      passwordValidation(req.body.password) &&
      !isIdInRequest(req.body)
    ) {

        req.body = formatRequestBody(req.body);
        next();
    } else {
        req.err = `User entity to create isn't valid`;
    }
};

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;
