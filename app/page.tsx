import Container from "@/components/UI/Container";
import Title from "@/components/Title"
import Header from "@/components/Header";
import Dropdown from "@/components/UI/Dropdown";
import Button from "@/components/UI/Button";
import HueColorChanger from "@/components/HueColorChanger";
import ApplyStoredColor from "@/components/ApplyStoredColor";
import LightnessColorChanger from "@/components/LightnessColorChanger"

export default function Home() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>  
      <ApplyStoredColor/>
      <Header name="no"/>
      <div className="m-8">
        <div className="flex text-center justify-center min-w-90 max-w-160 items-center">
          <Title/>
        </div>
        <Container className="mt-4 min-w-90 max-w-150">
          <p className="">Веб-разработчик с глубоким пониманием современных технологий, таких как Vue.js, React, Nuxt.js, HTML и CSS. Мой опыт позволяет мне создавать интерактивные, производительные и отзывчивые веб-приложения, соответствующие лучшим практикам индустрии.</p>
        </Container>
        <div className="flex justify-between mt-4 flex-wrap">
          <Dropdown
              align="center"
              trigger={<Button text="Изменить цвет" icon=""/>}
          >
            <HueColorChanger/>
          </Dropdown>
          <Dropdown
              align="center"
              trigger={<Button text="Изменить яркость" icon=""/>}
          >
            <LightnessColorChanger/>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
