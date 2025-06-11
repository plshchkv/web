import Name from "../components/UI/Name";
import Container from "../components/UI/Container";
import { Trans, useTranslation } from 'react-i18next';
import Dropdown from "../components/UI/Dropdown";
import HueAdjuster from "../components/HueAdjuster";
import { useHue } from '../hooks/useHue';
import Navigate from "../components/UI/Navigate";
import Button from "../components/UI/Button";
import Header from "../components/Header";

function MainPage() {
  const [hue, setHue] = useHue();

  const { t } = useTranslation();
  
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <Header name="no"/>
      <div className="m-8">
        <div className="flex text-center justify-center min-w-90 max-w-160 items-center">
          <Name/>
        </div>
        <Container className="mt-4 min-w-90 max-w-150">
          <p className=""><Trans i18nKey="description" components={{ 1: <strong className="text-emerald-300"/>, 2: <strong className="text-sky-300"/>, 3: <strong className="text-green-300"/>, 4: <strong className="text-amber-300"/>, 5: <strong className="text-cyan-300"/>}} /></p>
          
        </Container>
        <div className="flex justify-between mt-4 flex-wrap">
          <Navigate 
            to="/расписание"
            trigger={<Button text={t('schedule')} icon=""/>}
          />
          <Dropdown
              align="center"
              trigger={<Button text={t('colorchange')} icon=""/>}
          >
            <HueAdjuster hue={hue} setHue={setHue} />
          </Dropdown>
        </div>
      </div>
    </div>
  )
}

export default MainPage
