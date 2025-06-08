import Name from "../components/UI/Name";
import Container from "../components/UI/Container";
import { useTranslation } from 'react-i18next';
import Dropdown from "../components/UI/Dropdown";
import HueAdjuster from "../components/HueAdjuster";
import Header from "../components/Header";
import { useHue } from '../hooks/useHue';
import Navigate from "../components/UI/Navigate";
import Button from "../components/UI/Button";
// import LanguageButton from "../components/UI/LanguageButton";

function MainPage() {
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
          <Navigate 
            open="https://github.com/plshchkv" 
            trigger={<Button text="GitHub" icon="simple-icons:github"/>}
          />
          <Navigate 
            to="/расписание"
            trigger={<Button text="Расписание" icon=""/>}
          />
          <Dropdown
              align="center"
              trigger={<Button text="Сменить цвет" icon=""/>}
          >
            <HueAdjuster hue={hue} setHue={setHue} />
          </Dropdown>
          <Navigate open="https://t.me/plshchkvv" trigger={<Button text="Telegram" icon="simple-icons:telegram"/>}
          />
        </div>
      </div>
    </div>
  )
}

export default MainPage
