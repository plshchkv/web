import type { Metadata } from "next";
import "./globals.css";
import {NextIntlClientProvider} from 'next-intl';
import { ColorSettingsProvider } from '@/context/ColorSettingsContext';

export const metadata: Metadata = {
  title: "plshchkv",
  keywords: "web development, React, Next.js, TypeScript, frontend, UI, UX, JavaScript, programming, software, design, localization, context, color settings, Ivan Pleshachkov, Иван Плешачков, Плешачков Иван, Pleshachkov Ivan, plshchkv, pleshachkov плешачков"
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
