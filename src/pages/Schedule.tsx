// import ScheduleBox from "../components/ScheduleBox"
// import data from '../../server/output.json'
// import HeadTitle from "../components/UI/HeadTitle"
import Button from "../components/UI/Button"
import Container from "../components/UI/Container"
import Navigate from "../components/UI/Navigate"
import Header from "../components/Header"
import { useTranslation } from "react-i18next";

function Schedule() {
      const { t } = useTranslation();
  return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Header/>
        <Container className="flex flex-col items-center justify-center w-auto h-auto">
          <p className="mb-2">{t('abandoned')}</p>
          <Navigate to="/" trigger={<Button icon="" text={t('back')}/>}/>
        </Container>
      </div>
    // <div className='w-screen flex-col flex pr-16 pl-16 pt-4'>
    //   <HeadTitle buttonto="/" buttontext="Назад" title="Расписание (Забросил (ну тип школа то кончилась))"/>
    //   {data.slice().reverse().map((item) => (
    //     <ScheduleBox key={item.id} item={item} />
    //   ))}
      
    // </div>
  )
}

export default Schedule

// Временно заброшено