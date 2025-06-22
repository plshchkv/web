import Container from "@/components/UI/Container";
import Title from "@/components/Title"
import Header from "@/components/Header";
import Dropdown from "@/components/UI/Dropdown";
import Button from "@/components/UI/Button";
import HueColorChanger from "@/components/HueColorChanger";
import LightnessColorChanger from "@/components/LightnessColorChanger"
import {useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    title: t('title'),
    description: t('description')
  };
}

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <div className='w-screen h-screen flex justify-center items-center'>  
      <Header name="no"/>
      <div className="m-8">
        <div className="flex text-center justify-center min-w-90 max-w-160 items-center">
          <Title/>
        </div>
        <Container className="mt-4 min-w-90 max-w-150">
          <p className="">{t('description')}</p>
        </Container>
        <div className="flex justify-between mt-4 flex-wrap">
          <Dropdown
              align="center"
              trigger={<Button text={t('changecolor')} icon=""/>}
          >
            <HueColorChanger/>
          </Dropdown>
          <Dropdown
              align="center"
              trigger={<Button text={t('changelightness')} icon=""/>}
          >
            <LightnessColorChanger/>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
