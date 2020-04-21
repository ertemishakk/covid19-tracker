const Validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = validateData = (data) => {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.subject = !isEmpty(data.subject) ? data.subject : '';
    data.message = !isEmpty(data.message) ? data.message : '';

    if (Validator.isEmpty(data.name)) {
        errors.name = 'Name is required'
    }
    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email is required'
    }
    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid'
    }
    if (Validator.isEmpty(data.subject)) {
        errors.subject = 'Subject is required'
    }
    if (Validator.isEmpty(data.message)) {
        errors.message = 'Message is required'
    }

    return {
        errors: errors,
        isValid: isEmpty(errors)
    }

}