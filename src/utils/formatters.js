// Formatting utilities

export const formatCurrency = (amount, locale = "en-US", currency = "USD") => {
  try {
    return new Intl.NumberFormat(locale, { style: "currency", currency }).format(amount);
  } catch (e) {
    // Fallback to fixed 2 decimals if Intl fails for any reason
    return `$${Number(amount).toFixed(2)}`;
  }
};
