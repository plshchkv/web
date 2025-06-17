import { useTranslations } from "next-intl"

function Title() {
    const t = useTranslations("Title")
    return(
        <div>
            <h1 className="text-7xl max-sm:text-6xl">{t('name')}</h1>
        </div>
    )
}

export default Title