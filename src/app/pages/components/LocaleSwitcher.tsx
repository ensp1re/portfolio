import { useLocale } from "next-intl";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";

export default function LocaleSwitcher() {
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      items={[
        {
          value: "en",
          label: "En",
        },
        {
          value: "uk",
          label: "Uk",
        },
      ]}
      label={""}
    />
  );
}
