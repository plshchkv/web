import type { Metadata } from "next";
import "./globals.css";
import {NextIntlClientProvider} from 'next-intl';
import { ColorSettingsProvider } from '@/context/ColorSettingsContext';

export const metadata: Metadata = {
  title: "plshchkv"
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
 
  return (
    <html lang={locale}>
      <body>
        <ColorSettingsProvider>
          <NextIntlClientProvider>
            {children}
          </NextIntlClientProvider>
        </ColorSettingsProvider>
      </body>
    </html>
  );
}
