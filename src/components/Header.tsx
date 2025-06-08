import { useHue } from "../hooks/useHue"

function Header() {
    const [hue, setHue] = useHue();

    return(
        <div className="absolute top-0 w-screen h-12 justify-center flex items-center pl-4 pr-4">
            <h1>Plshchkv</h1>
        </div>
    )
}

export default Header