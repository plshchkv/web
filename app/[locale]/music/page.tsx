import ApplyStoredColor from "@/components/ApplyStoredColor";
import Header from "@/components/Header";
import {getTranslations} from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    title: t('title')
  };
}

export default function Music() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>  
      <ApplyStoredColor/>
      <Header/>
        музыка
    </div>
  );
}
