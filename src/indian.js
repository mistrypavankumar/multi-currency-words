function convertToIndianCurrencyWords(
  amount,
  currency = "Rupees",
  subCurrency = "paise"
) {
  const singleDigits = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const twoDigits = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const tensMultiple = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  const pushTwoDigit = (num, words) => {
    if (num === 0) return;
    if (num < 10) words.push(singleDigits[num]);
    else if (num < 20) words.push(twoDigits[num - 10]);
    else {
      words.push(tensMultiple[Math.floor(num / 10)]);
      if (num % 10 !== 0) words.push(singleDigits[num % 10]);
    }
  };

  const numberToWords = (number) => {
    const numStr = Math.floor(number).toString().padStart(9, "0");
    const segments = [
      +numStr.slice(0, 2), // crore
      +numStr.slice(2, 4), // lakh
      +numStr.slice(4, 6), // thousand
      +numStr.slice(6, 7), // hundred
      +numStr.slice(7), // tens
    ];

    const words = [];

    if (segments[0]) {
      pushTwoDigit(segments[0], words);
      words.push("crore");
    }
    if (segments[1]) {
      pushTwoDigit(segments[1], words);
      words.push("lakh");
    }
    if (segments[2]) {
      pushTwoDigit(segments[2], words);
      words.push("thousand");
    }
    if (segments[3]) {
      words.push(singleDigits[segments[3]]);
      words.push("hundred");
    }
    if (segments[4]) {
      if (words.length) words.push("and");
      pushTwoDigit(segments[4], words);
    }

    return words.join(" ");
  };

  const [rupees, paise] = amount.toFixed(2).split(".").map(Number);
  const rupeeWords = rupees === 0 ? "zero" : numberToWords(rupees);
  const paiseWords = paise > 0 ? numberToWords(paise) + ` ${subCurrency}` : "";

  return `${currency} ${rupeeWords}${paiseWords ? " and " + paiseWords : ""}`;
}

module.exports = { convertToIndianCurrencyWords };
