import React from "react";

// Reusable container for dashboard sections with consistent spacing, colors, and rounded corners
// Props:
// - title: string | ReactNode
// - className: string (extra classes for outer wrapper)
// - headerRight: ReactNode (optional right-aligned content in header)
// - children: content body
export default function SectionCard({ title, headerRight = null, className = "", bodyClassName = "", children }) {
  return (
    <section
      className={`w-full rounded-lg bg-[#F7F9FB] dark:bg-white-new-5 text-black-new-100 dark:text-white-new-100 flex flex-col ${className}`}
      aria-label={typeof title === "string" ? title : undefined}
    >
      {(title || headerRight) && (
        <header className="flex items-center justify-between px-6 pt-6">
          <div className="text-text-md font-semibold">{title}</div>
          {headerRight}
        </header>
      )}
      <div className={`p-6 pt-4 ${bodyClassName}`}>{children}</div>
    </section>
  );
}
