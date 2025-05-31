import NavigateButton from "../components/UI/NavigateButton";
import Name from "../components/UI/Name";
import Container from "../components/UI/Container";
import { useTranslation } from 'react-i18next';
// import LanguageButton from "../components/UI/LanguageButton";

function App() {
  const { t } = useTranslation();
  
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className="m-8">
        <div className="flex justify-center flex-col items-center">
          <code>*страница создана с  использование react*</code>
          <Name/>
          {/* <LanguageButton/> */}
        </div>
        <Container className="mt-4 min-w-90 max-w-160">
          <p className="flex justify-center">{t('description')}</p>
        </Container>
        <div className="flex justify-between mt-4">
          <NavigateButton className="" icon="simple-icons:github" text="GitHub" open="https://github.com/plshchkv"/>
          <NavigateButton className="" icon="" text={t('schedule')} to="/Расписание"/>
          <NavigateButton className="" icon="simple-icons:telegram" text="Telegram" open="https://t.me/plshchkvv"/>
        </div>
      </div>
    </div>
  )
}

export default App
