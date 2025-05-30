import ScheduleBox from "../components/ScheduleBox"
import data from '../../server/output.json'
import HeadTitle from "../components/UI/HeadTitle"

function Schedule() {
  return (
    <div className='w-screen flex-col flex pr-16 pl-16 pt-4'>
      <HeadTitle buttonto="/" buttontext="Назад" title="Расписание (Забросил (ну тип школа то кончилась))"/>
      {data.slice().reverse().map((item) => (
        <ScheduleBox key={item.id} item={item} />
      ))}
      
    </div>
  )
}

export default Schedule
