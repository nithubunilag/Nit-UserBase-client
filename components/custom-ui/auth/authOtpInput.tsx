"use client";

// Import the necessary module and styles.
import { useMemo } from "react";

// Regular expression to match digits.
const RE_DIGIT = new RegExp(/^\d+$/);

// Define the Props type for the component.
type IOtpProps = {
  value: string; // Current OTP value.
  valueLength: number; // Length of the OTP.
  onChange: (value: string) => void; // Callback function for value change.
};

// Define the main OTP input component.
export const OtpInput = ({ value, valueLength, onChange }: IOtpProps) => {
  // Memoize the valueItems to avoid unnecessary re-renders.
  const valueItems = useMemo(() => {
    const valueArray = value.split("");
    const items: Array<string> = [];

    // Loop through each digit position.
    for (let i = 0; i < valueLength; i++) {
      const char = valueArray[i];

      // If the character is a digit, push it into the items array.
      if (RE_DIGIT.test(char)) {
        items.push(char);
      } else {
        // If not a digit, push an empty string.
        items.push("");
      }
    }

    return items;
  }, [value, valueLength]);

  // Function to move focus to the next input.
  const focusToNextInput = (target: HTMLElement) => {
    const nextElementSibling =
      target.nextElementSibling as HTMLInputElement | null;

    if (nextElementSibling) {
      nextElementSibling.focus();
    }
  };

  // Function to move focus to the previous input.
  const focusToPrevInput = (target: HTMLElement) => {
    const previousElementSibling =
      target.previousElementSibling as HTMLInputElement | null;

    if (previousElementSibling) {
      previousElementSibling.focus();
    }
  };

  // Handle input change event.
  const inputOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const target = e.target;
    let targetValue = target.value.trim();
    const isTargetValueDigit = RE_DIGIT.test(targetValue);

    // If the input value is not a digit and not empty, return.
    if (!isTargetValueDigit && targetValue !== "") {
      return;
    }

    targetValue = isTargetValueDigit ? targetValue : " ";

    const targetValueLength = targetValue.length;

    if (targetValueLength === 1) {
      // Create the new OTP value by replacing the character at idx.
      const newValue =
        value.substring(0, idx) + targetValue + value.substring(idx + 1);

      onChange(newValue);

      // Move focus to the next input.
      if (!isTargetValueDigit) {
        return;
      }

      focusToNextInput(target);
    } else if (targetValueLength === valueLength) {
      // Update the OTP value and blur the current input.
      onChange(targetValue);
      target.blur();
    }
  };

  // Handle input keydown event.
  const inputOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    const target = e.target as HTMLInputElement;

    // Move focus based on arrow keys.
    if (key === "ArrowRight" || key === "ArrowDown") {
      e.preventDefault();
      return focusToNextInput(target);
    }

    if (key === "ArrowLeft" || key === "ArrowUp") {
      e.preventDefault();
      return focusToPrevInput(target);
    }

    const targetValue = target.value;
    // Keep the selection range position if the same digit was typed.
    target.setSelectionRange(0, targetValue.length);

    // Handle backspace key to move focus to the previous input.
    if (e.key === "Backspace" && target.value === "") {
      focusToPrevInput(target);
    }
  };

  // Handle input focus event.
  const inputOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const { target } = e;

    // Select the entire input value when focused.
    target.setSelectionRange(0, target.value.length);
  };

  return (
    // Render the OTP input container with individual input boxes.
    <div className=" flex w-full max-w-[300px] gap-[10px] items-center justify-between m-auto my-[1em]">
      {valueItems.map((digit, idx) => (
        <input
          key={idx}
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          pattern="\d{1}"
          maxLength={valueLength}
          className="h-[48px] w-[48px] rounded-[5px] border border-[#333754] text-center text-3xl font-bold transition-all duration-300 ease-in-out caret-primary focus:outline-primary "
          value={digit}
          onChange={(e) => inputOnChange(e, idx)}
          onKeyDown={inputOnKeyDown}
          onFocus={inputOnFocus}
        />
      ))}
    </div>
  );
};
