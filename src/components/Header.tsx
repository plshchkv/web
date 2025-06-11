import Dropdown from "./UI/Dropdown"
import { useHue } from "../hooks/useHue"
import HueAdjuster from "./HueAdjuster";
import Button from "./UI/Button";
import Navigate from "./UI/Navigate";
import LanguageButton from "./UI/LanguageButton";

interface HeaderProps {
    name?: "yes" | "no";
}

function Header({name = "yes"}: HeaderProps) {
    const [hue, setHue] = useHue();
    return(
        <div className="absolute top-0 w-3/4 max-sm:w-full justify-between h-12 flex items-center pl-8 pr-8 pt-2">
            <div className="flex">
                <Dropdown
                    align="start"
                    trigger={<Button icon="mdi:color"/>}
                >
                    <HueAdjuster hue={hue} setHue={setHue} />
                </Dropdown>
                <div className="ml-2">
                    <LanguageButton position="right" align="start"/>
                </div>
            </div>
                <Navigate to="/" trigger={<h1 className={`mr-2 cursor-pointer ${getName(name)}`}>Plshchkv</h1>}/>
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