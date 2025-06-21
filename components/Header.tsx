'use client'
import Dropdown from "@/components/UI/Dropdown";
import Button from "@/components/UI/Button";
import Navigate from "./UI/Navigate";
import HueColorChanger from "./HueColorChanger";
import LightnessColorChanger from "./LightnessColorChanger";
import { usePathname } from "next/navigation";

interface HeaderProps {
    name?: "yes" | "no";
}

function Header({name = "yes"}: HeaderProps) {
    const pathname = usePathname().replace(/\/(ru|en)\//, '')
    return(
        <div className="absolute top-0 w-3/4 max-xl:w-4/4 justify-between h-12 flex items-center pl-8 pr-8 pt-2">
            <div className="flex">
                <Dropdown
                    align="start"
                    trigger={<Button icon="mdi:color"/>}
                    >
                    <HueColorChanger/>
                </Dropdown>
                <div className="ml-2">
                    <Dropdown
                    align="start"
                    trigger={<Button icon="tabler:sun-filled"/>}
                    >
                    <LightnessColorChanger/>
                    </Dropdown>
                </div>
            </div>
            <div className={`flex ${getName(name)}`}>
                <Navigate to="/" trigger={<h1 className={`cursor-pointer ${getName(name)}`}>plshchkv</h1>}/>
                <h1 className="mr-1 ml-1">|</h1>
                <h1>{pathname}</h1>
            </div>
            <div className="flex">
                <Dropdown triggerEvent="hover" align="end" trigger={<Navigate open="https://github.com/plshchkv" trigger={<Button className="mr-2" icon="mingcute:github-fill"/>}/>}>
                    <p className="text-xs">Github</p>
                </Dropdown>
                <Dropdown triggerEvent="hover" align="end" trigger={<Navigate open="https://t.me/plshchkvv" trigger={<Button icon="mingcute:telegram-fill"/>}/>}>
                    <p className="text-xs">Telegram</p>
                </Dropdown>
            </div>
        </div>
    )
}
function getName(name: "yes" | "no") {
  switch (name) {
    case 'no':
      return 'absolute opacity-0';
    default:
      return '';
  }
}

export default Header