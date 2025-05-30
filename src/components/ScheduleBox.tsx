import { useState } from "react";
import Container from "./UI/Container";

type ScheduleBoxProps = {
  item: {
    id: number;
    date: string;
    images: string[];
  }
}

function ScheduleBox({ item }: ScheduleBoxProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <h2 className="p-1 mb-1">{item.date}</h2>
      <Container>
        <div className="flex items-center">
          {item.images.map((img, i) => (
            <div
              key={i}
              className={
                "grayscale-80 w-1/3 p-1 transition-all duration-300 " +
                (activeIndex === i
                  ? "w-5/6"
                  : activeIndex === null
                  ? ""
                  : "basis-1/3")
              }
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              style={{ cursor: "pointer" }}
            >
              <img className="rounded-xl w-full" src={img} alt="" />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

export default ScheduleBox;