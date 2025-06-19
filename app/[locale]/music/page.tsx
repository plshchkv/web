import ApplyStoredColor from "@/components/ApplyStoredColor";
import Header from "@/components/Header";
import {useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    title: t('title')
  };
}

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <div className='w-screen h-screen flex justify-center items-center'>  
      <ApplyStoredColor/>
      <Header/>
        музыка
    </div>
  );
}
