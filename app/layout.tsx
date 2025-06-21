import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ColorSettingsProvider } from '@/context/ColorSettingsContext';
import {NextIntlClientProvider} from 'next-intl';

export const metadata: Metadata = {
  title: "plshchkv"
};

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
