// import ScheduleBox from "../components/ScheduleBox"
// import data from '../../server/output.json'
// import HeadTitle from "../components/UI/HeadTitle"
import Container from "../components/UI/Container"

function Schedule() {
  return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Container className="flex flex-col items-center justify-center w-auto h-auto">
          <p>Временно заброшено</p>
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