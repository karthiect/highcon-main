import { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function PhoneNumberField({
  initialValue,
  onChange,
}: {
  initialValue?: string;
  onChange?: (value: string) => void;
}) {
  const [value, setValue] = useState<string | undefined>(initialValue || "");

  useEffect(() => {
    if (onChange) {
      onChange(value || "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className="w-full">
      <PhoneInput
        international
        defaultCountry="IN"
        value={value}
        onChange={setValue}
        className="phone-input w-full rounded-[10px] bg-gray-200 px-4 py-3 font-['Inter'] text-sm text-black outline-none placeholder:text-gray-500 focus-within:ring-2 focus-within:ring-gray-400 sm:px-6 sm:py-4 sm:text-base md:text-lg"
        placeholder="Your Phone number*"
      />
    </div>
  );
}
