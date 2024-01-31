// find all the words
const wordsRegEx = /([\wÀ-ú]+)/g

// not numbers
const noNumbersRegEx = /\D/g

// validate IP
const ipRegExp = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

// validate CPF
const cpfRegExp = /(?:\d{3}\.){2}\d{3}-\d{2}/g

// validate phones
const validatePhone = /^(\(\d{2}\)\s*)?(9\s*)?(\d{4})-(\d{4})$/g

// validate strong passwords
const validateStrongPasswords = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\]\)]).{8,}$/g

// ##################################
// # validate emails (use the last one) #
// ##################################

// [^\s]+@[^\s]+\.[^\s]+(\w+)* (hyper permissive)

// This expression is very permissive, less than the previous one, but it still detects a lot of invalid emails
// [^\s\.]+\.?[^\s\.]+@[^\s]+\.[^\s]+\w+

// In my tests, the regexp that obtained the best result, (hitting more valid and invalid ones), was the following line:
// /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/