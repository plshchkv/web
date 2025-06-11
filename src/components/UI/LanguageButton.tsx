import { useTranslation } from 'react-i18next';
import Dropdown from './Dropdown';
import Button from './Button';

interface LanguageButtonProps {
    position?: 'left' | 'right' | 'top' | 'bottom';
    align?: 'start' | 'end' | 'center';
    className?: string;
}

function LanguageButton({position, align, className}: LanguageButtonProps) {
    const { i18n } = useTranslation();
    const { t } = useTranslation();
    
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return(
        <div className={`${className}`}>

            <Dropdown trigger={<Button text="" icon="famicons:language"/>} align={align} position={position}>
                <div className='border border-[#ffffff12] rounded-md'>
                    <button className='rounded-t-md hover:bg-[var(--c-secondary-hover)] w-full' onClick={() => {changeLanguage('en')}}>
                        <p className='p-2 text-xs'>{t('lang-en')}</p>
                    </button>
                    <button className='rounded-b-md hover:bg-[var(--c-secondary-hover)] w-full' onClick={() => {changeLanguage('ru')}}>
                        <p className='p-2 text-xs'>{t('lang-ru')}</p>
                    </button>
                </div>
            </Dropdown>
        </div>
    )
}

export default LanguageButton