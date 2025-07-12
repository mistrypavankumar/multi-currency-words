const { convertToIndianCurrencyWords } = require("./indian");
const { convertToInternationalCurrencyWords } = require("./international");

function toWords(amount, options = {}) {
  const {
    style = "indian", // "indian" or "international"
    currency = "Rupees",
    subCurrency = "paise",
  } = options;

  if (style === "international") {
    return convertToInternationalCurrencyWords(amount, currency, subCurrency);
  }
  return convertToIndianCurrencyWords(amount, currency, subCurrency);
}

module.exports = { toWords };
