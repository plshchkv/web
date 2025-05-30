import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify/react'

function LanguageButton() {
    const { i18n } = useTranslation();
    
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return(
        <button className='ml-2 text-5xl' onClick={() => {changeLanguage('en')}}>
            <Icon icon='mdi:language'/>
        </button>
    )
}

export default LanguageButton