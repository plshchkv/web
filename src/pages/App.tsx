import NavigateButton from "../components/UI/NavigateButton";
import Name from "../components/UI/Name";
import Container from "../components/UI/Container";
import { useTranslation } from 'react-i18next';
import ToggleButton from "../components/UI/ToggleButton";
import HueAdjuster from "../components/HueAdjuster";
import { useHue } from '../hooks/useHue';
// import LanguageButton from "../components/UI/LanguageButton";

function App() {
  const [hue, setHue] = useHue();

  const { t } = useTranslation();
  
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className="m-8">
        <div className="flex text-center justify-center min-w-90 max-w-160 flex-col items-center">
          <Name/>
          {/* <LanguageButton/> */}
        </div>
        <Container className="mt-4 min-w-90 max-w-160">
          <p className="flex justify-center">{t('description')}</p>
          
        </Container>
        <div className="flex justify-between mt-4 flex-wrap">
          <NavigateButton className="" icon="simple-icons:github" text="GitHub" open="https://github.com/plshchkv"/>
          <NavigateButton className="" icon="" text={t('schedule')} to="/Расписание"/>
            <ToggleButton icon="" text="Сменить цвет">
              <HueAdjuster hue={hue} setHue={setHue} />
            </ToggleButton>
          <NavigateButton className="" icon="simple-icons:telegram" text="Telegram" open="https://t.me/plshchkvv"/>
        </div>
      </div>
    </div>
  )
}

export default App
