export type CurrencyOptions = {
  locales?: string | string[];
  currency?: string;
  style?: 'currency' | 'unit';
};

const DEFAULT_CURRENCY_OPTIONS: CurrencyOptions = {
  locales: 'en-US',
  currency: 'USD',
  style: 'currency',
};

/**
 * Formats a number to a currency string.
 *
 * @param {string} value The number to format.
 * @param {CurrencyOptions} currencyOptions The options
 * for formatting the currency.
 * @return {string} The formatted currency string.
 */
export function currencyFormat(
    value: number,
    currencyOptions: CurrencyOptions = DEFAULT_CURRENCY_OPTIONS,
): string {
  const {locales, currency, style} = currencyOptions;

  return new Intl
      .NumberFormat(locales, {
        style: style,
        currency: currency,
      })
      .format(value);
}
