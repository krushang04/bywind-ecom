import React from "react";

/**
 * InputBar - reusable text input with optional left/right adornments
 * Props:
 * - value, onChange, placeholder
 * - left: ReactNode (optional)
 * - right: ReactNode (optional)
 * - className: string (applied to wrapper)
 * - inputClassName: string (applied to input)
 * - type: string (default "text")
 */
export default function InputBar({
  value,
  onChange,
  placeholder = "",
  left = null,
  right = null,
  className = "",
  inputClassName = "",
  type = "text",
  ...rest
}) {
  return (
    <div className={`flex items-center gap-2 rounded-md border border-black-new-10 dark:border-white-new-10 bg-white dark:bg-black-new-100 px-3 py-2 ${className}`}>
      {left && <div className="shrink-0 text-black-new-40 dark:text-white-new-40">{left}</div>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`flex-1 bg-transparent outline-none text-black-new-100 dark:text-white-new-100 placeholder-black-new-20 dark:placeholder-white-new-20 ${inputClassName}`}
        {...rest}
      />
      {right && <div className="shrink-0 text-black-new-40 dark:text-white-new-40">{right}</div>}
    </div>
  );
}
