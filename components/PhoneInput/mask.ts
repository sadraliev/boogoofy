export const prependCountryCode = (number = ""): string => {
  return "+996" + number;
};

export const extractDigits = (input: string): string =>
  input.replace(/\D/g, "");

export const getInputValue = (e: React.ChangeEvent<HTMLInputElement>): string =>
  e.target.value;

export const removeLeadingZero = (phoneNumber: string): string => {
  return phoneNumber.startsWith("0") ? phoneNumber.substring(1) : phoneNumber;
};

export function applyPhoneMask(input: string): string {
  const value = extractDigits(input);
  const numberLength = 9;

  let formatted = "";

  for (let i = 0; i < value.length && i < numberLength; i++) {
    if (i > 0 && (i === 3 || i === 6)) {
      formatted += " ";
    }
    formatted += value[i];
  }

  return formatted;
}
