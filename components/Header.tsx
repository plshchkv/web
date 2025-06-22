'use client'
import Dropdown from "@/components/UI/Dropdown";
import Button from "@/components/UI/Button";
import Navigate from "./UI/Navigate";
import HueColorChanger from "./HueColorChanger";
import LightnessColorChanger from "./LightnessColorChanger";
import LanguageSwitcher from "./LanguageSwitcher";
import { usePathname } from "next/navigation";

interface HeaderProps {
    name?: "yes" | "no";
}

function Header({name = "yes"}: HeaderProps) {
    const cleanPathname = usePathname().replace(/^\/(ru|en)(\/|$)/, '');
    const showText = name !== "no";

    return(
        <div
            className={`
                absolute top-0 w-3/4 max-xl:w-4/4
                h-12 pl-8 pr-8 pt-2
                grid items-center justify-between
                ${showText 
                    ? "grid-cols-3 max-sm:grid-cols-2 max-sm:grid-rows-2" 
                    : "grid-cols-2"
                }
                max-sm:h-auto
            `}
        >
            <div className={`flex ${!showText ? "col-span-1" : ""} max-sm:hidden`}>
                <Dropdown className="mr-2" align="start" trigger={<Button icon="mdi:color"/>}>
                    <HueColorChanger/>
                </Dropdown>
                <Dropdown className="mr-2" align="start" trigger={<Button icon="tabler:sun-filled"/>}>
                    <LightnessColorChanger/>
                </Dropdown>
                <LanguageSwitcher/>
            </div>

            {showText && (
                <div className="flex justify-center max-sm:hidden">
                    <Navigate to="/" trigger={<h1 className="cursor-pointer">plshchkv</h1>}/>
                    <h1 className="mr-1 ml-1">|</h1>
                    <h1>{cleanPathname}</h1>
                </div>
            )}

            <div className={`flex justify-end ${!showText ? "col-span-1" : ""} max-sm:hidden`}>
                <Dropdown triggerEvent="hover" align="end" trigger={<Navigate open="https://github.com/plshchkv" trigger={<Button className="mr-2" icon="mingcute:github-fill"/>}/>}>
                    <p className="text-xs">Github</p>
                </Dropdown>
                <Dropdown triggerEvent="hover" align="end" trigger={<Navigate open="https://t.me/plshchkvv" trigger={<Button icon="mingcute:telegram-fill"/>}/>}>
                    <p className="text-xs">Telegram</p>
                </Dropdown>
            </div>
            
            {showText && (
                <div className="hidden max-sm:flex max-sm:col-span-2 max-sm:row-start-1 max-sm:justify-center max-sm:mt-1">
                    <Navigate to="/" trigger={<h1 className="cursor-pointer">plshchkv</h1>}/>
                    <h1 className="mr-1 ml-1">|</h1>
                    <h1>{cleanPathname}</h1>
                </div>
            )}

            <div className={`mt-1 hidden max-sm:flex max-sm:col-span-2 ${showText ? "max-sm:row-start-2" : "max-sm:row-start-1"} max-sm:justify-center max-sm:gap-2`}>
                <Dropdown align="start" trigger={<Button icon="mdi:color"/>}>
                    <HueColorChanger/>
                </Dropdown>
                <Dropdown align="start" trigger={<Button icon="tabler:sun-filled"/>}>
                    <LightnessColorChanger/>
                </Dropdown>
                <LanguageSwitcher/>
                <Dropdown triggerEvent="hover" align="end" trigger={<Navigate open="https://github.com/plshchkv" trigger={<Button icon="mingcute:github-fill"/>}/>}>
                    <p className="text-xs">Github</p>
                </Dropdown>
                <Dropdown triggerEvent="hover" align="end" trigger={<Navigate open="https://t.me/plshchkvv" trigger={<Button icon="mingcute:telegram-fill"/>}/>}>
                    <p className="text-xs">Telegram</p>
                </Dropdown>
            </div>
        </div>
    )
}

export default Header