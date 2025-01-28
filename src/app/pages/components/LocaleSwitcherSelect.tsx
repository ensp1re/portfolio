"use client";
import { useTransition } from "react";
import { Locale } from "@src/i18n/config";
import { setUserLocale } from "@src/services/locale";

type Props = {
  defaultValue: string;
  items: Array<{ value: string; label: string }>;
  label: string;
};

export default function LocaleSwitcherSelect({
  defaultValue,
  items,
  label,
}: Props) {
  const [isPending, startTransition] = useTransition();

  function onChange(value: string) {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  }
  console.log(label);

  return (
    <div className="flex justify-center items-center space-x-2 w-full">
      {items.map((item) => (
        <button
          key={item.value}
          onClick={() => onChange(item.value)}
          disabled={isPending}
          className={`px-4 py-2 rounded-md text-sm transition duration-200 ${item.value === defaultValue
              ? "bg-sky-500 text-white font-bold  shadow-md"
              : "bg-gray-800 text-gray-400 font-medium hover:bg-gray-700 hover:text-white"
            }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
