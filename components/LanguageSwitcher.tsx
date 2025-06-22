"use client";

import { usePathname, useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import Dropdown from "./UI/Dropdown";
import Button from "./UI/Button";
import { useTranslations } from "next-intl";

const locales = ["ru", "en"];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const currentLocale = params.locale as string;

  const handleLocaleClick = (newLocale: string) => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
  };
  const t = useTranslations('Misc')
  return (
    <div>
        <Dropdown
            trigger={<Button icon="famicons:language" />}
            dropdownClassName="flex-col flex"
        >
            <div className="border-current">
                {locales.map((locale) => (
                    <button
                        className="cursor-pointer p-0.5 text-sm flex justify-center items-center"
                        key={locale}
                        onClick={() => handleLocaleClick(locale)}
                    >
                        <p className="border border-[#ffffff0b] p-1 rounded-md hover:bg-[var(--c-secondary-hover)] ">{locale.toUpperCase()}</p>
                    </button>
                ))}
            </div>
        </Dropdown>
    </div>
  );
}