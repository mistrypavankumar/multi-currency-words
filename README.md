# multi-currency-words

Convert currency amounts to words with support for **Indian** and **International** numbering systems.

## ✨ Features

- ✅ Supports Indian style (lakh, crore, paise)
- ✅ Supports International style (thousand, million, cents)
- ✅ Works with floating-point numbers (paise/cents)
- ✅ Configurable currency and sub-currency labels
- ✅ Zero dependency, pure JavaScript

---

## 📦 Installation

```bash
npm install multi-currency-words
```

## 🚀 Usage

```
const { toWords } = require("multi-currency-words");

// Indian style
console.log(
  toWords(560500.75, {
    style: "indian",
    currency: "Rupees",
    subCurrency: "paise",
  })
);
// ➜ Rupees Five lakh sixty thousand five hundred and seventy five paise

// International style
console.log(
  toWords(560500.75, {
    style: "international",
    currency: "Dollars",
    subCurrency: "cents",
  })
);
// ➜ Dollars Five hundred sixty thousand five hundred and seventy five cents

```

## ⚙️ API

| Parameter     | Type     | Description                                           |
| ------------- | -------- | ----------------------------------------------------- |
| `amount`      | `number` | The amount to convert (e.g., `1234.56`)               |
| `options`     | `object` | Optional configuration object                         |
| `style`       | `string` | `"indian"` or `"international"` (default: `"indian"`) |
| `currency`    | `string` | Label for the main unit (e.g., `"Rupees"`)            |
| `subCurrency` | `string` | Label for the fractional unit (e.g., `"paise"`)       |

## 🧠 Why use this?

Most libraries convert numbers using Western style only. This package is designed for businesses and developers who work with Indian financial formats or need configurable output for different locales.

## 📄 License

This project is licensed under the MIT License. See LICENSE for details.

## 🧑‍💻 Author

- Pavan Kumar Mistry
- [GitHub](https://github.com/mistrypavankumar)
