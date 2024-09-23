"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  applyPhoneMask,
  extractDigits,
  getInputValue,
  prependCountryCode,
  removeLeadingZero,
} from "./mask";
import { compose } from "@/lib/utils";

const countryCodes = [
  { code: "+996", country: "Kyrgyz Republic", flag: "🇰🇬", mask: "000 000 000" },
];
const mobilePhonePattern = new RegExp(
  "^(\\+996\\s?)?(22[0-9]|50[0-9]|55[0-9]|70[0-9]|75[0-9]|77[0-9]|880|990|995|996|997|998)\\s?\\d{3}\\s?\\d{3}$"
);
function PhoneInput() {
  const [countryCode, setCountryCode] = useState(prependCountryCode());
  const [phone, setPhone] = useState("");
  const [isInvalidPhoneNumber, setIsInvalidPhoneNumber] = useState(false);

  const selectedCountry = countryCodes.find((c) => c.code === countryCode);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsInvalidPhoneNumber(() => false);

    const inputValue = getInputValue(e);

    const formattedNumber = compose(
      (formattedNumber: string) => {
        setPhone(formattedNumber);
        return formattedNumber;
      },
      applyPhoneMask,
      removeLeadingZero
    )(inputValue);

    const onlyDigits = extractDigits(formattedNumber);

    if (onlyDigits.length !== 9) {
      return;
    }
    if (!mobilePhonePattern.test(prependCountryCode(onlyDigits))) {
      setIsInvalidPhoneNumber(() => true);
    }
  };

  return (
    <div className="w-full max-w-sm space-y-4">
      <Label htmlFor="phone">Phone Number</Label>
      <div className="flex space-x-2">
        <Select value={countryCode} disabled onValueChange={setCountryCode}>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Country" />
          </SelectTrigger>
          <SelectContent>
            {countryCodes.map((country) => (
              <SelectItem key={country.code} value={country.code}>
                <div className="flex items-center">
                  <span className="mr-2 text-xl">{country.flag}</span>
                  <span>{country.code}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          id="phone"
          type="tel"
          placeholder={selectedCountry?.mask}
          value={phone}
          onChange={handlePhoneChange}
          className="flex-1"
        />
      </div>
      {isInvalidPhoneNumber && (
        <Label className="text-xs text-red-700">
          {"Maybe that number doesn't exist. Please check again!"}
        </Label>
      )}
      <p className="text-sm text-muted-foreground">
        Full number: {countryCode} {phone}
      </p>
    </div>
  );
}

PhoneInput.displayName = "PhoneInput";

export { PhoneInput };
