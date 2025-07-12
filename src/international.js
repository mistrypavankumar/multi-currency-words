function convertToInternationalCurrencyWords(
  amount,
  currency = "Dollars",
  subCurrency = "cents"
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
  const scales = ["", "thousand", "million", "billion", "trillion"];

  const pushChunk = (num, words) => {
    const [hundreds, tens] = [Math.floor(num / 100), num % 100];
    if (hundreds > 0) {
      words.push(singleDigits[hundreds] + " hundred");
      if (tens) words.push("and");
    }
    if (tens > 0) {
      if (tens < 10) words.push(singleDigits[tens]);
      else if (tens < 20) words.push(twoDigits[tens - 10]);
      else {
        words.push(tensMultiple[Math.floor(tens / 10)]);
        if (tens % 10 !== 0) words.push(singleDigits[tens % 10]);
      }
    }
  };

  const numberToWords = (number) => {
    if (number === 0) return "zero";
    const chunks = [];
    while (number > 0) {
      chunks.push(number % 1000);
      number = Math.floor(number / 1000);
    }

    const words = [];
    for (let i = chunks.length - 1; i >= 0; i--) {
      const chunk = chunks[i];
      if (chunk !== 0) {
        const chunkWords = [];
        pushChunk(chunk, chunkWords);
        words.push(chunkWords.join(" "));
        if (scales[i]) words.push(scales[i]);
      }
    }
    return words.join(" ");
  };

  const [main, fraction] = amount.toFixed(2).split(".").map(Number);
  const mainWords = numberToWords(main);
  const fractionalWords =
    fraction > 0 ? numberToWords(fraction) + ` ${subCurrency}` : "";

  return `${currency} ${mainWords}${
    fractionalWords ? " and " + fractionalWords : ""
  }`;
}

module.exports = { convertToInternationalCurrencyWords };
