import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ColorSettingsProvider } from '@/context/ColorSettingsContext';
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {routing} from '@/i18n/routing';

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
  // Ensure that the incoming `locale` is valid
  const {locale} = await params; 
  return (
    <html lang="ru">
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
