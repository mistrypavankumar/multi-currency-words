export interface ToWordsOptions {
  style?: "indian" | "international";
  currency?: string;
  subCurrency?: string;
}

export function toWords(amount: number, options?: ToWordsOptions): string;
